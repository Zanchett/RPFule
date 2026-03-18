import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Box, Container, Stack, Title, Text, Button, Group, Badge,
  Modal, TextInput, Textarea, Select, Alert, Center
} from '@mantine/core'
import { useCampaignStore } from '../stores/campaignStore'
import { NavBar } from '../components/NavBar'
import { getAllGameSystems } from '../../game-systems'

export function CampaignsPage(): JSX.Element {
  const navigate = useNavigate()
  const { campaigns, joinedCampaigns, loadCampaigns, createCampaign, joinCampaign } = useCampaignStore()

  const [createOpen, setCreateOpen] = useState(false)
  const [joinOpen, setJoinOpen] = useState(false)
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [gameSystemId, setGameSystemId] = useState('pf2e')
  const [joinCode, setJoinCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const allSystems = getAllGameSystems()

  useEffect(() => {
    loadCampaigns()
  }, [loadCampaigns])

  const handleCreate = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      const id = await createCampaign(name, description, gameSystemId)
      setCreateOpen(false)
      setName('')
      setDescription('')
      navigate(`/campaign/${id}`)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const handleJoin = async (): Promise<void> => {
    setLoading(true)
    setError(null)
    try {
      const campaignId = await joinCampaign(joinCode.toUpperCase().trim())
      setJoinOpen(false)
      setJoinCode('')
      navigate(`/campaign/${campaignId}`)
    } catch (err) {
      setError((err as Error).message)
    } finally {
      setLoading(false)
    }
  }

  const cardStyle = {
    background: 'rgba(36, 28, 20, 0.8)',
    border: '1px solid #4a3828',
    borderRadius: 8,
    padding: 20,
    cursor: 'pointer' as const,
    transition: 'border-color 0.2s',
    ':hover': { borderColor: '#d4a843' }
  }

  return (
    <Box style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #120d06 0%, #1a1209 50%, #120d06 100%)' }}>
      <NavBar />
      <Container size="lg" py="xl">
        <Stack gap="xl">
          <Group justify="space-between" align="center">
            <Title order={2} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
              Campaigns
            </Title>
            <Group gap="sm">
              <Button
                variant="outline"
                color="yellow"
                onClick={() => { setError(null); setJoinOpen(true) }}
                style={{ fontFamily: '"Cinzel", serif', borderColor: '#9a7b2f', color: '#f0c75e' }}
              >
                Join Campaign
              </Button>
              <Button
                color="yellow"
                onClick={() => { setError(null); setCreateOpen(true) }}
                style={{ fontFamily: '"Cinzel", serif', color: '#120d06' }}
              >
                + Create Campaign
              </Button>
            </Group>
          </Group>

          {/* DM Campaigns */}
          <Box>
            <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a', fontSize: '1rem' }}>
              Your Campaigns (DM)
            </Title>
            {campaigns.length === 0 ? (
              <Text size="sm" style={{ color: '#5c4a35' }}>You haven&apos;t created any campaigns yet.</Text>
            ) : (
              <Stack gap="md">
                {campaigns.map((c) => (
                  <Box key={c.id} style={cardStyle} onClick={() => navigate(`/campaign/${c.id}`)}>
                    <Group justify="space-between">
                      <Stack gap={4}>
                        <Text fw={700} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>{c.name}</Text>
                        {c.description && <Text size="sm" style={{ color: '#8b7355' }}>{c.description}</Text>}
                      </Stack>
                      <Badge className="badge-boost" size="sm">DM</Badge>
                    </Group>
                  </Box>
                ))}
              </Stack>
            )}
          </Box>

          <div className="ornament-divider">&#10022; &#10022; &#10022;</div>

          {/* Joined Campaigns */}
          <Box>
            <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a', fontSize: '1rem' }}>
              Joined Campaigns
            </Title>
            {joinedCampaigns.length === 0 ? (
              <Text size="sm" style={{ color: '#5c4a35' }}>You haven&apos;t joined any campaigns yet. Ask your DM for an invite code!</Text>
            ) : (
              <Stack gap="md">
                {joinedCampaigns.map((c) => (
                  <Box key={c.id} style={cardStyle} onClick={() => navigate(`/campaign/${c.id}`)}>
                    <Group justify="space-between">
                      <Stack gap={4}>
                        <Text fw={700} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>{c.name}</Text>
                        {c.description && <Text size="sm" style={{ color: '#8b7355' }}>{c.description}</Text>}
                      </Stack>
                      <Badge className="badge-muted" size="sm">Player</Badge>
                    </Group>
                  </Box>
                ))}
              </Stack>
            )}
          </Box>
        </Stack>
      </Container>

      {/* Create Campaign Modal */}
      <Modal
        opened={createOpen}
        onClose={() => setCreateOpen(false)}
        title={<Text fw={700} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>Create Campaign</Text>}
        styles={{
          content: { background: '#1e1610', border: '1px solid #4a3828' },
          header: { background: '#1e1610' }
        }}
      >
        <Stack gap="md">
          {error && <Alert color="red" variant="light">{error}</Alert>}
          <TextInput
            label="Campaign Name"
            placeholder="e.g., Rise of the Runelords"
            value={name}
            onChange={(e) => setName(e.currentTarget.value)}
            required
            styles={{
              label: { color: '#c4a96a', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
              input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3' }
            }}
          />
          <Textarea
            label="Description"
            placeholder="Brief campaign description..."
            value={description}
            onChange={(e) => setDescription(e.currentTarget.value)}
            styles={{
              label: { color: '#c4a96a', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
              input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3' }
            }}
          />
          <Select
            label="Game System"
            data={allSystems.map((s) => ({ value: s.id, label: s.name }))}
            value={gameSystemId}
            onChange={(v) => setGameSystemId(v || 'pf2e')}
            styles={{
              label: { color: '#c4a96a', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
              input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3' }
            }}
          />
          <Button
            fullWidth
            color="yellow"
            loading={loading}
            onClick={handleCreate}
            disabled={!name.trim()}
            style={{ fontFamily: '"Cinzel", serif', color: '#120d06' }}
          >
            Create Campaign
          </Button>
        </Stack>
      </Modal>

      {/* Join Campaign Modal */}
      <Modal
        opened={joinOpen}
        onClose={() => setJoinOpen(false)}
        title={<Text fw={700} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>Join Campaign</Text>}
        styles={{
          content: { background: '#1e1610', border: '1px solid #4a3828' },
          header: { background: '#1e1610' }
        }}
      >
        <Stack gap="md">
          {error && <Alert color="red" variant="light">{error}</Alert>}
          <TextInput
            label="Invite Code"
            placeholder="Enter 6-character code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.currentTarget.value.toUpperCase())}
            maxLength={6}
            styles={{
              label: { color: '#c4a96a', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
              input: {
                background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3',
                fontFamily: 'monospace', fontSize: '1.5rem', textAlign: 'center',
                letterSpacing: '0.3em'
              }
            }}
          />
          <Button
            fullWidth
            color="yellow"
            loading={loading}
            onClick={handleJoin}
            disabled={joinCode.trim().length !== 6}
            style={{ fontFamily: '"Cinzel", serif', color: '#120d06' }}
          >
            Join
          </Button>
        </Stack>
      </Modal>
    </Box>
  )
}
