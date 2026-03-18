import { useEffect, useCallback, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Container,
  Tabs,
  Group,
  Button,
  Title,
  Text,
  Badge,
  Box,
  Stack,
  Modal
} from '@mantine/core'
import { useCharacterStore } from '../stores/characterStore'
import { OverviewTab } from '../components/tabs/OverviewTab'
import { AncestryTab } from '../components/tabs/AncestryTab'
import { BackgroundTab } from '../components/tabs/BackgroundTab'
import { ClassTab } from '../components/tabs/ClassTab'
import { AbilityTab } from '../components/tabs/AbilityTab'
import { SkillsTab } from '../components/tabs/SkillsTab'
import { FeatsTab } from '../components/tabs/FeatsTab'
import { EquipmentTab } from '../components/tabs/EquipmentTab'
import { SummaryTab } from '../components/tabs/SummaryTab'

export function CharacterCreator(): JSX.Element {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const { character, loadCharacter, saveCharacter, gameSystem, isDirty, saveStatus, saveError, characterLoading, characterError } = useCharacterStore()

  useEffect(() => {
    if (id && character?.id !== id) {
      loadCharacter(id)
    }
  }, [id, character?.id, loadCharacter])

  const handleSave = useCallback(async () => {
    await saveCharacter()
  }, [saveCharacter])

  const [showUnsavedModal, setShowUnsavedModal] = useState(false)

  const handleBack = useCallback(() => {
    if (isDirty) {
      setShowUnsavedModal(true)
    } else {
      navigate('/')
    }
  }, [isDirty, navigate])

  const handleSaveAndBack = useCallback(async () => {
    try {
      await saveCharacter()
    } catch {
      // Navigate even if save fails
    }
    setShowUnsavedModal(false)
    navigate('/')
  }, [saveCharacter, navigate])

  const handleDiscardAndBack = useCallback(() => {
    setShowUnsavedModal(false)
    navigate('/')
  }, [navigate])

  if (characterError) {
    return (
      <Container py="xl">
        <Stack align="center" gap="md">
          <Text style={{ color: '#e85d5d', fontFamily: '"Cinzel", serif' }}>
            Failed to load character
          </Text>
          <Text size="sm" style={{ color: '#8b7355' }}>{characterError}</Text>
          <Group>
            <Button
              variant="outline"
              color="yellow"
              onClick={() => id && loadCharacter(id)}
            >
              Retry
            </Button>
            <Button
              variant="subtle"
              color="gray"
              onClick={() => navigate('/')}
            >
              Back to Home
            </Button>
          </Group>
        </Stack>
      </Container>
    )
  }

  if (!character || characterLoading) {
    return (
      <Container py="xl">
        <Text style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
          Loading character...
        </Text>
      </Container>
    )
  }

  const validation = gameSystem.validateCharacter(character)
  const errorCount = validation.filter((v) => v.severity === 'error').length
  const warningCount = validation.filter((v) => v.severity === 'warning').length

  const getAncestryName = (): string => {
    if (!character.ancestryId) return ''
    return gameSystem.getAncestries().find((a) => a.id === character.ancestryId)?.name ?? ''
  }

  const getClassName = (): string => {
    if (!character.classId) return ''
    return gameSystem.getClasses().find((c) => c.id === character.classId)?.name ?? ''
  }

  return (
    <Box
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(180deg, #120d06 0%, #1a1209 50%, #120d06 100%)'
      }}
    >
      {/* Header bar */}
      <Box
        py="sm"
        px="md"
        style={{
          borderBottom: '1px solid #4a3828',
          background: 'linear-gradient(180deg, #241c14, #1e1610)'
        }}
      >
        <Group justify="space-between">
          <Group gap="md">
            <Button
              variant="subtle"
              onClick={handleBack}
              size="sm"
              style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}
            >
              &#9664; Back
            </Button>
            <Title
              order={4}
              style={{
                fontFamily: '"Cinzel", serif',
                color: '#e8d5a3'
              }}
            >
              {character.name || 'Unnamed Character'}
            </Title>
            <Group gap="xs">
              {getAncestryName() && (
                <Badge className="badge-muted" size="sm">
                  {getAncestryName()}
                </Badge>
              )}
              {getClassName() && (
                <Badge className="badge-muted" size="sm">
                  {getClassName()}
                </Badge>
              )}
              <Badge className="badge-boost" size="sm">
                Level {character.level}
              </Badge>
            </Group>
          </Group>
          <Group gap="sm">
            {saveStatus === 'saved' && (
              <Badge size="sm" style={{ background: '#2d5a27', color: '#8fdf82', fontFamily: '"Cinzel", serif' }}>
                Saved
              </Badge>
            )}
            {saveStatus === 'error' && (
              <Badge size="sm" style={{ background: '#5a2727', color: '#df8282', fontFamily: '"Cinzel", serif' }}>
                {saveError || 'Save failed'}
              </Badge>
            )}
            {warningCount > 0 && (
              <Badge className="badge-muted" size="sm">
                {warningCount} warning{warningCount !== 1 ? 's' : ''}
              </Badge>
            )}
            {errorCount > 0 && (
              <Badge className="badge-flaw" size="sm">
                {errorCount} error{errorCount !== 1 ? 's' : ''}
              </Badge>
            )}
            <Button
              variant="outline"
              size="sm"
              onClick={handleSave}
              loading={saveStatus === 'saving'}
              style={{
                fontFamily: '"Cinzel", serif',
                borderColor: '#9a7b2f',
                color: '#f0c75e'
              }}
            >
              {saveStatus === 'saving' ? 'Saving...' : 'Save'}
            </Button>
          </Group>
        </Group>
      </Box>

      <Container size="xl" py="md">
        <Tabs defaultValue="overview" keepMounted={false}>
          <Tabs.List mb="md">
            <Tabs.Tab value="overview">Overview</Tabs.Tab>
            <Tabs.Tab value="ancestry">Ancestry</Tabs.Tab>
            <Tabs.Tab value="background">Background</Tabs.Tab>
            <Tabs.Tab value="class">Class</Tabs.Tab>
            <Tabs.Tab value="abilities">Abilities</Tabs.Tab>
            <Tabs.Tab value="skills">Skills</Tabs.Tab>
            <Tabs.Tab value="feats">Feats</Tabs.Tab>
            <Tabs.Tab value="equipment">Equipment</Tabs.Tab>
            <Tabs.Tab value="summary">Play</Tabs.Tab>
          </Tabs.List>

          <Tabs.Panel value="overview">
            <OverviewTab />
          </Tabs.Panel>
          <Tabs.Panel value="ancestry">
            <AncestryTab />
          </Tabs.Panel>
          <Tabs.Panel value="background">
            <BackgroundTab />
          </Tabs.Panel>
          <Tabs.Panel value="class">
            <ClassTab />
          </Tabs.Panel>
          <Tabs.Panel value="abilities">
            <AbilityTab />
          </Tabs.Panel>
          <Tabs.Panel value="skills">
            <SkillsTab />
          </Tabs.Panel>
          <Tabs.Panel value="feats">
            <FeatsTab />
          </Tabs.Panel>
          <Tabs.Panel value="equipment">
            <EquipmentTab />
          </Tabs.Panel>
          <Tabs.Panel value="summary">
            <SummaryTab />
          </Tabs.Panel>
        </Tabs>
      </Container>

      <Modal
        opened={showUnsavedModal}
        onClose={() => setShowUnsavedModal(false)}
        title="Unsaved Changes"
        centered
        styles={{
          header: { background: '#1e1610', borderBottom: '1px solid #4a3828' },
          title: { fontFamily: '"Cinzel", serif', color: '#e8d5a3' },
          body: { background: '#1e1610' },
          content: { background: '#1e1610', border: '1px solid #4a3828' }
        }}
      >
        <Text style={{ color: '#c4a96a', fontFamily: '"Crimson Text", serif' }}>
          You have unsaved changes. Would you like to save before leaving?
        </Text>
        <Group mt="md" justify="flex-end">
          <Button
            variant="subtle"
            onClick={handleDiscardAndBack}
            style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}
          >
            Discard
          </Button>
          <Button
            variant="outline"
            onClick={handleSaveAndBack}
            style={{ fontFamily: '"Cinzel", serif', borderColor: '#9a7b2f', color: '#f0c75e' }}
          >
            Save & Leave
          </Button>
        </Group>
      </Modal>
    </Box>
  )
}
