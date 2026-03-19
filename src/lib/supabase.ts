import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env')
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
  }
)

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

/**
 * Ensure the Supabase session is alive and the token is fresh.
 * Call this before any critical Supabase query to prevent expired-token failures.
 */
let lastEnsure = 0
let ensurePromise: Promise<boolean> | null = null

export function ensureSession(): Promise<boolean> {
  const now = Date.now()
  const age = now - lastEnsure
  if (age < 30_000) {
    dbg('auth', `ensureSession: cached (${Math.round(age / 1000)}s ago)`)
    return Promise.resolve(true)
  }

  if (ensurePromise) {
    dbg('auth', 'ensureSession: dedup — reusing in-flight check')
    return ensurePromise
  }

  dbg('auth', 'ensureSession: starting fresh check...')
  ensurePromise = _doEnsureSession().finally(() => {
    ensurePromise = null
  })
  return ensurePromise
}

async function _doEnsureSession(): Promise<boolean> {
  try {
    const t0 = Date.now()
    const { data: { session } } = await supabase.auth.getSession()

    if (!session) {
      dbg('auth', 'ensureSession: NO SESSION — user not logged in')
      return false
    }

    const expiresAt = session.expires_at ?? 0
    const now = Math.floor(Date.now() / 1000)
    const ttl = expiresAt - now

    dbg('auth', `ensureSession: token TTL = ${ttl}s (${Math.round(ttl / 60)}min)`)

    if (ttl < 300) {
      dbg('auth', 'ensureSession: token near expiry — refreshing...')
      const rt0 = Date.now()
      const { data: { session: refreshed }, error: refreshError } = await supabase.auth.refreshSession()
      const elapsed = Date.now() - rt0

      if (refreshError) {
        dbg('auth', `ensureSession: REFRESH FAILED (${elapsed}ms)`, refreshError.message)
        return false
      }
      if (refreshed) {
        const newTtl = (refreshed.expires_at ?? 0) - Math.floor(Date.now() / 1000)
        dbg('auth', `ensureSession: refreshed OK (${elapsed}ms), new TTL = ${newTtl}s`)
        lastEnsure = Date.now()
        return true
      }
      dbg('auth', `ensureSession: refresh returned null session (${elapsed}ms)`)
      return false
    }

    dbg('auth', `ensureSession: token OK (${Date.now() - t0}ms)`)
    lastEnsure = Date.now()
    return true
  } catch (err) {
    dbg('auth', 'ensureSession: EXCEPTION', err)
    return false
  }
}

// Proactively refresh the session when the user returns to the tab.
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      dbg('auth', 'Tab became visible — forcing session check')
      lastEnsure = 0
      ensureSession().catch(() => {})
    }
  })
}
