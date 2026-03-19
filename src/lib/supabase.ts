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

/**
 * Ensure the Supabase session is alive and the token is fresh.
 * Call this before any critical Supabase query to prevent expired-token failures.
 *
 * Smart caching: If the session was verified in the last 30 seconds, returns
 * immediately without any network call. Multiple concurrent calls share the
 * same in-flight promise (deduplication).
 */
let lastEnsure = 0
let ensurePromise: Promise<boolean> | null = null

export function ensureSession(): Promise<boolean> {
  // Fast path: session was verified recently — no work needed
  const now = Date.now()
  if (now - lastEnsure < 30_000) return Promise.resolve(true)

  // Dedup: if there's already an in-flight ensureSession, reuse it
  if (ensurePromise) return ensurePromise

  ensurePromise = _doEnsureSession().finally(() => {
    ensurePromise = null
  })
  return ensurePromise
}

async function _doEnsureSession(): Promise<boolean> {
  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return false

    const expiresAt = session.expires_at ?? 0
    const now = Math.floor(Date.now() / 1000)

    // If token expires in less than 5 minutes, proactively refresh it
    if (expiresAt - now < 300) {
      const { data: { session: refreshed } } = await supabase.auth.refreshSession()
      if (refreshed) {
        lastEnsure = Date.now()
        return true
      }
      return false
    }

    lastEnsure = Date.now()
    return true
  } catch {
    return false
  }
}

// Proactively refresh the session when the user returns to the tab.
// This prevents the "first request after idle fails" problem because
// the browser throttles timers in background tabs, which can cause
// Supabase's auto-refresh to miss its window.
if (typeof document !== 'undefined') {
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // Force a fresh check by clearing the cache timestamp
      lastEnsure = 0
      ensureSession().catch(() => {})
    }
  })
}
