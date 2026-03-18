import { Box, Title, Text, Stack, Badge, Group, Select } from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { ABILITY_NAMES, AbilityId } from '../../types'

export function AncestryTab(): JSX.Element {
  const { character, gameSystem, setAncestry, setHeritage, setAncestryBoosts, setAncestryFlaws } =
    useCharacterStore()

  if (!character) return <></>

  const ancestries = gameSystem.getAncestries()
  const selectedAncestry = ancestries.find((a) => a.id === character.ancestryId)
  const selectedHeritage = selectedAncestry?.heritages.find((h) => h.id === character.heritageId)

  const handleAncestrySelect = (ancestryId: string): void => {
    if (character.ancestryId === ancestryId) return
    setAncestry(ancestryId)

    // Auto-apply fixed boosts and flaws
    const ancestry = ancestries.find((a) => a.id === ancestryId)
    if (ancestry) {
      const fixedFlaws = ancestry.abilityFlaws
      setAncestryFlaws(fixedFlaws)

      const fixedBoosts = ancestry.abilityBoosts.filter((b) => b !== 'free') as AbilityId[]
      setAncestryBoosts(fixedBoosts)
    }
  }

  const freeBoostCount = selectedAncestry
    ? selectedAncestry.abilityBoosts.filter((b) => b === 'free').length
    : 0
  const fixedBoosts = selectedAncestry
    ? (selectedAncestry.abilityBoosts.filter((b) => b !== 'free') as AbilityId[])
    : []
  const currentFreeBoosts = character.abilityBoosts.ancestry.filter(
    (b) => !fixedBoosts.includes(b)
  )

  const handleFreeBoostChange = (index: number, value: string | null): void => {
    if (!value) return
    const newFreeBoosts = [...currentFreeBoosts]
    newFreeBoosts[index] = value as AbilityId
    setAncestryBoosts([...fixedBoosts, ...newFreeBoosts])
  }

  return (
    <Stack gap="md">
      <Title
        order={3}
        style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
      >
        Choose Your Ancestry
      </Title>
      <Text style={{ color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>
        Your ancestry determines your starting Hit Points, size, speed, ability boosts and flaws,
        languages, and special abilities.
      </Text>

      <Stack gap={0}>
        {ancestries.map((ancestry) => {
          const isSelected = character.ancestryId === ancestry.id

          return (
            <Box
              key={ancestry.id}
              className={`selection-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleAncestrySelect(ancestry.id)}
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
                    {ancestry.name}
                  </Text>
                </Group>
                <Group gap="xs">
                  <Badge className="badge-muted" size="xs">
                    {ancestry.hp} HP
                  </Badge>
                  <Badge className="badge-muted" size="xs">
                    {ancestry.speed} ft
                  </Badge>
                  <Badge className="badge-muted" size="xs">
                    {ancestry.size}
                  </Badge>
                </Group>
              </Group>

              {isSelected && (
                <Box className="selection-expanded" onClick={(e) => e.stopPropagation()}>
                  {/* Description */}
                  <Text size="sm" style={{ color: '#8b7355' }} mb="sm">
                    {ancestry.description}
                  </Text>

                  {/* Ability Boosts & Flaws */}
                  <Group gap="xs" mb="sm" wrap="wrap">
                    {ancestry.abilityBoosts.map((boost, i) => (
                      <Badge key={`boost-${i}`} className="badge-boost" size="sm">
                        +{boost === 'free' ? 'Free' : ABILITY_NAMES[boost]}
                      </Badge>
                    ))}
                    {ancestry.abilityFlaws.map((flaw, i) => (
                      <Badge key={`flaw-${i}`} className="badge-flaw" size="sm">
                        -{ABILITY_NAMES[flaw]}
                      </Badge>
                    ))}
                  </Group>

                  {/* Languages & Traits */}
                  <Text size="sm" style={{ color: '#8b7355' }} mb="xs">
                    <strong style={{ color: '#e8d5a3' }}>Languages:</strong>{' '}
                    {ancestry.languages.join(', ')}
                  </Text>
                  <Text size="sm" style={{ color: '#8b7355' }} mb="xs">
                    <strong style={{ color: '#e8d5a3' }}>Traits:</strong>{' '}
                    {ancestry.traits.join(', ')}
                  </Text>

                  {/* Special Abilities */}
                  {ancestry.specialAbilities.length > 0 && (
                    <Text size="sm" style={{ color: '#8b7355' }} mb="sm">
                      <strong style={{ color: '#e8d5a3' }}>Special:</strong>{' '}
                      {ancestry.specialAbilities.join(', ')}
                    </Text>
                  )}

                  {/* Heritage Sub-Selection */}
                  <Text
                    fw={600}
                    mt="md"
                    mb="xs"
                    style={{
                      fontFamily: '"Cinzel", serif',
                      color: '#e8d5a3',
                      fontSize: '0.9rem'
                    }}
                  >
                    Heritage
                  </Text>
                  <Text size="xs" style={{ color: '#8b7355' }} mb="xs">
                    Choose a heritage that reflects your character's upbringing or bloodline.
                  </Text>

                  <Stack gap={0}>
                    {ancestry.heritages.map((heritage) => {
                      const isHeritageSelected = character.heritageId === heritage.id

                      return (
                        <Box
                          key={heritage.id}
                          className={`selection-item ${isHeritageSelected ? 'selected' : ''}`}
                          onClick={(e) => {
                            e.stopPropagation()
                            setHeritage(heritage.id)
                          }}
                        >
                          <Group gap="sm">
                            <Text style={{ color: '#d4a843', fontSize: 12 }}>
                              {isHeritageSelected ? '✦' : '◇'}
                            </Text>
                            <Text
                              fw={600}
                              style={{
                                fontFamily: '"Cinzel", serif',
                                color: '#e8d5a3',
                                fontSize: '0.85rem'
                              }}
                            >
                              {heritage.name}
                            </Text>
                          </Group>

                          {isHeritageSelected && (
                            <Box
                              className="selection-expanded"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <Text size="sm" style={{ color: '#8b7355' }} mb="xs">
                                {heritage.description}
                              </Text>
                              <Text size="sm" style={{ color: '#a3b86c' }}>
                                {heritage.benefits}
                              </Text>
                            </Box>
                          )}
                        </Box>
                      )
                    })}
                  </Stack>

                  {/* Free Ability Boosts */}
                  {freeBoostCount > 0 && (
                    <Box className="selection-expanded" mt="md">
                      <Text
                        fw={600}
                        mb="xs"
                        style={{
                          fontFamily: '"Cinzel", serif',
                          color: '#e8d5a3',
                          fontSize: '0.9rem'
                        }}
                      >
                        Free Ability Boost{freeBoostCount > 1 ? 's' : ''}
                      </Text>
                      <Text size="xs" style={{ color: '#8b7355' }} mb="sm">
                        Choose {freeBoostCount} additional ability score
                        {freeBoostCount > 1 ? 's' : ''} to boost (+2).
                        {fixedBoosts.length > 0 &&
                          ` Fixed boosts: ${fixedBoosts.map((b) => ABILITY_NAMES[b]).join(', ')}.`}
                      </Text>
                      <Group gap="md">
                        {Array.from({ length: freeBoostCount }).map((_, i) => (
                          <Select
                            key={i}
                            label={`Free Boost ${i + 1}`}
                            placeholder="Choose ability"
                            data={Object.entries(ABILITY_NAMES).map(([id, name]) => ({
                              value: id,
                              label: name,
                              disabled: [
                                ...fixedBoosts,
                                ...currentFreeBoosts.filter((_, j) => j !== i)
                              ].includes(id as AbilityId)
                            }))}
                            value={currentFreeBoosts[i] ?? null}
                            onChange={(val) => handleFreeBoostChange(i, val)}
                            style={{ width: 180 }}
                            onClick={(e) => e.stopPropagation()}
                          />
                        ))}
                      </Group>
                    </Box>
                  )}
                </Box>
              )}
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}
