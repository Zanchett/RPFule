import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box, Container, Stack, Title, Text, Button, Group, Badge,
  ActionIcon, TextInput, Textarea, Modal, Loader, Center,
  CopyButton, Tooltip, SimpleGrid
} from '@mantine/core'
import { useCampaignStore } from '../stores/campaignStore'
import { useAuthStore } from '../stores/authStore'
import { NavBar } from '../components/NavBar'
import { ShopManager } from '../components/shop/ShopManager'
import { ShopBrowser } from '../components/shop/ShopBrowser'
import { getGameSystem, getDefaultGameSystem } from '../../game-systems'

export function CampaignDetailPage(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const user = useAuthStore((s) => s.user)
  const {
    currentCampaign, members, campaignCharacters, inviteCode, loading,
    loadCampaignDetail, generateInviteCode, removeMember, leaveCampaign, updateCampaign,
    subscribeToCampaign
  } = useCampaignStore()

  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState('')
  const [editDesc, setEditDesc] = useState('')
  const [confirmLeave, setConfirmLeave] = useState(false)
  const [loadError, setLoadError] = useState(false)

  const isDM = currentCampaign?.dmUserId === user?.id

  const loadData = useCallback(() => {
    if (!id) return
    setLoadError(false)
    loadCampaignDetail(id).catch(() => setLoadError(true))
  }, [id, loadCampaignDetail])

  useEffect(() => {
    if (!id) return
    loadData()
    // Subscribe to real-time campaign changes (members joining/leaving, characters assigned)
    const unsubscribe = subscribeToCampaign(id)

    // Refresh when tab becomes visible again
    const handleVisibility = (): void => {
      if (document.visibilityState === 'visible') loadData()
    }
    document.addEventListener('visibilitychange', handleVisibility)

    return () => {
      unsubscribe()
      document.removeEventListener('visibilitychange', handleVisibility)
    }
  }, [id, loadData, subscribeToCampaign])

  useEffect(() => {
    if (currentCampaign) {
      setEditName(currentCampaign.name)
      setEditDesc(currentCampaign.description)
    }
  }, [currentCampaign])

  if (loadError && !currentCampaign) {
    return (
      <Box style={{ minHeight: '100vh', background: '#120d06' }}>
        <NavBar />
        <Center h="60vh">
          <Stack align="center" gap="md">
            <Text style={{ color: '#e85d5d', fontFamily: '"Cinzel", serif' }}>
              Failed to load campaign
            </Text>
            <Group>
              <Button variant="outline" color="yellow" onClick={loadData}>
                Retry
              </Button>
              <Button variant="subtle" color="gray" onClick={() => navigate('/campaigns')}>
                Back to Campaigns
              </Button>
            </Group>
          </Stack>
        </Center>
      </Box>
    )
  }

  if (loading || !currentCampaign) {
    return (
      <Box style={{ minHeight: '100vh', background: '#120d06' }}>
        <NavBar />
        <Center h="60vh"><Loader color="yellow" /></Center>
      </Box>
    )
  }

  const gameSystem = getGameSystem(currentCampaign.gameSystemId) ?? getDefaultGameSystem()

  const handleSaveEdit = async (): Promise<void> => {
    await updateCampaign(currentCampaign.id, editName, editDesc)
    setEditing(false)
  }

  const handleGenerateCode = async (): Promise<void> => {
    await generateInviteCode(currentCampaign.id)
  }

  const handleLeave = async (): Promise<void> => {
    await leaveCampaign(currentCampaign.id)
    navigate('/campaigns')
  }

  const getAncestryName = (ancestryId: string | null): string => {
    if (!ancestryId) return 'No Ancestry'
    return gameSystem.getAncestries().find((a) => a.id === ancestryId)?.name ?? ancestryId
  }

  const getClassName = (classId: string | null): string => {
    if (!classId) return 'No Class'
    return gameSystem.getClasses().find((c) => c.id === classId)?.name ?? classId
  }

  const sectionStyle = {
    background: 'rgba(36, 28, 20, 0.6)',
    border: '1px solid #4a3828',
    borderRadius: 8,
    padding: 20
  }

  return (
    <Box style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #120d06 0%, #1a1209 50%, #120d06 100%)' }}>
      <NavBar />
      <Container size="lg" py="xl">
        <Stack gap="xl">
          {/* Header */}
          <Group justify="space-between" align="flex-start">
            <Stack gap={4}>
              {editing ? (
                <Stack gap="sm">
                  <TextInput
                    value={editName}
                    onChange={(e) => setEditName(e.currentTarget.value)}
                    styles={{ input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3', fontFamily: '"Cinzel", serif', fontSize: '1.2rem' } }}
                  />
                  <Textarea
                    value={editDesc}
                    onChange={(e) => setEditDesc(e.currentTarget.value)}
                    styles={{ input: { background: '#1a1209', borderColor: '#4a3828', color: '#e8d5a3' } }}
                  />
                  <Group gap="xs">
                    <Button size="xs" color="yellow" onClick={handleSaveEdit} style={{ color: '#120d06' }}>Save</Button>
                    <Button size="xs" variant="subtle" color="gray" onClick={() => setEditing(false)}>Cancel</Button>
                  </Group>
                </Stack>
              ) : (
                <>
                  <Title order={2} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
                    {currentCampaign.name}
                  </Title>
                  {currentCampaign.description && (
                    <Text size="sm" style={{ color: '#8b7355' }}>{currentCampaign.description}</Text>
                  )}
                </>
              )}
              <Group gap="xs">
                <Badge className="badge-boost" size="sm">{isDM ? 'DM' : 'Player'}</Badge>
                <Badge className="badge-muted" size="sm">{gameSystem.name}</Badge>
              </Group>
            </Stack>
            <Group gap="xs">
              {isDM && !editing && (
                <Button size="xs" variant="subtle" color="yellow" onClick={() => setEditing(true)}>Edit</Button>
              )}
              <Button size="xs" variant="subtle" color="gray" onClick={() => navigate('/campaigns')}>Back</Button>
            </Group>
          </Group>

          {/* Invite Code (DM only) */}
          {isDM && (
            <Box style={sectionStyle}>
              <Title order={5} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
                Invite Players
              </Title>
              {inviteCode ? (
                <Group gap="md" align="center">
                  <Text style={{ fontFamily: 'monospace', fontSize: '1.8rem', color: '#f0c75e', letterSpacing: '0.3em' }}>
                    {inviteCode}
                  </Text>
                  <CopyButton value={inviteCode}>
                    {({ copied, copy }) => (
                      <Tooltip label={copied ? 'Copied!' : 'Copy code'}>
                        <Button size="xs" variant="light" color="yellow" onClick={copy}>
                          {copied ? 'Copied!' : 'Copy'}
                        </Button>
                      </Tooltip>
                    )}
                  </CopyButton>
                  <Button size="xs" variant="subtle" color="yellow" onClick={handleGenerateCode}>
                    Regenerate
                  </Button>
                  <Text size="xs" style={{ color: '#5c4a35' }}>Expires in 24 hours</Text>
                </Group>
              ) : (
                <Button size="sm" color="yellow" onClick={handleGenerateCode} style={{ fontFamily: '"Cinzel", serif', color: '#120d06' }}>
                  Generate Invite Code
                </Button>
              )}
            </Box>
          )}

          {/* Members */}
          <Box style={sectionStyle}>
            <Title order={5} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
              Party Members ({members.length})
            </Title>
            {members.length === 0 ? (
              <Text size="sm" style={{ color: '#5c4a35' }}>No players have joined yet.</Text>
            ) : (
              <Stack gap="xs">
                {members.map((m) => (
                  <Group key={m.userId} justify="space-between" p="xs" style={{ borderBottom: '1px solid #3a2a1a' }}>
                    <Group gap="xs">
                      <Text style={{ color: '#e8d5a3' }}>{m.displayName}</Text>
                      <Text size="xs" style={{ color: '#5c4a35' }}>
                        Joined {new Date(m.joinedAt).toLocaleDateString()}
                      </Text>
                    </Group>
                    {isDM && (
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        size="sm"
                        onClick={() => removeMember(currentCampaign.id, m.userId)}
                        title="Remove member"
                      >
                        &#10005;
                      </ActionIcon>
                    )}
                  </Group>
                ))}
              </Stack>
            )}
          </Box>

          {/* Characters in Campaign */}
          <Box style={sectionStyle}>
            <Title order={5} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
              Characters ({campaignCharacters.length})
            </Title>
            {campaignCharacters.length === 0 ? (
              <Text size="sm" style={{ color: '#5c4a35' }}>
                No characters assigned to this campaign yet.
                {!isDM && ' Assign a character from your Characters page.'}
              </Text>
            ) : (
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
                {campaignCharacters.map((char) => (
                  <Box
                    key={char.id}
                    className="fantasy-card"
                    p="lg"
                    style={{ cursor: isDM ? 'pointer' : 'default' }}
                    onClick={() => isDM && navigate(`/campaign/${currentCampaign.id}/character/${char.id}`)}
                  >
                    <Stack gap="sm">
                      <Text fw={700} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3', fontSize: '1rem' }}>
                        {char.name || 'Unnamed'}
                      </Text>
                      <Group gap="xs">
                        <Badge className="badge-boost" size="sm">Lvl {char.level}</Badge>
                        <Badge className="badge-muted" size="sm">{getAncestryName(char.ancestryId)}</Badge>
                        <Badge className="badge-muted" size="sm">{getClassName(char.classId)}</Badge>
                      </Group>
                      {char.currentHP > 0 && (
                        <Text size="xs" style={{ color: '#8b7355' }}>
                          HP: {char.currentHP}/{gameSystem.calculateHP(char)}
                        </Text>
                      )}
                    </Stack>
                  </Box>
                ))}
              </SimpleGrid>
            )}
          </Box>

          {/* Shops & Markets */}
          <Box style={sectionStyle}>
            {isDM ? (
              <ShopManager campaignId={currentCampaign.id} />
            ) : (
              <ShopBrowser
                campaignId={currentCampaign.id}
                characters={campaignCharacters.filter((c) => c.campaignId === currentCampaign.id)}
              />
            )}
          </Box>

          {/* Leave Campaign (non-DM only) */}
          {!isDM && (
            <Center>
              <Button
                variant="subtle"
                color="red"
                size="sm"
                onClick={() => setConfirmLeave(true)}
              >
                Leave Campaign
              </Button>
            </Center>
          )}
        </Stack>
      </Container>

      {/* Confirm Leave Modal */}
      <Modal
        opened={confirmLeave}
        onClose={() => setConfirmLeave(false)}
        title={<Text fw={700} style={{ color: '#c4a96a' }}>Leave Campaign?</Text>}
        styles={{
          content: { background: '#1e1610', border: '1px solid #4a3828' },
          header: { background: '#1e1610' }
        }}
      >
        <Stack gap="md">
          <Text size="sm" style={{ color: '#8b7355' }}>
            Your characters will be unassigned from this campaign. You can rejoin later with a new invite code.
          </Text>
          <Group justify="flex-end" gap="sm">
            <Button variant="subtle" color="gray" onClick={() => setConfirmLeave(false)}>Cancel</Button>
            <Button color="red" onClick={handleLeave}>Leave</Button>
          </Group>
        </Stack>
      </Modal>
    </Box>
  )
}
