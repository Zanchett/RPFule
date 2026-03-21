import { Box, Title, Text, Stack, Badge, Group, Select, SimpleGrid } from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { ABILITY_NAMES, AbilityId, ProficiencyRank } from '../../types'

const proficiencyStyles: Record<ProficiencyRank, React.CSSProperties> = {
  untrained: {
    background: 'rgba(92, 74, 53, 0.2)',
    color: '#5c4a35',
    border: '1px solid rgba(92, 74, 53, 0.3)'
  },
  trained: {
    background: 'rgba(154, 123, 47, 0.15)',
    color: '#c4a96a',
    border: '1px solid rgba(154, 123, 47, 0.3)'
  },
  expert: {
    background: 'rgba(154, 123, 47, 0.25)',
    color: '#d4a843',
    border: '1px solid rgba(154, 123, 47, 0.4)'
  },
  master: {
    background: 'rgba(212, 168, 67, 0.2)',
    color: '#f0c75e',
    border: '1px solid rgba(212, 168, 67, 0.35)'
  },
  legendary: {
    background: 'rgba(240, 199, 94, 0.15)',
    color: '#f0c75e',
    border: '1px solid rgba(240, 199, 94, 0.4)'
  }
}

function profBadge(rank: ProficiencyRank): JSX.Element {
  return (
    <Badge size="xs" style={proficiencyStyles[rank]}>
      {rank}
    </Badge>
  )
}

