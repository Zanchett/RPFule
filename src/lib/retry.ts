/**
 * Retry wrapper with exponential backoff for transient failures.
 * Only retries on network errors and 5xx status codes.
 * Rethrows 4xx errors immediately (auth failures, bad requests).
 */
export async function withRetry<T>(
  fn: () => Promise<T>,
  opts: { retries?: number; baseDelay?: number } = {}
): Promise<T> {
  const { retries = 3, baseDelay = 500 } = opts
  let lastError: unknown

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      return await fn()
    } catch (err: unknown) {
      lastError = err

      // Don't retry client errors (4xx)
      if (err && typeof err === 'object' && 'status' in err) {
        const status = (err as { status: number }).status
        if (status >= 400 && status < 500) throw err
      }
      if (err instanceof Error && err.message?.includes('JWT')) throw err

      // Don't retry if we've exhausted attempts
      if (attempt === retries) break

      // Exponential backoff: 500ms, 1000ms, 2000ms
      await new Promise((resolve) => setTimeout(resolve, baseDelay * Math.pow(2, attempt)))
    }
  }

  throw lastError
}
