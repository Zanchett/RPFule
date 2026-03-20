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
      dbg('auth', `refresh TIMED OUT (${elapsed}ms) — Web Locks broken, using raw fetch`)
      // Web Locks are dead. Bypass the Supabase client entirely and call
      // the auth API directly with a raw fetch() + the refresh token from localStorage.
      return _rawRefresh()
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
 * Raw refresh: bypass the Supabase JS client entirely (which uses Web Locks)
 * and call the Supabase auth REST API directly with a plain fetch().
 * Reads the refresh_token from localStorage, posts it to /auth/v1/token,
 * and updates both localStorage and our in-memory cache with the new session.
 */
async function _rawRefresh(): Promise<boolean> {
  try {
    // Read the stored session from localStorage (Supabase stores it here)
    const storageKey = `sb-${new URL(supabaseUrl || '').hostname.split('.')[0]}-auth-token`
    const raw = localStorage.getItem(storageKey)
    if (!raw) {
      dbg('auth', 'rawRefresh: no stored session in localStorage')
      return false
    }

    let stored: { refresh_token?: string }
    try {
      stored = JSON.parse(raw)
    } catch {
      dbg('auth', 'rawRefresh: failed to parse stored session')
      return false
    }

    const refreshToken = stored.refresh_token
    if (!refreshToken) {
      dbg('auth', 'rawRefresh: no refresh_token in stored session')
      return false
    }

    dbg('auth', 'rawRefresh: calling /auth/v1/token directly...')
    const t0 = Date.now()

    // Direct API call — no Web Locks involved
    const response = await fetch(`${supabaseUrl}/auth/v1/token?grant_type=refresh_token`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'apikey': supabaseAnonKey || '',
      },
      body: JSON.stringify({ refresh_token: refreshToken }),
    })

    const elapsed = Date.now() - t0

    if (!response.ok) {
      dbg('auth', `rawRefresh: API returned ${response.status} (${elapsed}ms)`)
      return false
    }

    const data = await response.json()
    dbg('auth', `rawRefresh: OK (${elapsed}ms), got new tokens`)

    // Update localStorage so the Supabase client picks up the new tokens
    localStorage.setItem(storageKey, JSON.stringify(data))

    // Update our in-memory cache
    cachedSession = {
      access_token: data.access_token,
      refresh_token: data.refresh_token,
      expires_in: data.expires_in,
      expires_at: data.expires_at ?? Math.floor(Date.now() / 1000) + (data.expires_in || 3600),
      token_type: data.token_type || 'bearer',
      user: data.user,
    } as Session

    // Tell the Supabase client about the new session so its internal state updates
    // This may or may not work depending on lock state, but it's best-effort
    try {
      await supabase.auth.setSession({
        access_token: data.access_token,
        refresh_token: data.refresh_token,
      })
      dbg('auth', 'rawRefresh: supabase.auth.setSession succeeded')
    } catch {
      dbg('auth', 'rawRefresh: supabase.auth.setSession failed (locks still broken), but raw cache is updated')
    }

    return true
  } catch (err) {
    dbg('auth', 'rawRefresh: EXCEPTION', err)
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