export function ClassTab(): JSX.Element {
  const { character, gameSystem, setClass, setClassBoost, setKineticistElements } = useCharacterStore()

  if (!character) return <></>

  const classes = gameSystem.getClasses()

  const handleClassSelect = (classId: string): void => {
    if (character.classId === classId) return
    setClass(classId)

    const cls = classes.find((c) => c.id === classId)
    if (cls && cls.keyAbility.length === 1) {
      setClassBoost([cls.keyAbility[0]])
    }
  }

  return (
    <Stack gap="md">
      <Title
        order={3}
        style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
      >
        Choose Your Class
      </Title>
      <Text style={{ color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>
        Your class determines your combat abilities, proficiencies, features, and Hit Points per
        level.
      </Text>

      <Stack gap={0}>
        {classes.map((cls) => {
          const isSelected = character.classId === cls.id

          return (
            <Box
              key={cls.id}
              className={`selection-item ${isSelected ? 'selected' : ''}`}
              onClick={() => handleClassSelect(cls.id)}
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
                    {cls.name}
                  </Text>
                </Group>
                <Group gap="xs">
                  <Badge className="badge-muted" size="xs">
                    {cls.hp} HP/lvl
                  </Badge>
                  {cls.keyAbility.map((a) => (
                    <Badge key={a} className="badge-boost" size="xs">
                      {ABILITY_NAMES[a]}
                    </Badge>
                  ))}
                  {cls.isSpellcaster && (
                    <Badge className="badge-muted" size="xs">
                      {cls.spellcasting?.tradition} caster
                    </Badge>
                  )}
                </Group>
              </Group>

              {isSelected && (
                <Box className="selection-expanded">
                  {/* Description */}
                  <Text
                    size="sm"
                    style={{
                      color: '#8b7355',
                      fontFamily: '"Crimson Text", serif',
                      lineHeight: 1.6
                    }}
                  >
                    {cls.description}
                  </Text>

                  {/* Key Ability Boost Selector */}
                  {cls.keyAbility.length > 1 && (
                    <Box mt="md">
                      <Text fw={600} size="sm" style={{ color: '#e8d5a3' }} mb={4}>
                        Key Ability Boost
                      </Text>
                      <Text size="xs" style={{ color: '#8b7355' }} mb="xs">
                        Choose your key ability score for this class.
                      </Text>
                      <Box onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <Select
                          data={cls.keyAbility.map((a) => ({
                            value: a,
                            label: ABILITY_NAMES[a]
                          }))}
                          value={character.abilityBoosts.class[0] ?? null}
                          onChange={(val) => setClassBoost(val ? [val as AbilityId] : [])}
                          style={{ width: 200 }}
                          size="sm"
                        />
                      </Box>
                    </Box>
                  )}

                  {/* Proficiencies */}
                  <Box mt="md">
                    <Text fw={600} size="sm" style={{ color: '#e8d5a3' }} mb="xs">
                      Proficiencies
                    </Text>
                    <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="md">
                      {/* Left column: Perception + Saving Throws */}
                      <Stack gap="xs">
                        <Text fw={600} size="sm" style={{ color: '#c4a06a' }}>
                          Perception
                        </Text>
                        {profBadge(cls.perception)}

                        <Text fw={600} size="sm" mt="xs" style={{ color: '#c4a06a' }}>
                          Saving Throws
                        </Text>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Fort:
                          </Text>
                          {profBadge(cls.savingThrows.fortitude)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Ref:
                          </Text>
                          {profBadge(cls.savingThrows.reflex)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Will:
                          </Text>
                          {profBadge(cls.savingThrows.will)}
                        </Group>
                      </Stack>

                      {/* Right column: Attacks + Defense */}
                      <Stack gap="xs">
                        <Text fw={600} size="sm" style={{ color: '#c4a06a' }}>
                          Attacks
                        </Text>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Simple:
                          </Text>
                          {profBadge(cls.attacks.simple)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Martial:
                          </Text>
                          {profBadge(cls.attacks.martial)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Unarmed:
                          </Text>
                          {profBadge(cls.attacks.unarmed)}
                        </Group>

                        <Text fw={600} size="sm" mt="xs" style={{ color: '#c4a06a' }}>
                          Defense
                        </Text>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Unarmored:
                          </Text>
                          {profBadge(cls.defenses.unarmored)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Light:
                          </Text>
                          {profBadge(cls.defenses.light)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Medium:
                          </Text>
                          {profBadge(cls.defenses.medium)}
                        </Group>
                        <Group gap="xs">
                          <Text size="xs" style={{ color: '#8b7355' }}>
                            Heavy:
                          </Text>
                          {profBadge(cls.defenses.heavy)}
                        </Group>
                      </Stack>
                    </SimpleGrid>
                  </Box>

                  {/* Class Features */}
                  <Box mt="md">
                    <Text fw={600} size="sm" style={{ color: '#e8d5a3' }} mb="xs">
                      Class Features
                    </Text>
                    <Stack gap="sm">
                      {cls.features
                        .filter((f) => f.level <= character.level)
                        .map((feature, i) => (
                          <Stack key={i} gap={4}>
                            <Group gap="xs">
                              <Text fw={600} size="sm" style={{ color: '#c4a06a' }}>
                                {feature.name}
                              </Text>
                              <Badge className="badge-muted" size="xs">
                                Level {feature.level}
                              </Badge>
                            </Group>
                            <Text
                              size="sm"
                              style={{
                                color: '#8b7355',
                                fontFamily: '"Crimson Text", serif'
                              }}
                            >
                              {feature.description}
                            </Text>
                          </Stack>
                        ))}
                    </Stack>
                  </Box>

                  {/* Spellcasting */}
                  {cls.isSpellcaster && cls.spellcasting && (
                    <Box mt="md">
                      <Text fw={600} size="sm" style={{ color: '#e8d5a3' }} mb="xs">
                        Spellcasting
                      </Text>
                      <Stack gap={4}>
                        <Text size="sm" style={{ color: '#8b7355' }}>
                          <strong style={{ color: '#c4a06a' }}>Tradition:</strong>{' '}
                          {cls.spellcasting.tradition.charAt(0).toUpperCase() +
                            cls.spellcasting.tradition.slice(1)}
                        </Text>
                        <Text size="sm" style={{ color: '#8b7355' }}>
                          <strong style={{ color: '#c4a06a' }}>Type:</strong>{' '}
                          {cls.spellcasting.type.charAt(0).toUpperCase() +
                            cls.spellcasting.type.slice(1)}
                        </Text>
                        <Text size="sm" style={{ color: '#8b7355' }}>
                          <strong style={{ color: '#c4a06a' }}>Cantrips at Level 1:</strong>{' '}
                          {cls.spellcasting.cantripsAtLevel1}
                        </Text>
                        <Text size="sm" style={{ color: '#8b7355' }}>
                          <strong style={{ color: '#c4a06a' }}>1st-Level Spell Slots:</strong>{' '}
                          {cls.spellcasting.spellSlotsAtLevel1}
                        </Text>
                        <Text size="xs" fs="italic" style={{ color: '#6b5a42' }}>
                          Spell selection will be available in a future update.
                        </Text>
                      </Stack>
                    </Box>
                  )}

                  {/* Kineticist Element Picker */}
                  {cls.id === 'kineticist' && (() => {
                    const elements = [
                      { id: 'air', name: 'Air' },
                      { id: 'earth', name: 'Earth' },
                      { id: 'fire', name: 'Fire' },
                      { id: 'metal', name: 'Metal' },
                      { id: 'water', name: 'Water' },
                      { id: 'wood', name: 'Wood' },
                    ]
                    const selected = character.kineticistElements ?? []
                    const maxElements = [1, 5, 9, 13, 17].filter(l => l <= character.level).length + 1

                    const toggleElement = (elId: string) => {
                      if (selected.includes(elId)) {
                        setKineticistElements(selected.filter(e => e !== elId))
                      } else if (selected.length < maxElements) {
                        setKineticistElements([...selected, elId])
                      }
                    }

                    return (
                      <Box mt="md" onClick={(e: React.MouseEvent) => e.stopPropagation()}>
                        <Group justify="space-between" mb={4}>
                          <Text fw={600} size="sm" style={{ color: '#e8d5a3' }}>
                            Kinetic Elements
                          </Text>
                          <Badge
                            size="sm"
                            style={{
                              background: 'rgba(154, 123, 47, 0.15)',
                              color: '#d4a843',
                              border: '1px solid rgba(154, 123, 47, 0.3)',
                            }}
                          >
                            {selected.length}/{maxElements} elements
                          </Badge>
                        </Group>
                        <Text size="xs" style={{ color: '#8b7355' }} mb="xs">
                          Choose your kinetic elements. You gain additional elements as you level up.
                        </Text>
                        <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="xs">
                          {elements.map(el => {
                            const isElSelected = selected.includes(el.id)
                            return (
                              <Box
                                key={el.id}
                                onClick={() => toggleElement(el.id)}
                                style={{
                                  padding: '8px 12px',
                                  borderRadius: 4,
                                  cursor: isElSelected || selected.length < maxElements ? 'pointer' : 'not-allowed',
                                  background: isElSelected
                                    ? 'rgba(154, 123, 47, 0.25)'
                                    : 'rgba(92, 74, 53, 0.2)',
                                  border: isElSelected
                                    ? '1px solid rgba(212, 168, 67, 0.5)'
                                    : '1px solid rgba(92, 74, 53, 0.3)',
                                  opacity: !isElSelected && selected.length >= maxElements ? 0.5 : 1,
                                  transition: 'all 0.15s ease',
                                }}
                              >
                                <Group gap="xs">
                                  <Text style={{ color: '#d4a843', fontSize: 12 }}>
                                    {isElSelected ? '✦' : '◇'}
                                  </Text>
                                  <Text
                                    fw={isElSelected ? 600 : 400}
                                    size="sm"
                                    style={{ color: isElSelected ? '#e8d5a3' : '#8b7355' }}
                                  >
                                    {el.name}
                                  </Text>
                                </Group>
                              </Box>
                            )
                          })}
                        </SimpleGrid>
                      </Box>
                    )
                  })()}
                </Box>
              )}
            </Box>
          )
        })}
      </Stack>
    </Stack>
  )
}
