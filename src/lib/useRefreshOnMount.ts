import { useEffect, useRef } from 'react'

/**
 * Hook that calls a refresh function:
 * 1. On EVERY mount (not just first mount — fixes navigation back not re-fetching)
 * 2. When the browser tab becomes visible again (fixes stale data after idle)
 *
 * This replaces the standard useEffect pattern that only fires once due to
 * stable Zustand function references.
 */
export function useRefreshOnMount(refreshFn: () => void | Promise<void>): void {
  const refreshRef = useRef(refreshFn)
  refreshRef.current = refreshFn

  useEffect(() => {
    // Always fetch on mount (navigation back = remount)
    refreshRef.current()

    // Also refresh when tab becomes visible again (after idle/tab switch)
    const handleVisibility = (): void => {
      if (document.visibilityState === 'visible') {
        refreshRef.current()
      }
    }

    document.addEventListener('visibilitychange', handleVisibility)
    return () => {
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, []) // Empty deps = runs on every mount, cleans up on unmount
}
