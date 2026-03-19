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
 * Call this before any critical operation after the tab has been idle.
 * Returns true if session is valid, false if user needs to re-login.
 */
export async function ensureSession(): Promise<boolean> {
  try {
    const { data: { session } } = await supabase.auth.getSession()
    if (!session) return false

    const expiresAt = session.expires_at ?? 0
    const now = Math.floor(Date.now() / 1000)

    // If token expires in less than 5 minutes, proactively refresh it
    if (expiresAt - now < 300) {
      const { data: { session: refreshed } } = await supabase.auth.refreshSession()
      return !!refreshed
    }

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
  let lastRefresh = Date.now()

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
      // Only refresh if it's been more than 30 seconds since last check
      const elapsed = Date.now() - lastRefresh
      if (elapsed > 30_000) {
        lastRefresh = Date.now()
        ensureSession().catch(() => {
          // Silently fail — the next actual API call will handle auth errors
        })
      }
    }
  })
}
