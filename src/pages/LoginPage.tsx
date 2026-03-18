import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import {
  Box, Container, Stack, Title, Text, TextInput, PasswordInput,
  Button, Alert, Center
} from '@mantine/core'
import { useAuthStore } from '../stores/authStore'

export function LoginPage(): JSX.Element {
  const navigate = useNavigate()
  const { signIn, error, clearError } = useAuthStore()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault()
    setLoading(true)
    try {
      await signIn(email, password)
      navigate('/')
    } catch {
      // error is set in store
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #120d06 0%, #1a1209 50%, #120d06 100%)'
      }}
    >
      <Container size="xs" py={80}>
        <Stack gap="xl">
          <Center>
            <Stack align="center" gap={4}>
              <Text
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '0.9rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#9a7b2f'
                }}
              >
                &#9876; Welcome Back &#9876;
              </Text>
              <Title
                order={1}
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '2.4rem',
                  fontWeight: 800,
                  background: 'linear-gradient(180deg, #f0c75e 0%, #d4a843 40%, #9a7b2f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                RPFule
              </Title>
            </Stack>
          </Center>

          <Box
            p="xl"
            style={{
              background: 'rgba(36, 28, 20, 0.8)',
              border: '1px solid #4a3828',
              borderRadius: 8
            }}
          >
            <form onSubmit={handleSubmit}>
              <Stack gap="md">
                {error && (
                  <Alert color="red" variant="light" onClose={clearError} withCloseButton>
                    {error}
                  </Alert>
                )}
                <TextInput
                  label="Email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.currentTarget.value)}
                  required
                  styles={{
                    label: { color: '#c4a96a', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
                    input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3' }
                  }}
                />
                <PasswordInput
                  label="Password"
                  placeholder="Your password"
                  value={password}
                  onChange={(e) => setPassword(e.currentTarget.value)}
                  required
                  styles={{
                    label: { color: '#c4a96a', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
                    input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3' }
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  loading={loading}
                  color="yellow"
                  style={{ fontFamily: '"Cinzel", serif', color: '#120d06' }}
                >
                  Sign In
                </Button>
                <Text size="sm" ta="center" style={{ color: '#8b7355' }}>
                  Don&apos;t have an account?{' '}
                  <Link to="/register" style={{ color: '#d4a843' }}>
                    Create one
                  </Link>
                </Text>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
