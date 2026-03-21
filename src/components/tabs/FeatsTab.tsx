import { Box, Title, Text, Stack, SimpleGrid, Badge, Group, Alert } from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { Feat } from '../../types'
import { getAdvancement, countSlotsAtLevel, ANCESTRY_FEAT_LEVELS, checkFeatPrerequisites } from '../../../game-systems/pf2e/rules'

function FeatCard({
  feat,
  selected,
  onToggle,
  locked,
  lockReason
}: {
  feat: Feat
  selected: boolean
  onToggle: () => void
  locked?: boolean
  lockReason?: string
}): JSX.Element {
  return (
    <Box
      className={`feat-item ${selected ? 'selected' : ''}`}
      onClick={locked && !selected ? undefined : onToggle}
      style={locked && !selected ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}
    >
      <Stack gap="xs">
        <Group justify="space-between">
          <Group gap="sm">
            <Text style={{ color: locked && !selected ? '#5c4a35' : '#d4a843', fontSize: 12 }}>
              {locked && !selected ? '🔒' : selected ? '✦' : '◇'}
            </Text>
            <Text
              fw={600}
              size="sm"
              style={{
                fontFamily: '"Cinzel", serif',
                color: locked && !selected ? '#6b5a42' : selected ? '#f0c75e' : '#e8d5a3'
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
            color: locked && !selected ? '#5c4a35' : '#8b7355',
            fontFamily: '"Crimson Text", serif',
            lineHeight: 1.5
          }}
        >
          {feat.description}
        </Text>
        {feat.prerequisites && (
          <Text size="xs" style={{ color: locked && !selected ? '#a04040' : '#d4a843', fontStyle: 'italic' }}>
            {locked && !selected ? `🔒 ${lockReason || `Requires: ${feat.prerequisites}`}` : `Requires: ${feat.prerequisites}`}
          </Text>
        )}
        {feat.rarity && feat.rarity !== 'common' && (
          <Badge size="xs" variant="outline" color="yellow" mt={2}>
            {feat.rarity}
          </Badge>
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

  // Get class and compute dynamic feat slot counts from advancement table
  const cls = gameSystem.getClasses().find((c) => c.id === character.classId)
  const adv = getAdvancement(cls)

  const maxAncestryFeats = countSlotsAtLevel(ANCESTRY_FEAT_LEVELS, character.level)
  const maxClassFeats = countSlotsAtLevel(adv.classFeatLevels, character.level)
  const maxGeneralFeats = countSlotsAtLevel(adv.generalFeatLevels, character.level)
  const maxSkillFeats = countSlotsAtLevel(adv.skillFeatLevels, character.level)
  // Background grants a SPECIFIC skill feat — it's separate, not a choosable slot

  // Resolve the background's granted skill feat by name
  const backgrounds = gameSystem.getBackgrounds()
  const selectedBackground = backgrounds.find(b => b.id === character.backgroundId)
  const allSkillFeats = gameSystem.getFeats({ type: 'skill', maxLevel: 20 })
  const backgroundGrantedFeat = selectedBackground
    ? allSkillFeats.find(f => f.name === selectedBackground.skillFeat
        || selectedBackground.skillFeat.startsWith(f.name + ' ('))
    : undefined

  // Get feats filtered by character's selections
  const ancestryFeats = gameSystem.getFeats({
    type: 'ancestry',
    ancestryId: character.ancestryId ?? undefined,
    maxLevel: character.level
  }).filter((f) => f.ancestryId === character.ancestryId)

  const classFeats = gameSystem.getFeats({
    type: 'class',
    classId: character.classId ?? undefined,
    maxLevel: character.level
  }).filter((f) => f.classId === character.classId)
    .filter((f) => {
      // For Kineticist: filter element-specific feats by selected elements
      if (f.requiredElements && f.requiredElements.length > 0) {
        const charElements = character.kineticistElements ?? []
        // Always show already-selected feats even if element filter would hide them
        if (character.selectedFeats.classFeats.includes(f.id)) return true
        return f.requiredElements.some(el => charElements.includes(el))
      }
      return true
    })

  const generalFeats = gameSystem.getFeats({
    type: 'general',
    maxLevel: character.level
  })

  const skillFeats = gameSystem.getFeats({
    type: 'skill',
    maxLevel: character.level
  })

  // Collect all feats for prerequisite checking (need to look up feat names → ids)
  const allFeats = gameSystem.getFeats({})

  // Helper: check prerequisites for a feat
  const prereqCheck = (feat: Feat) => checkFeatPrerequisites(feat, character, allFeats)

  const hasClassFeatSlot = maxClassFeats > 0

  // Helper: check if feat prerequisites are met before allowing selection
  const canSelectFeat = (featId: string): boolean => {
    const feat = allFeats.find(f => f.id === featId)
    if (!feat) return true
    return checkFeatPrerequisites(feat, character, allFeats).met
  }

  const toggleAncestryFeat = (featId: string): void => {
    const current = character.selectedFeats.ancestryFeats
    if (current.includes(featId)) {
      setAncestryFeats(current.filter((f) => f !== featId))
    } else if (current.length < maxAncestryFeats && canSelectFeat(featId)) {
      setAncestryFeats([...current, featId])
    }
  }

  const toggleClassFeat = (featId: string): void => {
    const current = character.selectedFeats.classFeats
    if (current.includes(featId)) {
      setClassFeats(current.filter((f) => f !== featId))
    } else if (current.length < maxClassFeats && canSelectFeat(featId)) {
      setClassFeats([...current, featId])
    }
  }

  const toggleGeneralFeat = (featId: string): void => {
    const current = character.selectedFeats.generalFeats
    if (current.includes(featId)) {
      setGeneralFeats(current.filter((f) => f !== featId))
    } else if (current.length < maxGeneralFeats && canSelectFeat(featId)) {
      setGeneralFeats([...current, featId])
    }
  }

  const toggleSkillFeat = (featId: string): void => {
    const current = character.selectedFeats.skillFeats
    if (current.includes(featId)) {
      setSkillFeats(current.filter((f) => f !== featId))
    } else if (current.length < maxSkillFeats && canSelectFeat(featId)) {
      setSkillFeats([...current, featId])
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
        Choose feats to customize your character. Available feat slots are determined by your class and level.
      </Text>

      {/* Ancestry Feats */}
      <Box style={sectionStyle}>
        <Stack gap="md">
          <Group justify="space-between">
            <Title
              order={4}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Ancestry Feat{maxAncestryFeats > 1 ? 's' : ''}
            </Title>
            <Badge
              className={character.selectedFeats.ancestryFeats.length >= maxAncestryFeats ? 'badge-boost' : 'badge-muted'}
              size="sm"
            >
              {character.selectedFeats.ancestryFeats.length}/{maxAncestryFeats} selected
            </Badge>
          </Group>
          {!character.ancestryId ? (
            <Alert color="yellow" variant="light">
              Select an ancestry first to see available ancestry feats.
            </Alert>
          ) : (
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
              {ancestryFeats.map((feat) => {
                const check = prereqCheck(feat)
                return (
                  <FeatCard
                    key={feat.id}
                    feat={feat}
                    selected={character.selectedFeats.ancestryFeats.includes(feat.id)}
                    onToggle={() => toggleAncestryFeat(feat.id)}
                    locked={!check.met}
                    lockReason={check.reason}
                  />
                )
              })}
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
                Class Feat{maxClassFeats > 1 ? 's' : ''}
              </Title>
              <Badge
                className={character.selectedFeats.classFeats.length >= maxClassFeats ? 'badge-boost' : 'badge-muted'}
                size="sm"
              >
                {character.selectedFeats.classFeats.length}/{maxClassFeats} selected
              </Badge>
            </Group>
            {!character.classId ? (
              <Alert color="yellow" variant="light">
                Select a class first to see available class feats.
              </Alert>
            ) : (
              <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
                {classFeats.map((feat) => {
                  const check = prereqCheck(feat)
                  return (
                    <FeatCard
                      key={feat.id}
                      feat={feat}
                      selected={character.selectedFeats.classFeats.includes(feat.id)}
                      onToggle={() => toggleClassFeat(feat.id)}
                      locked={!check.met}
                      lockReason={check.reason}
                    />
                  )
                })}
              </SimpleGrid>
            )}
          </Stack>
        </Box>
      )}

      {/* General Feats */}
      {maxGeneralFeats > 0 && (
        <Box style={sectionStyle}>
          <Stack gap="md">
            <Group justify="space-between">
              <Title
                order={4}
                style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
              >
                General Feat{maxGeneralFeats > 1 ? 's' : ''}
              </Title>
              <Badge
                className={character.selectedFeats.generalFeats.length >= maxGeneralFeats ? 'badge-boost' : 'badge-muted'}
                size="sm"
              >
                {character.selectedFeats.generalFeats.length}/{maxGeneralFeats} selected
              </Badge>
            </Group>
            <Text size="sm" style={{ color: '#5c4a35' }}>
              {character.level < 3
                ? 'General feats are available starting at level 3. Versatile Humans get one at level 1 as a heritage benefit.'
                : 'Choose general feats to enhance your character\'s overall capabilities.'}
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
              {generalFeats.map((feat) => {
                const check = prereqCheck(feat)
                return (
                  <FeatCard
                    key={feat.id}
                    feat={feat}
                    selected={character.selectedFeats.generalFeats.includes(feat.id)}
                    onToggle={() => toggleGeneralFeat(feat.id)}
                    locked={!check.met}
                    lockReason={check.reason}
                  />
                )
              })}
            </SimpleGrid>
          </Stack>
        </Box>
      )}

      {/* Background Granted Skill Feat */}
      {backgroundGrantedFeat && (
        <Box style={sectionStyle}>
          <Stack gap="md">
            <Group justify="space-between">
              <Title
                order={4}
                style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
              >
                Background Skill Feat
              </Title>
              <Badge className="badge-boost" size="sm">
                Granted by {selectedBackground?.name ?? 'Background'}
              </Badge>
            </Group>
            <Text size="sm" style={{ color: '#5c4a35' }}>
              Your background automatically grants you this skill feat.
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
              <Box className="feat-item selected" style={{ borderColor: '#6b8a3e' }}>
                <Stack gap="xs">
                  <Group justify="space-between">
                    <Group gap="sm">
                      <Text style={{ color: '#6b8a3e', fontSize: 12 }}>✦</Text>
                      <Text
                        fw={600}
                        size="sm"
                        style={{
                          fontFamily: '"Cinzel", serif',
                          color: '#f0c75e'
                        }}
                      >
                        {selectedBackground?.skillFeat ?? backgroundGrantedFeat.name}
                      </Text>
                    </Group>
                    <Badge className="badge-muted" size="xs">
                      Level {backgroundGrantedFeat.level}
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
                    {backgroundGrantedFeat.description}
                  </Text>
                </Stack>
              </Box>
            </SimpleGrid>
          </Stack>
        </Box>
      )}

      {/* Skill Feats (from class advancement) */}
      {maxSkillFeats > 0 && (
        <Box style={sectionStyle}>
          <Stack gap="md">
            <Group justify="space-between">
              <Title
                order={4}
                style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
              >
                Skill Feat{maxSkillFeats > 1 ? 's' : ''}
              </Title>
              <Badge
                className={character.selectedFeats.skillFeats.length >= maxSkillFeats ? 'badge-boost' : 'badge-muted'}
                size="sm"
              >
                {character.selectedFeats.skillFeats.length}/{maxSkillFeats} selected
              </Badge>
            </Group>
            <Text size="sm" style={{ color: '#5c4a35' }}>
              {maxSkillFeats > 0
                ? 'Choose skill feats gained from your class advancement.'
                : 'You do not have any additional skill feat slots from class advancement yet.'}
            </Text>
            <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="sm">
              {skillFeats.map((feat) => {
                const check = prereqCheck(feat)
                return (
                  <FeatCard
                    key={feat.id}
                    feat={feat}
                    selected={character.selectedFeats.skillFeats.includes(feat.id)}
                    onToggle={() => toggleSkillFeat(feat.id)}
                    locked={!check.met}
                    lockReason={check.reason}
                  />
                )
              })}
            </SimpleGrid>
          </Stack>
        </Box>
      )}
    </Stack>
  )
}
