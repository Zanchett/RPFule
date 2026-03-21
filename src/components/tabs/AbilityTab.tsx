import {
  Box,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Badge,
  Group,
  Checkbox,
  Alert
} from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { ABILITY_NAMES, AbilityId, ALL_ABILITIES } from '../../types'
import { ABILITY_BOOST_LEVELS } from '../../../game-systems/pf2e/rules'

export function AbilityTab(): JSX.Element {
  const { character, gameSystem, setFreeBoosts, setLevelBoosts } = useCharacterStore()

  if (!character) return <></>

  const scores = gameSystem.calculateAbilityScores(character)

  const toggleFreeBoost = (ability: AbilityId): void => {
    const current = character.abilityBoosts.free
    if (current.includes(ability)) {
      setFreeBoosts(current.filter((b) => b !== ability))
    } else if (current.length < 4) {
      setFreeBoosts([...current, ability])
    }
  }

  const toggleLevelBoost = (level: 5 | 10 | 15 | 20, ability: AbilityId): void => {
    const key = `level${level}` as keyof typeof character.abilityBoosts
    const current = (character.abilityBoosts[key] ?? []) as AbilityId[]
    if (current.includes(ability)) {
      setLevelBoosts(level, current.filter((b) => b !== ability))
    } else if (current.length < 4) {
      setLevelBoosts(level, [...current, ability])
    }
  }

  const allBoostSources = (ability: AbilityId): string[] => {
    const sources: string[] = []
    if (character.abilityBoosts.ancestry.includes(ability)) sources.push('Ancestry')
    if (character.abilityBoosts.background.includes(ability)) sources.push('Background')
    if (character.abilityBoosts.class.includes(ability)) sources.push('Class')
    if (character.abilityBoosts.free.includes(ability)) sources.push('Free')
    for (const lvl of ABILITY_BOOST_LEVELS) {
      const key = `level${lvl}` as keyof typeof character.abilityBoosts
      if ((character.abilityBoosts[key] as AbilityId[] | undefined)?.includes(ability)) {
        sources.push(`Level ${lvl}`)
      }
    }
    return sources
  }

  const allFlawSources = (ability: AbilityId): string[] => {
    const sources: string[] = []
    if (character.abilityFlaws.ancestry.includes(ability)) sources.push('Ancestry')
    return sources
  }

  const sectionStyle = {
    background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
    border: '1px solid #4a3828',
    padding: 20
  }

  return (
    <Stack gap="md">
      <Title
        order={3}
        style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
      >
        Ability Scores
      </Title>
      <Text style={{ color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>
        All abilities start at 10. Boosts add +2 and flaws subtract -2. You get boosts from your
        ancestry, background, class, and 4 free boosts.
      </Text>

      <Box style={sectionStyle}>
        <Stack gap="md">
          <Group justify="space-between">
            <Title
              order={5}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Free Ability Boosts
            </Title>
            <Badge
              className={character.abilityBoosts.free.length >= 4 ? 'badge-boost' : 'badge-muted'}
              size="sm"
            >
              {character.abilityBoosts.free.length}/4
            </Badge>
          </Group>
          <Text size="sm" style={{ color: '#5c4a35' }}>
            Choose 4 different abilities to boost. You cannot boost an ability that is already at 18.
          </Text>
          <Group gap="md">
            {ALL_ABILITIES.map((ability) => (
              <Checkbox
                key={ability}
                label={ABILITY_NAMES[ability]}
                checked={character.abilityBoosts.free.includes(ability)}
                onChange={() => toggleFreeBoost(ability)}
                disabled={
                  !character.abilityBoosts.free.includes(ability) &&
                  character.abilityBoosts.free.length >= 4
                }
              />
            ))}
          </Group>
        </Stack>
      </Box>

      {ABILITY_BOOST_LEVELS.filter((lvl) => character.level >= lvl).map((lvl) => {
        const key = `level${lvl}` as keyof typeof character.abilityBoosts
        const boosts = (character.abilityBoosts[key] ?? []) as AbilityId[]
        return (
          <Box key={lvl} style={sectionStyle}>
            <Stack gap="md">
              <Group justify="space-between">
                <Title
                  order={5}
                  style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
                >
                  Level {lvl} Ability Boosts
                </Title>
                <Badge
                  className={boosts.length >= 4 ? 'badge-boost' : 'badge-muted'}
                  size="sm"
                >
                  {boosts.length}/4
                </Badge>
              </Group>
              <Text size="sm" style={{ color: '#5c4a35' }}>
                Choose 4 abilities to boost at level {lvl}. Abilities at 18+ gain +1 instead of +2.
              </Text>
              <Group gap="md">
                {ALL_ABILITIES.map((ability) => (
                  <Checkbox
                    key={ability}
                    label={ABILITY_NAMES[ability]}
                    checked={boosts.includes(ability)}
                    onChange={() => toggleLevelBoost(lvl as 5 | 10 | 15 | 20, ability)}
                    disabled={
                      !boosts.includes(ability) &&
                      boosts.length >= 4
                    }
                  />
                ))}
              </Group>
            </Stack>
          </Box>
        )
      })}

      <SimpleGrid cols={{ base: 2, sm: 3, md: 6 }} spacing="md">
        {ALL_ABILITIES.map((ability) => {
          const score = scores[ability]
          const modifier = gameSystem.calculateModifier(score)
          const modStr = modifier >= 0 ? `+${modifier}` : `${modifier}`
          const boostSources = allBoostSources(ability)
          const flawSources = allFlawSources(ability)

          return (
            <Box key={ability} style={{ ...sectionStyle, textAlign: 'center' as const }}>
              <Stack align="center" gap="xs">
                <Text
                  fw={600}
                  size="sm"
                  tt="uppercase"
                  style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
                >
                  {ABILITY_NAMES[ability]}
                </Text>
                <Text
                  fw={700}
                  style={{
                    fontSize: '2rem',
                    fontFamily: '"Cinzel", serif',
                    color:
                      score > 10
                        ? '#d4a843'
                        : score < 10
                          ? '#a04040'
                          : '#e8d5a3'
                  }}
                >
                  {score}
                </Text>
                <Badge
                  size="lg"
                  className={modifier >= 0 ? 'badge-boost' : 'badge-flaw'}
                >
                  {modStr}
                </Badge>
                <Stack gap={2} align="center">
                  {boostSources.map((src) => (
                    <Badge key={src} className="badge-boost" size="xs">
                      +{src}
                    </Badge>
                  ))}
                  {flawSources.map((src) => (
                    <Badge key={src} className="badge-flaw" size="xs">
                      -{src}
                    </Badge>
                  ))}
                </Stack>
              </Stack>
            </Box>
          )
        })}
      </SimpleGrid>

      <Box style={sectionStyle}>
        <Stack gap="sm">
          <Title
            order={5}
            style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
          >
            Derived Statistics
          </Title>
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
            <Stack align="center" gap="xs">
              <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
                Hit Points
              </Text>
              <Text
                fw={700}
                size="xl"
                style={{ color: '#a04040', fontFamily: '"Cinzel", serif' }}
              >
                {gameSystem.calculateHP(character)}
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
                Armor Class
              </Text>
              <Text
                fw={700}
                size="xl"
                style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}
              >
                {gameSystem.calculateAC(character)}
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
                Perception
              </Text>
              <Text
                fw={700}
                size="xl"
                style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}
              >
                {gameSystem.calculatePerception(character) >= 0 ? '+' : ''}
                {gameSystem.calculatePerception(character)}
              </Text>
            </Stack>
            <Stack align="center" gap="xs">
              <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
                Speed
              </Text>
              <Text
                fw={700}
                size="xl"
                style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}
              >
                {(() => {
                  const ancestry = gameSystem
                    .getAncestries()
                    .find((a) => a.id === character.ancestryId)
                  return ancestry ? `${ancestry.speed} ft` : '-'
                })()}
              </Text>
            </Stack>
          </SimpleGrid>

          <SimpleGrid cols={{ base: 3 }} spacing="md" mt="sm">
            {(['fortitude', 'reflex', 'will'] as const).map((save) => {
              const val = gameSystem.calculateSavingThrow(character, save)
              return (
                <Stack key={save} align="center" gap="xs">
                  <Text
                    size="sm"
                    tt="capitalize"
                    style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}
                  >
                    {save}
                  </Text>
                  <Text
                    fw={700}
                    size="lg"
                    style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}
                  >
                    {val >= 0 ? '+' : ''}
                    {val}
                  </Text>
                </Stack>
              )
            })}
          </SimpleGrid>
        </Stack>
      </Box>
    </Stack>
  )
}
