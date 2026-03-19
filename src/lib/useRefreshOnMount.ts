import { useEffect, useRef } from 'react'

/**
 * Hook that calls a refresh function:
 * 1. On EVERY component mount (navigation back = remount = fresh data)
 * 2. When the browser tab becomes visible again AFTER being idle for 60+ seconds
 *
 * Includes a cooldown to prevent hammering the API on rapid tab switches.
 */
export function useRefreshOnMount(refreshFn: () => void | Promise<void>): void {
  const refreshRef = useRef(refreshFn)
  refreshRef.current = refreshFn

  // Track last refresh time to prevent rapid-fire calls
  const lastRefreshRef = useRef(0)

  useEffect(() => {
    // Always fetch on mount
    lastRefreshRef.current = Date.now()
    refreshRef.current()

    // Refresh when tab becomes visible — but only if it's been idle for 60+ seconds
    const handleVisibility = (): void => {
      if (document.visibilityState !== 'visible') return
      const elapsed = Date.now() - lastRefreshRef.current
      if (elapsed < 60_000) return // Skip if refreshed less than 60 seconds ago
      lastRefreshRef.current = Date.now()
      refreshRef.current()
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [])
}
