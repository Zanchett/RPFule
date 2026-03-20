import { createClient, Session } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
}

// ── Debug logging (prefix all with [RPF] so you can filter in console) ──
const DEBUG = true
function dbg(area: string, msg: string, data?: unknown) {
  if (!DEBUG) return
  const ts = new Date().toISOString().slice(11, 23)
  if (data !== undefined) {
    console.log(`[RPF ${ts}] [${area}] ${msg}`, data)
  } else {
    console.log(`[RPF ${ts}] [${area}] ${msg}`)
  }
}

export { dbg }

// Custom fetch with automatic timeout — kills stale TCP connections
// that hang after the browser has been idle. Without this, requests
// can hang forever on a dead connection.
function fetchWithTimeout(url: RequestInfo | URL, options?: RequestInit): Promise<Response> {
  const controller = new AbortController()
  const timeoutId = setTimeout(() => {
    const urlStr = typeof url === 'string' ? url : url.toString()
    const shortUrl = urlStr.split('?')[0].split('/').slice(-2).join('/')
    dbg('fetch', `TIMEOUT after 5s — aborting: ${shortUrl}`)
    controller.abort()
  }, 5000) // 5 second max per request

  return fetch(url, {
    ...options,
    signal: controller.signal,
  }).finally(() => clearTimeout(timeoutId))
}

export const supabase = createClient(
  supabaseUrl || 'https://placeholder.supabase.co',
  supabaseAnonKey || 'placeholder',
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
    global: {
      fetch: fetchWithTimeout,
    },
  }
)

// ────────────────────────────────────────────────────────────────────────────
// SESSION CACHE
//
// The core fix: instead of calling supabase.auth.getSession() everywhere
// (which uses the browser Web Locks API and can deadlock / throw
// "The lock request is aborted"), we keep the session in memory and
// update it via the onAuthStateChange listener.
//
// This means:
//  - ensureSession() reads from memory (~0ms, no lock contention)
//  - Only ONE codepath ever calls getSession() (the initial bootstrap below)
//  - Only ONE codepath ever calls refreshSession() (ensureSession, serialized)
//  - The Supabase client's autoRefreshToken handles background refreshes
//    and notifies us via onAuthStateChange
// ────────────────────────────────────────────────────────────────────────────

let cachedSession: Session | null = null
let sessionInitialized = false
let initPromise: Promise<void> | null = null

// Bootstrap: read the session from storage ONCE at startup
function initSession(): Promise<void> {
  if (initPromise) return initPromise
  initPromise = (async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession()
      cachedSession = session
      dbg('auth', `session bootstrap: ${session ? 'found' : 'none'}`)
    } catch (err) {
      dbg('auth', 'session bootstrap FAILED', err)
    }
    sessionInitialized = true
  })()
  return initPromise
}

// Start bootstrap immediately
initSession()

// Keep the cache updated — this is the SINGLE listener for auth changes
supabase.auth.onAuthStateChange((_event, session) => {
  cachedSession = session
  sessionInitialized = true
  dbg('auth', `onAuthStateChange: ${_event}, session=${!!session}`)
})

/**
 * Ensure the Supabase session is alive and the token is fresh.
 * Reads from memory cache — NO browser lock contention.
 * Only calls refreshSession() if the token is near expiry, and serializes
 * that call so only one refresh is ever in-flight.
 */
let refreshPromise: Promise<boolean> | null = null

export function ensureSession(): Promise<boolean> {
  // Wait for bootstrap if it hasn't finished yet
  if (!sessionInitialized) {
    dbg('auth', 'ensureSession: waiting for bootstrap...')
    return initSession().then(() => ensureSession())
  }

  if (!cachedSession) {
    dbg('auth', 'ensureSession: no session — user not logged in')
    return Promise.resolve(false)
  }

  const expiresAt = cachedSession.expires_at ?? 0
  const now = Math.floor(Date.now() / 1000)
  const ttl = expiresAt - now

  // Token is valid and has plenty of time left — instant return
  if (ttl > 300) {
    return Promise.resolve(true)
  }

  // Token is near expiry or expired — need to refresh
  // Serialize: only one refresh at a time
  if (refreshPromise) {
    dbg('auth', 'ensureSession: dedup — reusing in-flight refresh')
    return refreshPromise
  }

  dbg('auth', `ensureSession: token TTL=${ttl}s — refreshing...`)
  refreshPromise = _doRefresh().finally(() => {
    refreshPromise = null
  })
  return refreshPromise
}

async function _doRefresh(): Promise<boolean> {
  try {
    const t0 = Date.now()

    // CRITICAL: refreshSession() can hang FOREVER due to orphaned Web Locks.
    // Race it against a 5-second timeout so we don't block the entire app.
    const result = await Promise.race([
      supabase.auth.refreshSession(),
      new Promise<null>((resolve) => setTimeout(() => resolve(null), 5000))
    ])

    const elapsed = Date.now() - t0

    if (!result) {
      dbg('auth', `refresh TIMED OUT (${elapsed}ms) — Web Locks likely orphaned`)
      // Last resort: try getSession() — the Supabase client may have
      // auto-refreshed in the background and the local storage might have
      // a valid session even though refreshSession() is stuck.
      try {
        const { data: { session: fallbackSession } } = await Promise.race([
          supabase.auth.getSession(),
          new Promise<never>((_, reject) => setTimeout(() => reject(new Error('getSession timeout')), 3000))
        ])
        if (fallbackSession) {
          cachedSession = fallbackSession
          const ttl = (fallbackSession.expires_at ?? 0) - Math.floor(Date.now() / 1000)
          dbg('auth', `fallback getSession OK, TTL=${ttl}s`)
          return ttl > 0
        }
      } catch {
        dbg('auth', 'fallback getSession also failed')
      }
      return false
    }

    const { data: { session }, error } = result

    if (error) {
      dbg('auth', `refresh FAILED (${elapsed}ms): ${error.message}`)
      return false
    }
    if (session) {
      cachedSession = session
      const newTtl = (session.expires_at ?? 0) - Math.floor(Date.now() / 1000)
      dbg('auth', `refresh OK (${elapsed}ms), new TTL=${newTtl}s`)
      return true
    }
    dbg('auth', `refresh returned null (${elapsed}ms)`)
    return false
  } catch (err) {
    dbg('auth', 'refresh EXCEPTION', err)
    return false
  }
}

/**
 * Get the cached user ID without any lock contention.
 * Returns null if no session.
 */
export function getCachedUserId(): string | null {
  return cachedSession?.user?.id ?? null
}

// Proactively refresh when user returns to tab
// (browser throttles background timers, so auto-refresh may have missed)
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && cachedSession) {
      const expiresAt = cachedSession.expires_at ?? 0
      const now = Math.floor(Date.now() / 1000)
      const ttl = expiresAt - now
      if (ttl < 300) {
        dbg('auth', `Tab visible — token TTL=${ttl}s, refreshing...`)
        ensureSession().catch(() => {})
      }
    }
  })
}
