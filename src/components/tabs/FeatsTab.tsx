import { Box, Title, Text, Stack, SimpleGrid, Badge, Group, Alert } from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { Feat } from '../../types'

function FeatCard({
  feat,
  selected,
  onToggle
}: {
  feat: Feat
  selected: boolean
  onToggle: () => void
}): JSX.Element {
  return (
    <Box
      className={`feat-item ${selected ? 'selected' : ''}`}
      onClick={onToggle}
    >
      <Stack gap="xs">
        <Group justify="space-between">
          <Group gap="sm">
            <Text style={{ color: '#d4a843', fontSize: 12 }}>
              {selected ? '✦' : '◇'}
            </Text>
            <Text
              fw={600}
              size="sm"
              style={{
                fontFamily: '"Cinzel", serif',
                color: selected ? '#f0c75e' : '#e8d5a3'
              }}
            >
              {feat.name}
            </Text>
          </Group>
          <Badge className="badge-muted" size="xs">
            Level {feat.level}
          </Badge>
        </Group>
        <Text
          size="sm"
          style={{
            color: '#8b7355',
            fontFamily: '"Crimson Text", serif',
            lineHeight: 1.5
          }}
        >
          {feat.description}
        </Text>
        {feat.prerequisites && (
          <Text size="xs" style={{ color: '#d4a843', fontStyle: 'italic' }}>
            Requires: {feat.prerequisites}
          </Text>
        )}
      </Stack>
    </Box>
  )
}

export function FeatsTab(): JSX.Element {
  const {
    character,
    gameSystem,
    setAncestryFeats,
    setClassFeats,
    setGeneralFeats,
    setSkillFeats
  } = useCharacterStore()

  if (!character) return <></>

  // Get feats filtered by character's selections
  const ancestryFeats = gameSystem.getFeats({
    type: 'ancestry',
    ancestryId: character.ancestryId ?? undefined,
    maxLevel: character.level
  }).filter((f) => f.ancestryId === character.ancestryId)

  const classFeats = gameSystem.getFeats({
    type: 'class',
    classId: character.classId ?? undefined,
    maxLevel: character.level + 1 // Class feats can be up to level 2 at character creation
  }).filter((f) => f.classId === character.classId)

  const generalFeats = gameSystem.getFeats({
    type: 'general',
    maxLevel: character.level
  })

  const skillFeats = gameSystem.getFeats({
    type: 'skill',
    maxLevel: character.level
  })

  const cls = gameSystem.getClasses().find((c) => c.id === character.classId)
  const hasClassFeatSlot = cls?.id === 'fighter' || cls?.id === 'rogue' // Fighter and Rogue get class feats at level 1

  const toggleAncestryFeat = (featId: string): void => {
    const current = character.selectedFeats.ancestryFeats
    if (current.includes(featId)) {
      setAncestryFeats(current.filter((f) => f !== featId))
    } else if (current.length < 1) {
      setAncestryFeats([featId])
    }
  }

  const toggleClassFeat = (featId: string): void => {
    const current = character.selectedFeats.classFeats
    if (current.includes(featId)) {
      setClassFeats(current.filter((f) => f !== featId))
    } else if (current.length < 1) {
      setClassFeats([featId])
    }
  }

  const toggleGeneralFeat = (featId: string): void => {
    const current = character.selectedFeats.generalFeats
    if (current.includes(featId)) {
      setGeneralFeats(current.filter((f) => f !== featId))
    } else if (current.length < 1) {
      setGeneralFeats([featId])
    }
  }

  const toggleSkillFeat = (featId: string): void => {
    const current = character.selectedFeats.skillFeats
    if (current.includes(featId)) {
      setSkillFeats(current.filter((f) => f !== featId))
    } else if (current.length < 1) {
      setSkillFeats([featId])
    }
  }

  const sectionStyle = {
    background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
    border: '1px solid #4a3828',
    padding: 20
  }

  return (
    <Stack gap="lg">
      <Title
        order={3}
        style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
      >
        Feats
      </Title>
      <Text style={{ color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>
        Choose feats to customize your character. At level 1, you get an ancestry feat and possibly
        a class feat (depending on your class).
      </Text>

      {/* Ancestry Feats */}
      <Box style={sectionStyle}>
        <Stack gap="md">
          <Group justify="space-between">
            <Title
              order={4}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Ancestry Feat
            </Title>
            <Badge
              className={character.selectedFeats.ancestryFeats.length > 0 ? 'badge-boost' : 'badge-muted'}
              size="sm"
            >
              {character.selectedFeats.ancestryFeats.length}/1 selected
            </Badge>
          </Group>
          {!character.ancestryId ? (
            <Alert color="yellow" variant="light">
              Select an ancestry first to see available ancestry feats.
            </Alert>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
              {ancestryFeats.map((feat) => (
                <FeatCard
                  key={feat.id}
                  feat={feat}
                  selected={character.selectedFeats.ancestryFeats.includes(feat.id)}
                  onToggle={() => toggleAncestryFeat(feat.id)}
                />
              ))}
            </SimpleGrid>
          )}
        </Stack>
      </Box>

      {/* Class Feats */}
      {hasClassFeatSlot && (
        <Box style={sectionStyle}>
          <Stack gap="md">
            <Group justify="space-between">
              <Title
                order={4}
                style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
              >
                Class Feat
              </Title>
              <Badge
                className={character.selectedFeats.classFeats.length > 0 ? 'badge-boost' : 'badge-muted'}
                size="sm"
              >
                {character.selectedFeats.classFeats.length}/1 selected
              </Badge>
            </Group>
            {!character.classId ? (
              <Alert color="yellow" variant="light">
                Select a class first to see available class feats.
              </Alert>
            ) : (
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
                {classFeats.map((feat) => (
                  <FeatCard
                    key={feat.id}
                    feat={feat}
                    selected={character.selectedFeats.classFeats.includes(feat.id)}
                    onToggle={() => toggleClassFeat(feat.id)}
                  />
                ))}
              </SimpleGrid>
            )}
          </Stack>
        </Box>
      )}

      {/* General Feats */}
      <Box style={sectionStyle}>
        <Stack gap="md">
          <Group justify="space-between">
            <Title
              order={4}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              General Feat
            </Title>
            <Badge className="badge-muted" size="sm">
              {character.selectedFeats.generalFeats.length}/1 selected
            </Badge>
          </Group>
          <Text size="sm" style={{ color: '#5c4a35' }}>
            Most characters don't get a general feat at level 1. Versatile Humans get one as a
            heritage benefit.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
            {generalFeats.map((feat) => (
              <FeatCard
                key={feat.id}
                feat={feat}
                selected={character.selectedFeats.generalFeats.includes(feat.id)}
                onToggle={() => toggleGeneralFeat(feat.id)}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>

      {/* Skill Feats */}
      <Box style={sectionStyle}>
        <Stack gap="md">
          <Group justify="space-between">
            <Title
              order={4}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Skill Feat
            </Title>
            <Badge className="badge-muted" size="sm">
              {character.selectedFeats.skillFeats.length}/1 selected
            </Badge>
          </Group>
          <Text size="sm" style={{ color: '#5c4a35' }}>
            Your background grants a skill feat. You may also get one from your class at level 2.
          </Text>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
            {skillFeats.map((feat) => (
              <FeatCard
                key={feat.id}
                feat={feat}
                selected={character.selectedFeats.skillFeats.includes(feat.id)}
                onToggle={() => toggleSkillFeat(feat.id)}
              />
            ))}
          </SimpleGrid>
        </Stack>
      </Box>
    </Stack>
  )
}
