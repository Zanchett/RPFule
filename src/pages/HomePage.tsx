import { useState, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  Badge,
  ActionIcon,
  SimpleGrid,
  Center,
  Box,
  Image,
  Tooltip,
  Select
} from '@mantine/core'
import { useCharacterStore } from '../stores/characterStore'
import { useCampaignStore } from '../stores/campaignStore'
import { getAllGameSystems } from '../../game-systems'
import { NavBar } from '../components/NavBar'
import { useRefreshOnMount } from '../lib/useRefreshOnMount'
import * as api from '../lib/api'

const SYSTEM_THUMBNAILS: Record<string, string> = {
  pf2e: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1681825893i/126850011.jpg'
}

export function HomePage(): JSX.Element {
  const navigate = useNavigate()
  const {
    characterList,
    loadCharacterList,
    createNewCharacter,
    deleteCharacter,
    gameSystem
  } = useCharacterStore()

  const { campaigns, joinedCampaigns, loadCampaigns } = useCampaignStore()

  const allSystems = getAllGameSystems()
  const [selectedSystem, setSelectedSystem] = useState(gameSystem.id)

  // Always re-fetch on mount (navigation back) and tab visibility change
  useRefreshOnMount(() => {
    loadCharacterList()
    loadCampaigns()
  })

  // All campaigns where user can assign characters
  const allUserCampaigns = [
    ...campaigns.map((c) => ({ value: c.id, label: `${c.name} (DM)` })),
    ...joinedCampaigns.map((c) => ({ value: c.id, label: c.name }))
  ]

  const creatingRef = useRef(false)
  const handleCreate = async (): Promise<void> => {
    if (creatingRef.current) return
    creatingRef.current = true
    try {
      const id = await createNewCharacter()
      navigate(`/character/${id}`)
    } finally {
      creatingRef.current = false
    }
  }

  const handleLoad = (id: string): void => {
    navigate(`/character/${id}`)
  }

  const handleDelete = async (id: string, e: React.MouseEvent): Promise<void> => {
    e.stopPropagation()
    await deleteCharacter(id)
    await loadCharacterList()
  }

  const handleAssignCampaign = async (characterId: string, campaignId: string | null, e: React.MouseEvent): Promise<void> => {
    e.stopPropagation()
    const char = await api.loadCharacter(characterId)
    char.campaignId = campaignId
    await api.saveCharacter(char)
    await loadCharacterList()
  }

  const getAncestryName = (ancestryId: string | null): string => {
    if (!ancestryId) return 'No Ancestry'
    const ancestry = gameSystem.getAncestries().find((a) => a.id === ancestryId)
    return ancestry?.name ?? ancestryId
  }

  const getClassName = (classId: string | null): string => {
    if (!classId) return 'No Class'
    const cls = gameSystem.getClasses().find((c) => c.id === classId)
    return cls?.name ?? classId
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #120d06 0%, #1a1209 50%, #120d06 100%)'
      }}
    >
      <NavBar />
      <Container size="lg" py="xl">
        <Stack gap="xl">
          {/* Header with ornamental styling */}
          <Center>
            <Stack align="center" gap={4}>
              <Text
                style={{
                  fontFamily: '"MedievalSharp", "Cinzel", serif',
                  fontSize: '0.9rem',
                  letterSpacing: '0.3em',
                  textTransform: 'uppercase',
                  color: '#9a7b2f'
                }}
              >
                &#9876; Adventurer&apos;s &#9876;
              </Text>
              <Title
                order={1}
                style={{
                  fontFamily: '"Cinzel", serif',
                  fontSize: '2.8rem',
                  fontWeight: 800,
                  background: 'linear-gradient(180deg, #f0c75e 0%, #d4a843 40%, #9a7b2f 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  textShadow: 'none',
                  lineHeight: 1.1
                }}
              >
                RPFule
              </Title>
              <div className="ornament-divider" style={{ width: 300, margin: '4px auto' }}>
                &#10022;
              </div>
            </Stack>
          </Center>

          {/* Game System Selector */}
          <Box>
            <Title
              order={4}
              mb="md"
              style={{
                fontFamily: '"Cinzel", serif',
                color: '#c4a96a',
                letterSpacing: '0.05em'
              }}
            >
              Game System
            </Title>
            <Group gap="md">
              {allSystems.map((sys) => (
                <Tooltip key={sys.id} label={sys.name} position="bottom">
                  <Box
                    onClick={() => setSelectedSystem(sys.id)}
                    style={{
                      cursor: 'pointer',
                      width: 140,
                      borderRadius: 4,
                      overflow: 'hidden',
                      border:
                        selectedSystem === sys.id
                          ? '2px solid #d4a843'
                          : '2px solid #4a3828',
                      boxShadow:
                        selectedSystem === sys.id
                          ? '0 0 16px rgba(212, 168, 67, 0.3)'
                          : 'none',
                      transition: 'all 0.2s ease',
                      position: 'relative'
                    }}
                  >
                    <Image
                      src={SYSTEM_THUMBNAILS[sys.id] || ''}
                      alt={sys.name}
                      h={190}
                      fit="cover"
                      fallbackSrc={`data:image/svg+xml,${encodeURIComponent(
                        `<svg xmlns="http://www.w3.org/2000/svg" width="140" height="190"><rect fill="#241c14" width="140" height="190"/><text x="70" y="95" text-anchor="middle" fill="#c4a96a" font-family="serif" font-size="14">${sys.name}</text></svg>`
                      )}`}
                    />
                    <Box
                      p="xs"
                      style={{
                        background: selectedSystem === sys.id
                          ? 'linear-gradient(180deg, rgba(212,168,67,0.15), rgba(36,28,20,0.95))'
                          : 'linear-gradient(180deg, transparent, rgba(18,13,6,0.95))',
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        right: 0
                      }}
                    >
                      <Text
                        size="xs"
                        fw={700}
                        ta="center"
                        style={{
                          fontFamily: '"Cinzel", serif',
                          color: selectedSystem === sys.id ? '#f0c75e' : '#c4a96a',
                          fontSize: '0.65rem',
                          letterSpacing: '0.05em'
                        }}
                      >
                        {sys.name.replace('Pathfinder ', 'PF')}
                      </Text>
                    </Box>
                    {selectedSystem === sys.id && (
                      <Box
                        style={{
                          position: 'absolute',
                          top: 6,
                          right: 6,
                          background: '#d4a843',
                          borderRadius: '50%',
                          width: 20,
                          height: 20,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          fontSize: 12,
                          color: '#120d06',
                          fontWeight: 700
                        }}
                      >
                        &#10003;
                      </Box>
                    )}
                  </Box>
                </Tooltip>
              ))}

              {/* Placeholder for future systems */}
              {['D&D 5e', 'Wrath & Glory'].map((name) => (
                <Tooltip key={name} label={`${name} - Coming Soon`} position="bottom">
                  <Box
                    style={{
                      width: 140,
                      height: 190,
                      borderRadius: 4,
                      border: '2px dashed #3a2a1a',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexDirection: 'column',
                      gap: 8,
                      opacity: 0.5,
                      cursor: 'not-allowed'
                    }}
                  >
                    <Text
                      size="sm"
                      fw={600}
                      ta="center"
                      style={{
                        fontFamily: '"Cinzel", serif',
                        color: '#5c4a35'
                      }}
                    >
                      {name}
                    </Text>
                    <Badge className="badge-muted" size="xs">
                      Coming Soon
                    </Badge>
                  </Box>
                </Tooltip>
              ))}
            </Group>
          </Box>

          {/* Divider */}
          <div className="ornament-divider">&#10022; &#10022; &#10022;</div>

          {/* Characters Section */}
          <Group justify="space-between" align="center">
            <Title
              order={3}
              style={{
                fontFamily: '"Cinzel", serif',
                color: '#c4a96a',
                letterSpacing: '0.05em'
              }}
            >
              Your Characters
            </Title>
            <Button
              size="md"
              variant="outline"
              color="yellow"
              onClick={handleCreate}
              style={{
                fontFamily: '"Cinzel", serif',
                borderColor: '#9a7b2f',
                color: '#f0c75e'
              }}
            >
              + New Character
            </Button>
          </Group>

          {characterList.length === 0 ? (
            <Box
              p="xl"
              style={{
                border: '1px dashed #4a3828',
                borderRadius: 4,
                textAlign: 'center',
                background: 'rgba(36, 28, 20, 0.5)'
              }}
            >
              <Stack align="center" gap="md">
                <Text
                  size="lg"
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: '#8b7355'
                  }}
                >
                  No adventurers yet
                </Text>
                <Text size="sm" style={{ color: '#5c4a35' }}>
                  Create your first character to begin your journey
                </Text>
                <Button
                  variant="filled"
                  color="yellow"
                  onClick={handleCreate}
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: '#120d06'
                  }}
                >
                  Create Character
                </Button>
              </Stack>
            </Box>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="md">
              {characterList.map((char) => (
                <Box
                  key={char.id}
                  className="fantasy-card"
                  p="lg"
                  style={{ cursor: 'pointer' }}
                  onClick={() => handleLoad(char.id)}
                >
                  <Stack gap="sm">
                    <Group justify="space-between">
                      <Title
                        order={4}
                        style={{
                          fontFamily: '"Cinzel", serif',
                          color: '#e8d5a3',
                          fontSize: '1rem'
                        }}
                      >
                        {char.name || 'Unnamed Character'}
                      </Title>
                      <ActionIcon
                        variant="subtle"
                        color="red"
                        size="sm"
                        onClick={(e) => handleDelete(char.id, e)}
                        title="Delete character"
                      >
                        &#10005;
                      </ActionIcon>
                    </Group>
                    <Group gap="xs">
                      <Badge className="badge-boost" size="sm">
                        Level {char.level}
                      </Badge>
                      <Badge className="badge-muted" size="sm">
                        {getAncestryName(char.ancestryId)}
                      </Badge>
                      <Badge className="badge-muted" size="sm">
                        {getClassName(char.classId)}
                      </Badge>
                    </Group>
                    {allUserCampaigns.length > 0 && (
                      <Select
                        size="xs"
                        placeholder="Assign to campaign..."
                        data={[{ value: '__none__', label: 'No Campaign' }, ...allUserCampaigns]}
                        clearable={false}
                        onClick={(e) => e.stopPropagation()}
                        onChange={(val) => {
                          const event = { stopPropagation: () => {} } as React.MouseEvent
                          handleAssignCampaign(char.id, val === '__none__' ? null : val, event)
                        }}
                        styles={{
                          input: { background: '#1a1209', borderColor: '#3a2a1a', color: '#c4a96a', fontSize: '0.7rem' }
                        }}
                      />
                    )}
                    <Text size="xs" style={{ color: '#5c4a35' }}>
                      Last updated: {new Date(char.updatedAt).toLocaleDateString()}
                    </Text>
                  </Stack>
                </Box>
              ))}
            </SimpleGrid>
          )}

          {/* Footer */}
          <Center mt="xl">
            <Text size="xs" style={{ color: '#3a2a1a', fontFamily: '"Cinzel", serif' }}>
              &#9876; RPFule v0.2.0 &#9876;
            </Text>
          </Center>
        </Stack>
      </Container>
    </Box>
  )
}
