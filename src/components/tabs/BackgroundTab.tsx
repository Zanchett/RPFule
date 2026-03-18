import { Box, Title, Text, Stack, Badge, Group, Select } from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { ABILITY_NAMES, AbilityId } from '../../types'

export function BackgroundTab(): JSX.Element {
  const { character, gameSystem, setBackground, setBackgroundBoosts } = useCharacterStore()

  if (!character) return <></>

  const backgrounds = gameSystem.getBackgrounds()
  const selectedBg = backgrounds.find((b) => b.id === character.backgroundId)

  const handleBackgroundSelect = (bgId: string): void => {
    if (character.backgroundId === bgId) return
    setBackground(bgId)

    // Auto-apply fixed boost only if there's exactly one specific ability
    const bg = backgrounds.find((b) => b.id === bgId)
    if (bg) {
      const fixedBoosts = bg.abilityBoosts.filter((b) => b !== 'free') as AbilityId[]
      if (fixedBoosts.length === 1) {
        setBackgroundBoosts([fixedBoosts[0]])
      }
    }
  }

  const fixedBoosts = selectedBg
    ? (selectedBg.abilityBoosts.filter((b) => b !== 'free') as AbilityId[])
    : []
  const freeBoostCount = selectedBg
    ? selectedBg.abilityBoosts.filter((b) => b === 'free').length
    : 0
  const currentBoosts = character.abilityBoosts.background
  const currentFreeBoosts = currentBoosts.filter((b) => !fixedBoosts.includes(b))

  // For backgrounds with multiple specific options (e.g., Scholar: INT or WIS)
  // treat all non-free as choices from a set
  const hasMultipleSpecificOptions = fixedBoosts.length > 1

  const handleSpecificBoostChange = (value: string | null): void => {
    if (!value) return
    const chosen = value as AbilityId
    setBackgroundBoosts([chosen, ...currentFreeBoosts])
  }

  const handleFreeBoostChange = (value: string | null): void => {
    if (!value) return
    const chosenSpecific = hasMultipleSpecificOptions
      ? (currentBoosts.find((b) => fixedBoosts.includes(b)) ?? fixedBoosts[0])
      : fixedBoosts[0]

    if (chosenSpecific) {
      setBackgroundBoosts([chosenSpecific, value as AbilityId])
    } else {
      setBackgroundBoosts([value as AbilityId])
    }
  }

  return (
    <Stack gap="md">
      <Title order={3} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
        Choose Your Background
      </Title>
      <Text style={{ color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>
        Your background represents your character's life before adventuring. It provides ability
        boosts, skill training, and a skill feat.
      </Text>

      <Stack gap={0}>
        {backgrounds.map((bg) => {
          const isSelected = character.backgroundId === bg.id

          return (
            <Box
              key={bg.id}
              className={`selection-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleBackgroundSelect(bg.id)}
            >
              <Group justify="space-between">
                <Group gap="sm">
                  <Text style={{ color: '#d4a843', fontSize: 12 }}>
                    {isSelected ? '✦' : '◇'}
                  </Text>
                  <Text
                    fw={600}
                    style={{
                      fontFamily: '"Cinzel", serif',
                      color: '#e8d5a3',
                      fontSize: '0.95rem'
                    }}
                  >
                    {bg.name}
                  </Text>
                </Group>
                <Group gap="xs">
                  <Badge className="badge-muted" size="xs">
                    {bg.trainedSkill}
                  </Badge>
                  <Badge className="badge-muted" size="xs">
                    {bg.trainedLore}
                  </Badge>
                </Group>
              </Group>

              {isSelected && (
                <Box className="selection-expanded">
                  <Text
                    size="sm"
                    style={{
                      color: '#8b7355',
                      fontFamily: '"Crimson Text", serif',
                      marginBottom: 12
                    }}
                  >
                    {bg.description}
                  </Text>

                  <Group gap="xs" mb="sm">
                    {bg.abilityBoosts.map((boost, i) => (
                      <Badge key={i} className="badge-boost" size="sm">
                        +{boost === 'free' ? 'Free' : ABILITY_NAMES[boost as AbilityId]}
                      </Badge>
                    ))}
                  </Group>

                  <Stack gap="xs" mb="sm">
                    <Text size="sm" style={{ color: '#a89070' }}>
                      <strong>Trained Skill:</strong> {bg.trainedSkill}
                    </Text>
                    <Text size="sm" style={{ color: '#a89070' }}>
                      <strong>Trained Lore:</strong> {bg.trainedLore}
                    </Text>
                    <Text size="sm" style={{ color: '#a89070' }}>
                      <strong>Skill Feat:</strong> {bg.skillFeat}
                    </Text>
                  </Stack>

                  <Box onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                    <Group gap="md">
                      {hasMultipleSpecificOptions ? (
                        <Select
                          label="Choose one boost"
                          placeholder="Pick ability"
                          data={fixedBoosts.map((id) => ({
                            value: id,
                            label: ABILITY_NAMES[id]
                          }))}
                          value={currentBoosts.find((b) => fixedBoosts.includes(b)) ?? null}
                          onChange={handleSpecificBoostChange}
                          style={{ width: 200 }}
                        />
                      ) : fixedBoosts.length === 1 ? (
                        <Badge className="badge-boost" size="lg">
                          +{ABILITY_NAMES[fixedBoosts[0]]} (fixed)
                        </Badge>
                      ) : null}

                      {freeBoostCount > 0 && (
                        <Select
                          label="Free Boost"
                          placeholder="Choose ability"
                          data={Object.entries(ABILITY_NAMES).map(([id, name]) => ({
                            value: id,
                            label: name,
                            disabled: currentBoosts
                              .filter((b) => !currentFreeBoosts.includes(b))
                              .includes(id as AbilityId)
                          }))}
                          value={currentFreeBoosts[0] ?? null}
                          onChange={handleFreeBoostChange}
                          style={{ width: 200 }}
                        />
                      )}
                    </Group>
                  </Box>
                </Box>
              )}
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}
