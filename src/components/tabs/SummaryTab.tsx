import { useState, useRef, useEffect, useCallback } from 'react'
import {
  Box,
  Title,
  Text,
  Stack,
  SimpleGrid,
  Badge,
  Group,
  Alert,
  Table,
  Tabs,
  Button,
  ActionIcon,
  NumberInput,
  Select,
  Textarea,
  Center,
  Modal
} from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { ABILITY_NAMES, ALL_ABILITIES, AbilityId } from '../../types'

// ---- Dice Roller State ----
interface DiceResult {
  label: string
  d20: number
  modifier: number
  total: number
  timestamp: number
}

export function SummaryTab(): JSX.Element {
  const {
    character,
    gameSystem,
    adjustHP,
    setTempHP,
    addXP,
    levelUp,
    setHeroPoints,
    addCondition,
    removeCondition,
    useSpellSlot,
    restoreSpellSlot,
    useFocusPoint,
    restoreFocusPoint,
    longRest,
    setPortrait,
    setSessionNotes
  } = useCharacterStore()

  const [diceResult, setDiceResult] = useState<DiceResult | null>(null)
  const [diceResultFading, setDiceResultFading] = useState(false)
  const [xpInput, setXpInput] = useState<number | string>('')
  const [customDamage, setCustomDamage] = useState<number | string>('')
  const [tempHpInput, setTempHpInput] = useState<number | string>('')
  const [showRestConfirm, setShowRestConfirm] = useState(false)
  const [conditionSelect, setConditionSelect] = useState<string | null>(null)
  const diceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  if (!character) return <></>

  const ancestry = gameSystem.getAncestries().find((a) => a.id === character.ancestryId)
  const heritage = ancestry?.heritages.find((h) => h.id === character.heritageId)
  const background = gameSystem.getBackgrounds().find((b) => b.id === character.backgroundId)
  const cls = gameSystem.getClasses().find((c) => c.id === character.classId)
  const scores = gameSystem.calculateAbilityScores(character)
  const maxHP = gameSystem.calculateHP(character)
  const allFeats = gameSystem.getFeats()
  const allEquipment = gameSystem.getEquipment()
  const allSkills = gameSystem.getSkills()
  const allConditions = gameSystem.getConditions()
  const maxSpellSlots = gameSystem.getMaxSpellSlots(character)
  const maxFocusPoints = gameSystem.getMaxFocusPoints(character)
  const validation = gameSystem.validateCharacter(character)
  const errors = validation.filter((v) => v.severity === 'error')
  const warnings = validation.filter((v) => v.severity === 'warning')

  const getFeatName = (id: string): string => allFeats.find((f) => f.id === id)?.name ?? id

  const sectionStyle = {
    background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
    border: '1px solid #4a3828',
    padding: 20
  }

  // ---- Dice Roller ----
  const rollD20 = (label: string, modifier: number): void => {
    if (diceTimerRef.current) clearTimeout(diceTimerRef.current)
    setDiceResultFading(false)

    const d20 = Math.floor(Math.random() * 20) + 1
    const result: DiceResult = {
      label,
      d20,
      modifier,
      total: d20 + modifier,
      timestamp: Date.now()
    }
    setDiceResult(result)

    diceTimerRef.current = setTimeout(() => {
      setDiceResultFading(true)
      setTimeout(() => setDiceResult(null), 300)
    }, 4000)
  }

  // ---- Portrait Upload ----
  const handlePortraitUpload = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    if (!file) return

    const reader = new FileReader()
    reader.onload = (e) => {
      const img = new Image()
      img.onload = () => {
        const canvas = document.createElement('canvas')
        const maxSize = 200
        let width = img.width
        let height = img.height

        if (width > height) {
          if (width > maxSize) { height = (height * maxSize) / width; width = maxSize }
        } else {
          if (height > maxSize) { width = (width * maxSize) / height; height = maxSize }
        }

        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext('2d')!
        ctx.drawImage(img, 0, 0, width, height)
        setPortrait(canvas.toDataURL('image/jpeg', 0.8))
      }
      img.src = e.target?.result as string
    }
    reader.readAsDataURL(file)
    // Reset input so same file can be re-selected
    event.target.value = ''
  }

  // ---- HP Color ----
  const hpPercent = maxHP > 0 ? character.currentHP / maxHP : 1
  const hpColorClass = hpPercent <= 0 ? 'hp-critical' : hpPercent <= 0.5 ? 'hp-bloodied' : 'hp-healthy'

  // ---- Condition helpers ----
  const parseCondition = (c: string): { id: string; value?: number } => {
    const parts = c.split(':')
    return { id: parts[0], value: parts[1] ? parseInt(parts[1]) : undefined }
  }

  const conditionDisplayName = (c: string): string => {
    const parsed = parseCondition(c)
    const cond = allConditions.find((ac) => ac.id === parsed.id)
    const name = cond?.name ?? parsed.id
    return parsed.value !== undefined ? `${name} ${parsed.value}` : name
  }

  const conditionSelectData = allConditions.map((c) => ({
    value: c.id,
    label: c.name
  }))

  return (
    <Stack gap="md">
      {/* Dice Roll Overlay */}
      {diceResult && (
        <Box
          className={`dice-result-overlay ${diceResultFading ? 'fading' : ''}`}
          style={{
            position: 'fixed',
            top: 80,
            right: 20,
            zIndex: 1000,
            background: 'linear-gradient(145deg, #241c14, #1e1610)',
            border: diceResult.d20 === 20 ? '2px solid #f0c75e' : diceResult.d20 === 1 ? '2px solid #c0392b' : '1px solid #4a3828',
            padding: 16,
            minWidth: 200,
            boxShadow: '0 4px 20px rgba(0,0,0,0.5)'
          }}
        >
          <Text size="sm" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
            {diceResult.label}
          </Text>
          <Text
            fw={700}
            size="xl"
            className={diceResult.d20 === 20 ? 'nat-20' : diceResult.d20 === 1 ? 'nat-1' : ''}
            style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
          >
            {diceResult.total}
          </Text>
          <Text size="xs" style={{ color: '#5c4a35' }}>
            d20 ({diceResult.d20}) {diceResult.modifier >= 0 ? '+' : ''}{diceResult.modifier}
            {diceResult.d20 === 20 && <Text span style={{ color: '#f0c75e' }}> Natural 20!</Text>}
            {diceResult.d20 === 1 && <Text span style={{ color: '#c0392b' }}> Natural 1!</Text>}
          </Text>
        </Box>
      )}

      {/* Validation Alerts */}
      {errors.length > 0 && (
        <Alert color="red" variant="light" title="Errors">
          <Stack gap="xs">
            {errors.map((e, i) => <Text key={i} size="sm">{e.message}</Text>)}
          </Stack>
        </Alert>
      )}
      {warnings.length > 0 && (
        <Alert color="yellow" variant="light" title="Warnings">
          <Stack gap="xs">
            {warnings.map((w, i) => <Text key={i} size="sm">{w.message}</Text>)}
          </Stack>
        </Alert>
      )}

      {/* ===== HEADER: Portrait + Name + Info ===== */}
      <Box style={sectionStyle}>
        <Group gap="lg" align="flex-start">
          {/* Portrait */}
          <Box
            className="portrait-container"
            onClick={() => fileInputRef.current?.click()}
          >
            {character.portraitBase64 ? (
              <img
                src={character.portraitBase64}
                alt="Portrait"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <Center h="100%" style={{ flexDirection: 'column', gap: 4 }}>
                <Text style={{ color: '#5c4a35', fontSize: 24 }}>&#9876;</Text>
                <Text size="xs" style={{ color: '#5c4a35', textAlign: 'center' }}>
                  Upload Portrait
                </Text>
              </Center>
            )}
          </Box>
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            ref={fileInputRef}
            onChange={handlePortraitUpload}
          />

          {/* Name & Info */}
          <Stack gap="xs" style={{ flex: 1 }}>
            <Title order={2} style={{ fontFamily: '"Cinzel", serif', color: '#f0c75e' }}>
              {character.name || 'Unnamed Character'}
            </Title>
            <Group gap="xs">
              {ancestry && (
                <Badge className="badge-muted" size="lg">
                  {ancestry.name}{heritage ? ` (${heritage.name})` : ''}
                </Badge>
              )}
              {background && <Badge className="badge-muted" size="lg">{background.name}</Badge>}
              {cls && <Badge className="badge-muted" size="lg">{cls.name}</Badge>}
            </Group>
            <Group gap="md">
              {character.alignment && (
                <Text size="sm" style={{ color: '#8b7355' }}>
                  <Text span fw={600} style={{ color: '#c4a96a' }}>Alignment:</Text>{' '}
                  {character.alignment}
                </Text>
              )}
              {character.deity && (
                <Text size="sm" style={{ color: '#8b7355' }}>
                  <Text span fw={600} style={{ color: '#c4a96a' }}>Deity:</Text>{' '}
                  {character.deity}
                </Text>
              )}
            </Group>
          </Stack>

          {/* Level + Size/Speed */}
          <Stack align="flex-end" gap="xs">
            <Badge className="badge-boost" size="xl">Level {character.level}</Badge>
            <Text size="sm" style={{ color: '#5c4a35' }}>
              {ancestry?.size ?? '-'} · {ancestry?.speed ?? 0} ft
            </Text>
          </Stack>
        </Group>
      </Box>

      {/* ===== XP BAR ===== */}
      <Box style={sectionStyle}>
        <Group justify="space-between" mb="xs">
          <Text fw={600} size="sm" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
            Experience
          </Text>
          <Text size="sm" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>
            {character.xp} / 1000 XP
          </Text>
        </Group>
        <Box className="xp-progress-track" mb="sm">
          <Box
            className="xp-progress-fill"
            style={{ width: `${Math.min(100, (character.xp / 1000) * 100)}%` }}
          />
        </Box>
        <Group gap="xs">
          <Button size="xs" variant="outline" className="hp-adjust-btn"
            onClick={() => addXP(10)}>+10</Button>
          <Button size="xs" variant="outline" className="hp-adjust-btn"
            onClick={() => addXP(30)}>+30</Button>
          <Button size="xs" variant="outline" className="hp-adjust-btn"
            onClick={() => addXP(80)}>+80</Button>
          <NumberInput
            size="xs"
            placeholder="Custom"
            value={xpInput}
            onChange={setXpInput}
            min={0}
            style={{ width: 90 }}
          />
          <Button
            size="xs"
            variant="outline"
            className="hp-adjust-btn"
            onClick={() => {
              if (typeof xpInput === 'number' && xpInput > 0) {
                addXP(xpInput)
                setXpInput('')
              }
            }}
          >
            Add
          </Button>
          {character.xp >= 1000 && (
            <Button
              size="sm"
              variant="filled"
              className="level-up-ready"
              style={{
                background: 'linear-gradient(135deg, #d4a843, #f0c75e)',
                color: '#120d06',
                fontFamily: '"Cinzel", serif',
                fontWeight: 700,
                marginLeft: 'auto'
              }}
              onClick={levelUp}
            >
              Level Up!
            </Button>
          )}
        </Group>
      </Box>

      {/* ===== COMBAT STATS: HP, AC, Perception, Speed, Hero Points ===== */}
      <SimpleGrid cols={{ base: 2, sm: 5 }} spacing="md">
        {/* HP Tracker */}
        <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
          <Stack align="center" gap="xs">
            <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
              Hit Points
            </Text>
            <Group gap={4} justify="center" align="baseline">
              <Text
                fw={700}
                className={hpColorClass}
                style={{ fontFamily: '"Cinzel", serif', fontSize: '1.8rem' }}
              >
                {character.currentHP}
              </Text>
              <Text size="sm" style={{ color: '#5c4a35' }}>/ {maxHP}</Text>
            </Group>
            {character.tempHP > 0 && (
              <Badge className="badge-condition" size="sm">
                +{character.tempHP} temp
              </Badge>
            )}
            <Group gap={4} justify="center">
              <Button size="xs" variant="outline" className="hp-adjust-btn damage"
                onClick={() => adjustHP(-5)}>-5</Button>
              <Button size="xs" variant="outline" className="hp-adjust-btn damage"
                onClick={() => adjustHP(-1)}>-1</Button>
              <Button size="xs" variant="outline" className="hp-adjust-btn heal"
                onClick={() => adjustHP(1)}>+1</Button>
              <Button size="xs" variant="outline" className="hp-adjust-btn heal"
                onClick={() => adjustHP(5)}>+5</Button>
            </Group>
            <Group gap={4} justify="center">
              <NumberInput
                size="xs"
                placeholder="Dmg/Heal"
                value={customDamage}
                onChange={setCustomDamage}
                style={{ width: 80 }}
              />
              <Button size="xs" variant="outline" className="hp-adjust-btn damage"
                onClick={() => {
                  if (typeof customDamage === 'number' && customDamage > 0) {
                    adjustHP(-customDamage)
                    setCustomDamage('')
                  }
                }}>Dmg</Button>
              <Button size="xs" variant="outline" className="hp-adjust-btn heal"
                onClick={() => {
                  if (typeof customDamage === 'number' && customDamage > 0) {
                    adjustHP(customDamage)
                    setCustomDamage('')
                  }
                }}>Heal</Button>
            </Group>
            <Group gap={4} justify="center" align="center">
              <Text size="xs" style={{ color: '#5c4a35' }}>Temp HP:</Text>
              <NumberInput
                size="xs"
                value={character.tempHP}
                onChange={(val) => setTempHP(typeof val === 'number' ? val : 0)}
                min={0}
                style={{ width: 60 }}
              />
            </Group>
          </Stack>
        </Box>

        {/* AC */}
        <Box
          className="stat-clickable"
          style={{ ...sectionStyle, textAlign: 'center' as const }}
          onClick={() => rollD20('AC Check', gameSystem.calculateAC(character))}
        >
          <Stack align="center" gap="xs">
            <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>AC</Text>
            <Text fw={700} size="xl" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
              {gameSystem.calculateAC(character)}
            </Text>
          </Stack>
        </Box>

        {/* Perception */}
        <Box
          className="stat-clickable"
          style={{ ...sectionStyle, textAlign: 'center' as const }}
          onClick={() => rollD20('Perception', gameSystem.calculatePerception(character))}
        >
          <Stack align="center" gap="xs">
            <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Perception</Text>
            <Text fw={700} size="xl" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>
              {gameSystem.calculatePerception(character) >= 0 ? '+' : ''}
              {gameSystem.calculatePerception(character)}
            </Text>
          </Stack>
        </Box>

        {/* Speed */}
        <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
          <Stack align="center" gap="xs">
            <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Speed</Text>
            <Text fw={700} size="xl" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>
              {ancestry?.speed ?? 0} ft
            </Text>
          </Stack>
        </Box>

        {/* Hero Points */}
        <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
          <Stack align="center" gap="xs">
            <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
              Hero Points
            </Text>
            <Group gap={6} justify="center">
              {[0, 1, 2].map((i) => (
                <Box
                  key={i}
                  className={`hero-point ${i < character.heroPoints ? 'filled' : 'empty'}`}
                  onClick={() => setHeroPoints(i < character.heroPoints ? i : i + 1)}
                />
              ))}
            </Group>
          </Stack>
        </Box>
      </SimpleGrid>

      {/* ===== CONDITIONS ===== */}
      <Box style={sectionStyle}>
        <Group justify="space-between" mb="xs">
          <Text fw={600} size="sm" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
            Conditions
          </Text>
        </Group>
        <Group gap="xs" mb="sm">
          {character.conditions.length === 0 && (
            <Text size="sm" style={{ color: '#5c4a35' }}>No active conditions</Text>
          )}
          {character.conditions.map((c) => (
            <Badge
              key={c}
              className="badge-condition"
              size="lg"
              rightSection={
                <ActionIcon
                  size="xs"
                  variant="transparent"
                  onClick={() => removeCondition(c)}
                  style={{ color: '#7b9ec9' }}
                >
                  &#10005;
                </ActionIcon>
              }
            >
              {conditionDisplayName(c)}
            </Badge>
          ))}
        </Group>
        <Group gap="xs">
          <Select
            placeholder="Add condition..."
            data={conditionSelectData}
            value={conditionSelect}
            onChange={setConditionSelect}
            searchable
            clearable
            size="xs"
            style={{ width: 200 }}
          />
          <Button
            size="xs"
            variant="outline"
            className="hp-adjust-btn"
            disabled={!conditionSelect}
            onClick={() => {
              if (conditionSelect) {
                const cond = allConditions.find((c) => c.id === conditionSelect)
                addCondition(cond?.hasValue ? `${conditionSelect}:1` : conditionSelect)
                setConditionSelect(null)
              }
            }}
          >
            Add
          </Button>
        </Group>
      </Box>

      {/* ===== SPELL SLOTS (casters only) ===== */}
      {cls?.isSpellcaster && maxSpellSlots.length > 0 && (
        <Box style={sectionStyle}>
          <Group justify="space-between" mb="sm">
            <Text fw={600} size="sm" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
              Spell Slots
            </Text>
            <Group gap="md">
              {maxFocusPoints > 0 && (
                <Group gap="xs">
                  <Text size="xs" style={{ color: '#8b7355' }}>Focus:</Text>
                  {Array.from({ length: maxFocusPoints }).map((_, i) => (
                    <Box
                      key={i}
                      className={`spell-slot ${i < maxFocusPoints - character.focusPointsUsed ? 'available' : 'used'}`}
                      onClick={() => {
                        if (i < maxFocusPoints - character.focusPointsUsed) {
                          useFocusPoint()
                        } else {
                          restoreFocusPoint()
                        }
                      }}
                    />
                  ))}
                </Group>
              )}
              <Badge className="badge-muted" size="sm">
                {cls.spellcasting?.tradition} · {cls.spellcasting?.type}
              </Badge>
            </Group>
          </Group>

          <Text size="xs" mb="xs" style={{ color: '#5c4a35' }}>Cantrips: unlimited</Text>

          <Stack gap="xs">
            {maxSpellSlots.map((maxSlots, idx) => {
              const spellLevel = idx + 1
              const used = character.spellSlotsUsed[spellLevel] ?? 0
              const remaining = maxSlots - used

              return (
                <Group key={spellLevel} gap="sm">
                  <Text size="sm" fw={600} style={{ color: '#8b7355', width: 60 }}>
                    Level {spellLevel}
                  </Text>
                  <Group gap={4}>
                    {Array.from({ length: maxSlots }).map((_, i) => (
                      <Box
                        key={i}
                        className={`spell-slot ${i < remaining ? 'available' : 'used'}`}
                        onClick={() => {
                          if (i < remaining) {
                            useSpellSlot(spellLevel)
                          } else {
                            restoreSpellSlot(spellLevel)
                          }
                        }}
                      />
                    ))}
                  </Group>
                  <Text size="xs" style={{ color: '#5c4a35' }}>
                    {remaining}/{maxSlots}
                  </Text>
                </Group>
              )
            })}
          </Stack>
        </Box>
      )}

      {/* ===== ABILITY SCORES (clickable for rolls) ===== */}
      <Box style={sectionStyle}>
        <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
          Ability Scores
        </Title>
        <SimpleGrid cols={6} spacing="sm">
          {ALL_ABILITIES.map((ability) => {
            const score = scores[ability]
            const mod = gameSystem.calculateModifier(score)
            return (
              <Box
                key={ability}
                className="stat-clickable"
                style={{
                  textAlign: 'center',
                  padding: 8,
                  border: '1px solid #4a3828',
                  background: 'rgba(30, 22, 16, 0.5)'
                }}
                onClick={() => rollD20(`${ABILITY_NAMES[ability]} Check`, mod)}
              >
                <Stack align="center" gap="xs">
                  <Text size="xs" fw={600} tt="uppercase"
                    style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
                    {ABILITY_NAMES[ability].slice(0, 3)}
                  </Text>
                  <Text fw={700} size="lg" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>
                    {score}
                  </Text>
                  <Badge className={mod >= 0 ? 'badge-boost' : 'badge-flaw'} size="sm">
                    {mod >= 0 ? '+' : ''}{mod}
                  </Badge>
                </Stack>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>

      {/* ===== SAVING THROWS (clickable) ===== */}
      <Box style={sectionStyle}>
        <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
          Saving Throws
        </Title>
        <SimpleGrid cols={3} spacing="md">
          {(['fortitude', 'reflex', 'will'] as const).map((save) => {
            const val = gameSystem.calculateSavingThrow(character, save)
            const prof = cls?.savingThrows[save] ?? 'untrained'
            return (
              <Box
                key={save}
                className="stat-clickable"
                style={{
                  textAlign: 'center',
                  padding: 12,
                  border: '1px solid #4a3828',
                  background: 'rgba(30, 22, 16, 0.5)'
                }}
                onClick={() => rollD20(`${save.charAt(0).toUpperCase() + save.slice(1)} Save`, val)}
              >
                <Stack align="center" gap="xs">
                  <Text size="sm" fw={600} tt="capitalize"
                    style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>{save}</Text>
                  <Text fw={700} size="lg" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>
                    {val >= 0 ? '+' : ''}{val}
                  </Text>
                  <Badge className="badge-muted" size="xs">{prof}</Badge>
                </Stack>
              </Box>
            )
          })}
        </SimpleGrid>
      </Box>

      {/* ===== SKILLS (clickable) ===== */}
      <Box style={sectionStyle}>
        <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
          Skills
        </Title>
        <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="xs">
          {allSkills.map((skill) => {
            const trained = character.skillTraining.includes(skill.id)
            const abilityMod = gameSystem.calculateModifier(scores[skill.ability])
            const total = trained ? abilityMod + 2 + character.level : abilityMod

            return (
              <Group
                key={skill.id}
                justify="space-between"
                gap="xs"
                className="stat-clickable"
                style={{
                  padding: '4px 8px',
                  cursor: 'pointer',
                  border: '1px solid transparent',
                  borderRadius: 0
                }}
                onClick={() => rollD20(`${skill.name}`, total)}
              >
                <Text
                  size="sm"
                  fw={trained ? 600 : 400}
                  style={{
                    fontFamily: '"Cinzel", serif',
                    color: trained ? '#e8d5a3' : '#5c4a35',
                    fontSize: '0.75rem'
                  }}
                >
                  {skill.name}
                </Text>
                <Badge className={trained ? 'badge-boost' : 'badge-muted'} size="sm">
                  {total >= 0 ? '+' : ''}{total}
                </Badge>
              </Group>
            )
          })}
        </SimpleGrid>
      </Box>

      {/* ===== FEATS ===== */}
      <Box style={sectionStyle}>
        <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
          Feats
        </Title>
        <Stack gap="sm">
          {character.selectedFeats.ancestryFeats.length > 0 && (
            <Group gap="xs">
              <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
                Ancestry:
              </Text>
              {character.selectedFeats.ancestryFeats.map((id) => (
                <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>
              ))}
            </Group>
          )}
          {character.selectedFeats.classFeats.length > 0 && (
            <Group gap="xs">
              <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
                Class:
              </Text>
              {character.selectedFeats.classFeats.map((id) => (
                <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>
              ))}
            </Group>
          )}
          {character.selectedFeats.generalFeats.length > 0 && (
            <Group gap="xs">
              <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
                General:
              </Text>
              {character.selectedFeats.generalFeats.map((id) => (
                <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>
              ))}
            </Group>
          )}
          {character.selectedFeats.skillFeats.length > 0 && (
            <Group gap="xs">
              <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
                Skill:
              </Text>
              {character.selectedFeats.skillFeats.map((id) => (
                <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>
              ))}
            </Group>
          )}
          {character.selectedFeats.ancestryFeats.length === 0 &&
            character.selectedFeats.classFeats.length === 0 &&
            character.selectedFeats.generalFeats.length === 0 &&
            character.selectedFeats.skillFeats.length === 0 && (
              <Text size="sm" style={{ color: '#5c4a35' }}>No feats selected yet.</Text>
            )}
        </Stack>
      </Box>

      {/* ===== EQUIPMENT ===== */}
      <Box style={sectionStyle}>
        <Group justify="space-between" mb="md">
          <Title order={4} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
            Equipment
          </Title>
          <Badge className="badge-boost">
            Gold: {(character.goldRemaining / 100).toFixed(1)} gp
          </Badge>
        </Group>
        {character.purchasedEquipment.length > 0 ? (() => {
          const itemsWithData = character.purchasedEquipment
            .map((p) => ({ ...p, item: allEquipment.find((e) => e.id === p.itemId) }))
            .filter((p) => p.item)
          const categoryOrder: { key: string; label: string }[] = [
            { key: 'weapon', label: 'Weapons' },
            { key: 'armor', label: 'Armor' },
            { key: 'shield', label: 'Shields' },
            { key: 'gear', label: 'Gear' },
            { key: 'kit', label: 'Kits' },
            { key: 'tool', label: 'Tools' },
            { key: 'potion', label: 'Potions' },
            { key: 'scroll', label: 'Scrolls' },
            { key: 'wand', label: 'Wands' },
            { key: 'consumable', label: 'Consumables' },
            { key: 'worn', label: 'Worn Items' },
            { key: 'held', label: 'Held Items' },
            { key: 'talisman', label: 'Talismans' },
          ]
          const populatedCategories = categoryOrder.filter((cat) =>
            itemsWithData.some((i) => i.item!.category === cat.key)
          )
          return (
            <Tabs defaultValue={populatedCategories[0]?.key}>
              <Tabs.List mb="sm" style={{ flexWrap: 'wrap' }}>
                {populatedCategories.map((cat) => (
                  <Tabs.Tab key={cat.key} value={cat.key} style={{ fontSize: '0.8rem' }}>
                    {cat.label}
                  </Tabs.Tab>
                ))}
              </Tabs.List>
              {populatedCategories.map((cat) => {
                const catItems = itemsWithData.filter((i) => i.item!.category === cat.key)
                return (
                  <Tabs.Panel key={cat.key} value={cat.key}>
                    <Table>
                      <Table.Thead>
                        <Table.Tr>
                          <Table.Th style={{ color: '#8b7355' }}>Item</Table.Th>
                          <Table.Th style={{ color: '#8b7355' }}>Qty</Table.Th>
                        </Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {catItems.map((p) => (
                          <Table.Tr key={p.itemId}>
                            <Table.Td>
                              <Stack gap={0}>
                                <Text size="sm" fw={500} style={{ color: '#e8d5a3' }}>{p.item!.name}</Text>
                                {p.item!.damage && (
                                  <Text size="xs" style={{ color: '#5c4a35' }}>
                                    {p.item!.damage} {p.item!.damageType}
                                    {p.item!.traits && p.item!.traits.length > 0 && ` (${p.item!.traits.join(', ')})`}
                                    {p.item!.range && ` - Range ${p.item!.range} ft`}
                                  </Text>
                                )}
                                {p.item!.acBonus !== undefined && (
                                  <Text size="xs" style={{ color: '#5c4a35' }}>
                                    AC +{p.item!.acBonus}
                                    {p.item!.dexCap !== undefined && `, Dex Cap +${p.item!.dexCap}`}
                                    {p.item!.checkPenalty ? `, Check Penalty ${p.item!.checkPenalty}` : ''}
                                    {p.item!.speedPenalty ? `, Speed Penalty −${Math.abs(p.item!.speedPenalty)} ft` : ''}
                                  </Text>
                                )}
                                {p.item!.effect && !p.item!.damage && p.item!.acBonus === undefined && (
                                  <Text size="xs" style={{ color: '#5c4a35' }}>{p.item!.effect}</Text>
                                )}
                                {p.item!.rarity && p.item!.rarity !== 'common' && (
                                  <Badge size="xs" variant="outline" color={p.item!.rarity === 'rare' ? 'blue' : p.item!.rarity === 'unique' ? 'grape' : 'yellow'} mt={2}>
                                    {p.item!.rarity}
                                  </Badge>
                                )}
                              </Stack>
                            </Table.Td>
                            <Table.Td>
                              <Text size="sm" style={{ color: '#c4a96a' }}>{p.quantity}</Text>
                            </Table.Td>
                          </Table.Tr>
                        ))}
                      </Table.Tbody>
                    </Table>
                  </Tabs.Panel>
                )
              })}
            </Tabs>
          )
        })() : (
          <Text size="sm" style={{ color: '#5c4a35' }}>No equipment purchased yet.</Text>
        )}
      </Box>

      {/* ===== LANGUAGES & NOTES ===== */}
      {(character.languages.length > 0 || character.notes) && (
        <Box style={sectionStyle}>
          {character.languages.length > 0 && (
            <>
              <Title order={4} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
                Languages
              </Title>
              <Group gap="xs" mb="md">
                {character.languages.map((lang) => (
                  <Badge key={lang} className="badge-muted">{lang}</Badge>
                ))}
              </Group>
            </>
          )}
          {character.notes && (
            <>
              <Title order={4} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
                Notes
              </Title>
              <Text
                size="sm"
                style={{ whiteSpace: 'pre-wrap', color: '#8b7355', fontFamily: '"Crimson Text", serif' }}
              >
                {character.notes}
              </Text>
            </>
          )}
        </Box>
      )}

      {/* ===== SESSION NOTES ===== */}
      <Box style={sectionStyle}>
        <Title order={4} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
          Session Notes
        </Title>
        <Textarea
          placeholder="Track events, loot, NPC names, quest details..."
          value={character.sessionNotes}
          onChange={(e) => setSessionNotes(e.target.value)}
          minRows={4}
          autosize
        />
      </Box>

      {/* ===== LONG REST ===== */}
      <Group justify="center">
        <Button
          variant="outline"
          size="md"
          className="long-rest-btn"
          style={{ fontFamily: '"Cinzel", serif' }}
          onClick={() => setShowRestConfirm(true)}
        >
          &#9968; Long Rest
        </Button>
      </Group>

      <Modal
        opened={showRestConfirm}
        onClose={() => setShowRestConfirm(false)}
        title={
          <Text fw={600} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
            Long Rest
          </Text>
        }
        centered
        size="sm"
      >
        <Stack gap="md">
          <Text size="sm" style={{ color: '#8b7355' }}>
            Taking a long rest will:
          </Text>
          <Stack gap="xs">
            <Text size="sm" style={{ color: '#e8d5a3' }}>&#10003; Restore HP to maximum ({maxHP})</Text>
            <Text size="sm" style={{ color: '#e8d5a3' }}>&#10003; Remove temporary HP</Text>
            <Text size="sm" style={{ color: '#e8d5a3' }}>&#10003; Restore all spell slots</Text>
            <Text size="sm" style={{ color: '#e8d5a3' }}>&#10003; Restore focus points</Text>
            <Text size="sm" style={{ color: '#e8d5a3' }}>&#10003; Remove all conditions</Text>
          </Stack>
          <Group justify="flex-end" gap="sm">
            <Button variant="subtle" onClick={() => setShowRestConfirm(false)}
              style={{ color: '#8b7355' }}>Cancel</Button>
            <Button
              variant="filled"
              style={{
                background: 'linear-gradient(135deg, #2c3e6b, #3a5080)',
                color: '#e8d5a3',
                fontFamily: '"Cinzel", serif'
              }}
              onClick={() => {
                longRest()
                setShowRestConfirm(false)
              }}
            >
              Rest
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Stack>
  )
}
