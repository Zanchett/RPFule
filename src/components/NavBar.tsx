import { Group, Button, Text, Box } from '@mantine/core'
import { useNavigate, useLocation } from 'react-router-dom'
import { useAuthStore } from '../stores/authStore'

export function NavBar(): JSX.Element {
  const navigate = useNavigate()
  const location = useLocation()
  const signOut = useAuthStore((s) => s.signOut)
  const profile = useAuthStore((s) => s.profile)
  const user = useAuthStore((s) => s.user)

  const displayName = profile?.display_name
    || user?.user_metadata?.display_name
    || user?.email?.split('@')[0]
    || 'Adventurer'

  const navItems = [
    { label: 'Characters', path: '/' },
    { label: 'Campaigns', path: '/campaigns' }
  ]

  return (
    <Box
      px="lg"
      py="xs"
      style={{
        background: 'linear-gradient(180deg, #1e1610 0%, #120d06 100%)',
        borderBottom: '1px solid #3a2a1a'
      }}
    >
      <Group justify="space-between">
        {/* Left: Logo */}
        <Text
          fw={700}
          style={{
            fontFamily: '"Cinzel", serif',
            color: '#d4a843',
            fontSize: '1rem',
            cursor: 'pointer'
          }}
          onClick={() => navigate('/')}
        >
          RPFule
        </Text>

        {/* Center: Nav buttons */}
        <Group gap="lg" style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
          {navItems.map((item) => (
            <Button
              key={item.path}
              variant="subtle"
              size="md"
              color="yellow"
              onClick={() => navigate(item.path)}
              style={{
                fontFamily: '"Cinzel", serif',
                color: location.pathname === item.path ? '#f0c75e' : '#8b7355',
                fontSize: '0.95rem',
                letterSpacing: '0.03em'
              }}
            >
              {item.label}
            </Button>
          ))}
        </Group>

        {/* Right: User + Logout */}
        <Group gap="sm">
          <Text size="sm" style={{ color: '#8b7355' }}>
            {displayName}
          </Text>
          <Button
            variant="subtle"
            size="xs"
            color="red"
            onClick={async () => {
              await signOut()
              navigate('/login')
            }}
            style={{ fontSize: '0.75rem' }}
          >
            Logout
          </Button>
        </Group>
      </Group>
    </Box>
  )
}
