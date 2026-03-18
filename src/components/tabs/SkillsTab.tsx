import { Box, Title, Text, Stack, Checkbox, Group, Badge, SimpleGrid, Alert } from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { ABILITY_NAMES } from '../../types'

export function SkillsTab(): JSX.Element {
  const { character, gameSystem, setSkillTraining } = useCharacterStore()

  if (!character) return <></>

  const skills = gameSystem.getSkills()
  const cls = gameSystem.getClasses().find((c) => c.id === character.classId)
  const scores = gameSystem.calculateAbilityScores(character)
  const intMod = gameSystem.calculateModifier(scores.int)

  // Class auto-trained skills
  const classTrainedSkills = cls?.skills.trained ?? []
  // Additional trainable skill slots
  const additionalSlots = (cls?.skills.additionalTrainedCount ?? 0) + Math.max(0, intMod)
  // Player's chosen additional skills (excluding class auto-trained)
  const playerChosen = character.skillTraining.filter((s) => !classTrainedSkills.includes(s))
  const remainingSlots = additionalSlots - playerChosen.length

  // Background trained skill
  const bg = gameSystem.getBackgrounds().find((b) => b.id === character.backgroundId)
  const bgSkill = bg?.trainedSkill ?? null

  const isAutoTrained = (skillId: string): boolean => {
    const skillName = skills.find((s) => s.id === skillId)?.name ?? ''
    return classTrainedSkills.includes(skillName) || skillName === bgSkill
  }

  const isTrained = (skillId: string): boolean => {
    return character.skillTraining.includes(skillId) || isAutoTrained(skillId)
  }

  const toggleSkill = (skillId: string): void => {
    if (isAutoTrained(skillId)) return // Can't untrain auto-trained

    const current = character.skillTraining
    if (current.includes(skillId)) {
      setSkillTraining(current.filter((s) => s !== skillId))
    } else if (remainingSlots > 0) {
      setSkillTraining([...current, skillId])
    }
  }

  const sectionStyle = {
    background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
    border: '1px solid #4a3828',
    padding: 16
  }

  return (
    <Stack gap="md">
      <Title
        order={3}
        style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}
      >
        Skill Proficiencies
      </Title>
      <Text style={{ color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>
        Choose which skills your character is trained in. Your class and background automatically
        train you in some skills.
      </Text>

      {cls && (
        <Group gap="md">
          <Badge
            className={remainingSlots === 0 ? 'badge-boost' : 'badge-muted'}
            size="lg"
          >
            {remainingSlots} skill slot{remainingSlots !== 1 ? 's' : ''} remaining
          </Badge>
          <Text size="sm" style={{ color: '#5c4a35' }}>
            ({cls.skills.additionalTrainedCount} from class + {Math.max(0, intMod)} from INT
            modifier)
          </Text>
        </Group>
      )}

      {!cls && (
        <Alert color="yellow" variant="light">
          Select a class first to determine your available skill training slots.
        </Alert>
      )}

      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="xs">
        {skills.map((skill) => {
          const abilityScore = scores[skill.ability]
          const abilityMod = gameSystem.calculateModifier(abilityScore)
          const trained = isTrained(skill.id)
          const autoTrained = isAutoTrained(skill.id)
          const totalMod = trained
            ? abilityMod + 2 + character.level // trained bonus
            : abilityMod
          const modStr = totalMod >= 0 ? `+${totalMod}` : `${totalMod}`

          return (
            <Box key={skill.id} style={sectionStyle}>
              <Group justify="space-between">
                <Group gap="sm">
                  <Checkbox
                    checked={trained}
                    onChange={() => toggleSkill(skill.id)}
                    disabled={autoTrained || (!trained && remainingSlots <= 0)}
                  />
                  <Stack gap={0}>
                    <Text
                      size="sm"
                      fw={trained ? 600 : 400}
                      style={{
                        fontFamily: '"Cinzel", serif',
                        color: trained ? '#e8d5a3' : '#8b7355'
                      }}
                    >
                      {skill.name}
                    </Text>
                    <Text size="xs" style={{ color: '#5c4a35' }}>
                      {ABILITY_NAMES[skill.ability]}
                      {autoTrained && (
                        <Text
                          span
                          size="xs"
                          style={{ color: '#d4a843' }}
                        >
                          {' '}(auto)
                        </Text>
                      )}
                    </Text>
                  </Stack>
                </Group>
                <Badge
                  className={trained ? 'badge-boost' : 'badge-muted'}
                  size="lg"
                >
                  {modStr}
                </Badge>
              </Group>
            </Box>
          )
        })}
      </SimpleGrid>
    </Stack>
  )
}
