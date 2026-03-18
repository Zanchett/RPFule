import { Navigate, Outlet } from 'react-router-dom'
import { Center, Loader } from '@mantine/core'
import { useAuthStore } from '../stores/authStore'

export function AuthGuard(): JSX.Element {
  const user = useAuthStore((s) => s.user)
  const loading = useAuthStore((s) => s.loading)

  if (loading) {
    return (
      <Center h="100vh" style={{ background: '#120d06' }}>
        <Loader color="yellow" size="lg" />
      </Center>
    )
  }

  if (!user) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
