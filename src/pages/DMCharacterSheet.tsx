import { useEffect, useState, useCallback, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import {
  Box, Container, Stack, Title, Text, Group, Button, Badge,
  SimpleGrid, NumberInput, ActionIcon, Table, Select, Tabs,
  Loader, Center
} from '@mantine/core'
import { NavBar } from '../components/NavBar'
import { Character, ABILITY_NAMES, ALL_ABILITIES, AbilityId, Equipment, EquipmentCategory } from '../types'
import { getGameSystem, getDefaultGameSystem } from '../../game-systems'
import * as api from '../lib/api'
import { supabase } from '../lib/supabase'

function formatPrice(copper: number): string {
  if (copper >= 100) {
    const gp = Math.floor(copper / 100)
    const sp = Math.floor((copper % 100) / 10)
    const cp = copper % 10
    const parts: string[] = []
    if (gp > 0) parts.push(`${gp} gp`)
    if (sp > 0) parts.push(`${sp} sp`)
    if (cp > 0) parts.push(`${cp} cp`)
    return parts.join(' ')
  }
  if (copper >= 10) {
    const sp = Math.floor(copper / 10)
    const cp = copper % 10
    const parts: string[] = []
    if (sp > 0) parts.push(`${sp} sp`)
    if (cp > 0) parts.push(`${cp} cp`)
    return parts.join(' ')
  }
  return `${copper} cp`
}

function formatBulk(bulk: number | 'L'): string {
  if (bulk === 'L') return 'L'
  if (bulk === 0) return '-'
  return String(bulk)
}

export function DMCharacterSheet(): JSX.Element {
  const { campaignId, characterId } = useParams<{ campaignId: string; characterId: string }>()
  const navigate = useNavigate()

  const [character, setCharacter] = useState<Character | null>(null)
  const [loading, setLoading] = useState(true)
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle')
  const [customDamage, setCustomDamage] = useState<number | string>('')
  const [tempHpInput, setTempHpInput] = useState<number | string>('')
  const [goldInput, setGoldInput] = useState<number | string>('')
  const [conditionSelect, setConditionSelect] = useState<string | null>(null)
  const saveTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const savedBadgeRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  // Track whether we're currently saving — to prevent real-time subscription from overwriting
  const isSavingRef = useRef(false)

  // Load character on mount
  useEffect(() => {
    if (!characterId) return
    setLoading(true)
    api.loadCharacter(characterId)
      .then((data) => {
        const migrated: Character = {
          ...data,
          currentHP: data.currentHP ?? 0,
          tempHP: data.tempHP ?? 0,
          heroPoints: data.heroPoints ?? 1,
          conditions: data.conditions ?? [],
          spellSlotsUsed: data.spellSlotsUsed ?? {},
          focusPointsUsed: data.focusPointsUsed ?? 0,
          goldRemaining: data.goldRemaining ?? 1500,
          purchasedEquipment: data.purchasedEquipment ?? []
        }
        setCharacter(migrated)
      })
      .catch((err) => console.error('Failed to load character:', err))
      .finally(() => setLoading(false))

    // Real-time subscription: sync character changes from other sources (player edits, shop purchases)
    const channel = supabase
      .channel(`dm-char:${characterId}`)
      .on(
        'postgres_changes',
        {
          event: 'UPDATE',
          schema: 'public',
          table: 'characters',
          filter: `id=eq.${characterId}`,
        },
        () => {
          // Only reload if WE are not the ones saving (prevents overwriting our own edits)
          if (!isSavingRef.current) {
            api.loadCharacter(characterId).then((data) => {
              setCharacter((prev) => {
                if (!prev) return prev
                return {
                  ...prev,
                  currentHP: data.currentHP ?? prev.currentHP,
                  tempHP: data.tempHP ?? prev.tempHP,
                  heroPoints: data.heroPoints ?? prev.heroPoints,
                  conditions: data.conditions ?? prev.conditions,
                  goldRemaining: data.goldRemaining ?? prev.goldRemaining,
                  purchasedEquipment: data.purchasedEquipment ?? prev.purchasedEquipment,
                  focusPointsUsed: data.focusPointsUsed ?? prev.focusPointsUsed,
                  spellSlotsUsed: data.spellSlotsUsed ?? prev.spellSlotsUsed,
                }
              })
            }).catch(() => { /* ignore — stale data is better than crashing */ })
          }
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  }, [characterId])

  // Save DM fields immediately (no debounce — changes should be instant)
  const saveDMFields = useCallback(async (char: Character) => {
    if (!characterId) return
    isSavingRef.current = true
    setSaveStatus('saving')
    try {
      await api.saveDMEdits(characterId, {
        currentHP: char.currentHP,
        tempHP: char.tempHP,
        goldRemaining: char.goldRemaining,
        purchasedEquipment: char.purchasedEquipment,
        focusPointsUsed: char.focusPointsUsed,
        heroPoints: char.heroPoints,
        conditions: char.conditions,
        spellSlotsUsed: char.spellSlotsUsed
      })
      setSaveStatus('saved')
      if (savedBadgeRef.current) clearTimeout(savedBadgeRef.current)
      savedBadgeRef.current = setTimeout(() => setSaveStatus('idle'), 3000)
    } catch (err) {
      console.error('DM save failed:', err)
      setSaveStatus('error')
    } finally {
      // Small delay before allowing real-time updates to flow in again
      // to prevent the subscription from overwriting our just-saved data
      setTimeout(() => { isSavingRef.current = false }, 1000)
    }
  }, [characterId])

  // Short debounce (300ms) to batch rapid edits like typing numbers
  const scheduleSave = useCallback((char: Character) => {
    if (saveTimeoutRef.current) clearTimeout(saveTimeoutRef.current)
    saveTimeoutRef.current = setTimeout(() => saveDMFields(char), 300)
  }, [saveDMFields])

  // Helper: update character and schedule save
  const updateAndSave = useCallback((updater: (prev: Character) => Character) => {
    setCharacter((prev) => {
      if (!prev) return prev
      const updated = updater(prev)
      scheduleSave(updated)
      return updated
    })
  }, [scheduleSave])

  if (loading || !character) {
    return (
      <Box style={{ minHeight: '100vh', background: '#120d06' }}>
        <NavBar />
        <Center h="60vh"><Loader color="yellow" /></Center>
      </Box>
    )
  }

  const gameSystem = getGameSystem(character.gameSystemId) ?? getDefaultGameSystem()
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

  const getFeatName = (id: string): string => allFeats.find((f) => f.id === id)?.name ?? id

  const hpPercent = maxHP > 0 ? character.currentHP / maxHP : 1
  const hpColorClass = hpPercent <= 0 ? 'hp-critical' : hpPercent <= 0.5 ? 'hp-bloodied' : 'hp-healthy'

  // DM edit handlers
  const adjustHP = (delta: number): void => {
    updateAndSave((prev) => {
      if (delta < 0) {
        const damage = Math.abs(delta)
        let remainingDamage = damage
        let newTempHP = prev.tempHP
        if (newTempHP > 0) {
          if (newTempHP >= remainingDamage) { newTempHP -= remainingDamage; remainingDamage = 0 }
          else { remainingDamage -= newTempHP; newTempHP = 0 }
        }
        return { ...prev, currentHP: Math.max(0, prev.currentHP - remainingDamage), tempHP: newTempHP }
      }
      return { ...prev, currentHP: Math.min(maxHP, prev.currentHP + delta) }
    })
  }

  const setTempHP = (hp: number): void => {
    updateAndSave((prev) => ({ ...prev, tempHP: Math.max(0, hp) }))
  }

  const setHeroPoints = (points: number): void => {
    updateAndSave((prev) => ({ ...prev, heroPoints: Math.max(0, Math.min(3, points)) }))
  }

  const addCondition = (condition: string): void => {
    updateAndSave((prev) => {
      const baseId = condition.split(':')[0]
      const filtered = prev.conditions.filter((c) => c.split(':')[0] !== baseId)
      return { ...prev, conditions: [...filtered, condition] }
    })
  }

  const removeCondition = (condition: string): void => {
    updateAndSave((prev) => ({ ...prev, conditions: prev.conditions.filter((c) => c !== condition) }))
  }

  const addEquipmentDM = (itemId: string): void => {
    const item = allEquipment.find((e) => e.id === itemId)
    if (!item) return
    updateAndSave((prev) => {
      const existing = prev.purchasedEquipment.find((e) => e.itemId === itemId)
      const newEquipment = existing
        ? prev.purchasedEquipment.map((e) => e.itemId === itemId ? { ...e, quantity: e.quantity + 1 } : e)
        : [...prev.purchasedEquipment, { itemId, quantity: 1 }]
      return { ...prev, purchasedEquipment: newEquipment }
    })
  }

  const removeEquipmentDM = (itemId: string): void => {
    updateAndSave((prev) => {
      const existing = prev.purchasedEquipment.find((e) => e.itemId === itemId)
      if (!existing) return prev
      const newEquipment = existing.quantity <= 1
        ? prev.purchasedEquipment.filter((e) => e.itemId !== itemId)
        : prev.purchasedEquipment.map((e) => e.itemId === itemId ? { ...e, quantity: e.quantity - 1 } : e)
      return { ...prev, purchasedEquipment: newEquipment }
    })
  }

  const adjustGold = (amount: number): void => {
    updateAndSave((prev) => ({ ...prev, goldRemaining: prev.goldRemaining + amount }))
  }

  const useFocusPoint = (): void => {
    updateAndSave((prev) => {
      if (prev.focusPointsUsed >= maxFocusPoints) return prev
      return { ...prev, focusPointsUsed: prev.focusPointsUsed + 1 }
    })
  }

  const restoreFocusPoint = (): void => {
    updateAndSave((prev) => {
      if (prev.focusPointsUsed <= 0) return prev
      return { ...prev, focusPointsUsed: prev.focusPointsUsed - 1 }
    })
  }

  const useSpellSlot = (level: number): void => {
    updateAndSave((prev) => {
      const maxForLevel = maxSpellSlots[level - 1] ?? 0
      const used = prev.spellSlotsUsed[level] ?? 0
      if (used >= maxForLevel) return prev
      return { ...prev, spellSlotsUsed: { ...prev.spellSlotsUsed, [level]: used + 1 } }
    })
  }

  const restoreSpellSlot = (level: number): void => {
    updateAndSave((prev) => {
      const used = prev.spellSlotsUsed[level] ?? 0
      if (used <= 0) return prev
      return { ...prev, spellSlotsUsed: { ...prev.spellSlotsUsed, [level]: used - 1 } }
    })
  }

  const conditionSelectData = allConditions.map((c) => ({ value: c.id, label: c.name }))
  const conditionDisplayName = (c: string): string => {
    const parts = c.split(':')
    const cond = allConditions.find((ac) => ac.id === parts[0])
    const name = cond?.name ?? parts[0]
    return parts[1] ? `${name} ${parts[1]}` : name
  }

  const sectionStyle = {
    background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
    border: '1px solid #4a3828',
    padding: 20
  }

  const equipCategories: { key: EquipmentCategory; label: string }[] = [
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
    { key: 'talisman', label: 'Talismans' }
  ]

  const purchasedItems = character.purchasedEquipment.map((p) => ({
    ...p,
    item: allEquipment.find((e) => e.id === p.itemId)
  }))

  return (
    <Box style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #120d06 0%, #1a1209 50%, #120d06 100%)' }}>
      {/* Header bar */}
      <Box py="sm" px="md" style={{ borderBottom: '1px solid #4a3828', background: 'linear-gradient(180deg, #241c14, #1e1610)' }}>
        <Group justify="space-between">
          <Group gap="md">
            <Button
              variant="subtle"
              onClick={() => navigate(`/campaign/${campaignId}`)}
              size="sm"
              style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}
            >
              &#9664; Back to Campaign
            </Button>
            <Title order={4} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
              {character.name || 'Unnamed Character'}
            </Title>
            <Badge style={{ background: '#5a3d1e', color: '#f0c75e', fontFamily: '"Cinzel", serif' }} size="sm">
              DM View
            </Badge>
          </Group>
          <Group gap="sm">
            {saveStatus === 'saving' && (
              <Badge size="sm" style={{ background: '#2d4a5a', color: '#82b8df', fontFamily: '"Cinzel", serif' }}>
                Saving...
              </Badge>
            )}
            {saveStatus === 'saved' && (
              <Badge size="sm" style={{ background: '#2d5a27', color: '#8fdf82', fontFamily: '"Cinzel", serif' }}>
                Saved
              </Badge>
            )}
            {saveStatus === 'error' && (
              <Badge size="sm" style={{ background: '#5a2727', color: '#df8282', fontFamily: '"Cinzel", serif' }}>
                Save failed
              </Badge>
            )}
          </Group>
        </Group>
      </Box>

      <Container size="xl" py="md">
        <Stack gap="md">
          {/* Character Identity (read-only) */}
          <Box style={sectionStyle}>
            <Group gap="lg" align="flex-start">
              {character.portraitBase64 && (
                <Box className="portrait-container" style={{ cursor: 'default' }}>
                  <img src={character.portraitBase64} alt="Portrait" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </Box>
              )}
              <Stack gap="xs" style={{ flex: 1 }}>
                <Title order={2} style={{ fontFamily: '"Cinzel", serif', color: '#f0c75e' }}>
                  {character.name || 'Unnamed Character'}
                </Title>
                <Group gap="xs">
                  {ancestry && <Badge className="badge-muted" size="lg">{ancestry.name}{heritage ? ` (${heritage.name})` : ''}</Badge>}
                  {background && <Badge className="badge-muted" size="lg">{background.name}</Badge>}
                  {cls && <Badge className="badge-muted" size="lg">{cls.name}</Badge>}
                </Group>
                <Group gap="md">
                  {character.alignment && (
                    <Text size="sm" style={{ color: '#8b7355' }}>
                      <Text span fw={600} style={{ color: '#c4a96a' }}>Alignment:</Text> {character.alignment}
                    </Text>
                  )}
                  {character.deity && (
                    <Text size="sm" style={{ color: '#8b7355' }}>
                      <Text span fw={600} style={{ color: '#c4a96a' }}>Deity:</Text> {character.deity}
                    </Text>
                  )}
                </Group>
              </Stack>
              <Badge className="badge-boost" size="xl">Level {character.level}</Badge>
            </Group>
          </Box>

          {/* ===== DM EDITABLE: Combat Stats ===== */}
          <Title order={3} style={{ fontFamily: '"Cinzel", serif', color: '#f0c75e', borderBottom: '2px solid #5a3d1e', paddingBottom: 8 }}>
            DM Controls
          </Title>

          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="md">
            {/* HP Tracker */}
            <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
              <Stack align="center" gap="xs">
                <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Hit Points</Text>
                <Group gap={4} justify="center" align="baseline">
                  <Text fw={700} className={hpColorClass} style={{ fontFamily: '"Cinzel", serif', fontSize: '1.8rem' }}>
                    {character.currentHP}
                  </Text>
                  <Text size="sm" style={{ color: '#5c4a35' }}>/ {maxHP}</Text>
                </Group>
                {character.tempHP > 0 && <Badge className="badge-condition" size="sm">+{character.tempHP} temp</Badge>}
                <Group gap={4} justify="center">
                  <Button size="xs" variant="outline" className="hp-adjust-btn damage" onClick={() => adjustHP(-5)}>-5</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn damage" onClick={() => adjustHP(-1)}>-1</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn heal" onClick={() => adjustHP(1)}>+1</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn heal" onClick={() => adjustHP(5)}>+5</Button>
                </Group>
                <Group gap={4} justify="center">
                  <NumberInput size="xs" placeholder="Dmg/Heal" value={customDamage} onChange={setCustomDamage} style={{ width: 80 }} />
                  <Button size="xs" variant="outline" className="hp-adjust-btn damage"
                    onClick={() => { if (typeof customDamage === 'number' && customDamage > 0) { adjustHP(-customDamage); setCustomDamage('') } }}>Dmg</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn heal"
                    onClick={() => { if (typeof customDamage === 'number' && customDamage > 0) { adjustHP(customDamage); setCustomDamage('') } }}>Heal</Button>
                </Group>
                <Group gap={4} justify="center" align="center">
                  <Text size="xs" style={{ color: '#5c4a35' }}>Temp HP:</Text>
                  <NumberInput size="xs" value={character.tempHP} onChange={(val) => setTempHP(typeof val === 'number' ? val : 0)} min={0} style={{ width: 60 }} />
                </Group>
              </Stack>
            </Box>

            {/* Hero Points */}
            <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
              <Stack align="center" gap="xs">
                <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Hero Points</Text>
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

            {/* Gold */}
            <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
              <Stack align="center" gap="xs">
                <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Gold</Text>
                <Text fw={700} size="xl" style={{ fontFamily: '"Cinzel", serif', color: character.goldRemaining < 0 ? '#a04040' : '#f0c75e' }}>
                  {formatPrice(character.goldRemaining)}
                </Text>
                <Group gap={4} justify="center">
                  <Button size="xs" variant="outline" className="hp-adjust-btn damage" onClick={() => adjustGold(-100)}>-1gp</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn damage" onClick={() => adjustGold(-10)}>-1sp</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn heal" onClick={() => adjustGold(10)}>+1sp</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn heal" onClick={() => adjustGold(100)}>+1gp</Button>
                </Group>
                <Group gap={4} justify="center">
                  <NumberInput size="xs" placeholder="gp" value={goldInput} onChange={setGoldInput} style={{ width: 70 }} />
                  <Button size="xs" variant="outline" className="hp-adjust-btn heal"
                    onClick={() => { if (typeof goldInput === 'number' && goldInput > 0) { adjustGold(goldInput * 100); setGoldInput('') } }}>+gp</Button>
                  <Button size="xs" variant="outline" className="hp-adjust-btn damage"
                    onClick={() => { if (typeof goldInput === 'number' && goldInput > 0) { adjustGold(-goldInput * 100); setGoldInput('') } }}>-gp</Button>
                </Group>
              </Stack>
            </Box>

            {/* Focus Points (casters) */}
            {cls?.isSpellcaster && maxFocusPoints > 0 && (
              <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
                <Stack align="center" gap="xs">
                  <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Focus Points</Text>
                  <Group gap="xs" justify="center">
                    {Array.from({ length: maxFocusPoints }).map((_, i) => (
                      <Box
                        key={i}
                        className={`spell-slot ${i < maxFocusPoints - character.focusPointsUsed ? 'available' : 'used'}`}
                        onClick={() => {
                          if (i < maxFocusPoints - character.focusPointsUsed) useFocusPoint()
                          else restoreFocusPoint()
                        }}
                      />
                    ))}
                  </Group>
                </Stack>
              </Box>
            )}
          </SimpleGrid>

          {/* Conditions */}
          <Box style={sectionStyle}>
            <Group justify="space-between" mb="xs">
              <Text fw={600} size="sm" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Conditions</Text>
            </Group>
            <Group gap="xs" mb="sm">
              {character.conditions.length === 0 && <Text size="sm" style={{ color: '#5c4a35' }}>No active conditions</Text>}
              {character.conditions.map((c) => (
                <Badge key={c} className="badge-condition" size="lg" rightSection={
                  <ActionIcon size="xs" variant="transparent" onClick={() => removeCondition(c)} style={{ color: '#7b9ec9' }}>&#10005;</ActionIcon>
                }>
                  {conditionDisplayName(c)}
                </Badge>
              ))}
            </Group>
            <Group gap="xs">
              <Select placeholder="Add condition..." data={conditionSelectData} value={conditionSelect} onChange={setConditionSelect} searchable clearable size="xs" style={{ width: 200 }} />
              <Button size="xs" variant="outline" className="hp-adjust-btn" disabled={!conditionSelect}
                onClick={() => {
                  if (conditionSelect) {
                    const cond = allConditions.find((c) => c.id === conditionSelect)
                    addCondition(cond?.hasValue ? `${conditionSelect}:1` : conditionSelect)
                    setConditionSelect(null)
                  }
                }}>Add</Button>
            </Group>
          </Box>

          {/* Spell Slots (casters) */}
          {cls?.isSpellcaster && maxSpellSlots.length > 0 && (
            <Box style={sectionStyle}>
              <Text fw={600} size="sm" mb="sm" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Spell Slots</Text>
              <Stack gap="xs">
                {maxSpellSlots.map((maxSlots, idx) => {
                  const spellLevel = idx + 1
                  const used = character.spellSlotsUsed[spellLevel] ?? 0
                  const remaining = maxSlots - used
                  return (
                    <Group key={spellLevel} gap="sm">
                      <Text size="sm" fw={600} style={{ color: '#8b7355', width: 60 }}>Level {spellLevel}</Text>
                      <Group gap={4}>
                        {Array.from({ length: maxSlots }).map((_, i) => (
                          <Box key={i} className={`spell-slot ${i < remaining ? 'available' : 'used'}`}
                            onClick={() => { if (i < remaining) useSpellSlot(spellLevel); else restoreSpellSlot(spellLevel) }} />
                        ))}
                      </Group>
                      <Text size="xs" style={{ color: '#5c4a35' }}>{remaining}/{maxSlots}</Text>
                    </Group>
                  )
                })}
              </Stack>
            </Box>
          )}

          {/* Equipment Management */}
          <Box style={sectionStyle}>
            <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
              Equipment (Give/Remove Items)
            </Title>
            {purchasedItems.length > 0 && (
              <Box mb="md">
                <Text size="sm" fw={600} mb="xs" style={{ color: '#c4a96a' }}>Current Inventory</Text>
                <Table>
                  <Table.Thead>
                    <Table.Tr><Table.Th>Item</Table.Th><Table.Th>Qty</Table.Th><Table.Th>Bulk</Table.Th><Table.Th></Table.Th></Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {purchasedItems.map((p) => p.item && (
                      <Table.Tr key={p.itemId}>
                        <Table.Td><Text size="sm" style={{ color: '#e8d5a3' }}>{p.item.name}</Text></Table.Td>
                        <Table.Td><Text size="sm" style={{ color: '#c4a96a' }}>{p.quantity}</Text></Table.Td>
                        <Table.Td><Text size="sm" style={{ color: '#8b7355' }}>{formatBulk(p.item.bulk)}</Text></Table.Td>
                        <Table.Td>
                          <Group gap="xs">
                            <ActionIcon size="sm" variant="subtle" onClick={() => addEquipmentDM(p.itemId)} style={{ color: '#d4a843' }}>+</ActionIcon>
                            <ActionIcon size="sm" variant="subtle" onClick={() => removeEquipmentDM(p.itemId)} style={{ color: '#a04040' }}>-</ActionIcon>
                          </Group>
                        </Table.Td>
                      </Table.Tr>
                    ))}
                  </Table.Tbody>
                </Table>
              </Box>
            )}

            <Text size="sm" fw={600} mb="xs" style={{ color: '#c4a96a' }}>Give Items</Text>
            <Tabs defaultValue="weapon">
              <Tabs.List mb="md">
                {equipCategories.map((cat) => <Tabs.Tab key={cat.key} value={cat.key}>{cat.label}</Tabs.Tab>)}
              </Tabs.List>
              {equipCategories.map((cat) => {
                const items = allEquipment.filter((e) => e.category === cat.key)
                return (
                  <Tabs.Panel key={cat.key} value={cat.key}>
                    <Table>
                      <Table.Thead>
                        <Table.Tr><Table.Th>Item</Table.Th><Table.Th>Price</Table.Th><Table.Th>Bulk</Table.Th><Table.Th></Table.Th></Table.Tr>
                      </Table.Thead>
                      <Table.Tbody>
                        {items.map((item) => (
                          <Table.Tr key={item.id}>
                            <Table.Td>
                              <Stack gap={0}>
                                <Text size="sm" fw={500} style={{ color: '#e8d5a3' }}>{item.name}</Text>
                                {item.damage && <Text size="xs" style={{ color: '#5c4a35' }}>{item.damage} {item.damageType}</Text>}
                                {item.acBonus !== undefined && <Text size="xs" style={{ color: '#5c4a35' }}>AC +{item.acBonus}</Text>}
                              </Stack>
                            </Table.Td>
                            <Table.Td><Text size="sm" style={{ color: '#d4a843' }}>{formatPrice(item.price)}</Text></Table.Td>
                            <Table.Td><Text size="sm" style={{ color: '#8b7355' }}>{formatBulk(item.bulk)}</Text></Table.Td>
                            <Table.Td>
                              <Button size="xs" variant="outline" onClick={() => addEquipmentDM(item.id)}
                                style={{ borderColor: '#9a7b2f', color: '#f0c75e', fontFamily: '"Cinzel", serif' }}>Give</Button>
                            </Table.Td>
                          </Table.Tr>
                        ))}
                      </Table.Tbody>
                    </Table>
                  </Tabs.Panel>
                )
              })}
            </Tabs>
          </Box>

          {/* ===== READ-ONLY: Character Stats ===== */}
          <Title order={3} style={{ fontFamily: '"Cinzel", serif', color: '#8b7355', borderBottom: '1px solid #3a2a1a', paddingBottom: 8 }}>
            Character Sheet (Read Only)
          </Title>

          {/* Ability Scores */}
          <Box style={sectionStyle}>
            <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>Ability Scores</Title>
            <SimpleGrid cols={6} spacing="sm">
              {ALL_ABILITIES.map((ability) => {
                const score = scores[ability]
                const mod = gameSystem.calculateModifier(score)
                return (
                  <Box key={ability} style={{ textAlign: 'center', padding: 8, border: '1px solid #4a3828', background: 'rgba(30, 22, 16, 0.5)' }}>
                    <Stack align="center" gap="xs">
                      <Text size="xs" fw={600} tt="uppercase" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>
                        {ABILITY_NAMES[ability].slice(0, 3)}
                      </Text>
                      <Text fw={700} size="lg" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>{score}</Text>
                      <Badge className={mod >= 0 ? 'badge-boost' : 'badge-flaw'} size="sm">{mod >= 0 ? '+' : ''}{mod}</Badge>
                    </Stack>
                  </Box>
                )
              })}
            </SimpleGrid>
          </Box>

          {/* AC, Perception, Saves */}
          <SimpleGrid cols={{ base: 2, sm: 5 }} spacing="md">
            <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
              <Stack align="center" gap="xs">
                <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>AC</Text>
                <Text fw={700} size="xl" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>{gameSystem.calculateAC(character)}</Text>
              </Stack>
            </Box>
            <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
              <Stack align="center" gap="xs">
                <Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Perception</Text>
                <Text fw={700} size="xl" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>
                  {gameSystem.calculatePerception(character) >= 0 ? '+' : ''}{gameSystem.calculatePerception(character)}
                </Text>
              </Stack>
            </Box>
            {(['fortitude', 'reflex', 'will'] as const).map((save) => {
              const val = gameSystem.calculateSavingThrow(character, save)
              return (
                <Box key={save} style={{ ...sectionStyle, textAlign: 'center' as const }}>
                  <Stack align="center" gap="xs">
                    <Text size="sm" fw={600} tt="capitalize" style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>{save}</Text>
                    <Text fw={700} size="xl" style={{ color: '#e8d5a3', fontFamily: '"Cinzel", serif' }}>{val >= 0 ? '+' : ''}{val}</Text>
                  </Stack>
                </Box>
              )
            })}
          </SimpleGrid>

          {/* Skills */}
          <Box style={sectionStyle}>
            <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>Skills</Title>
            <SimpleGrid cols={{ base: 2, sm: 3, md: 4 }} spacing="xs">
              {allSkills.map((skill) => {
                const trained = character.skillTraining.includes(skill.id)
                const abilityMod = gameSystem.calculateModifier(scores[skill.ability])
                const total = trained ? abilityMod + 2 + character.level : abilityMod
                return (
                  <Group key={skill.id} justify="space-between" gap="xs" style={{ padding: '4px 8px' }}>
                    <Text size="sm" fw={trained ? 600 : 400} style={{ fontFamily: '"Cinzel", serif', color: trained ? '#e8d5a3' : '#5c4a35', fontSize: '0.75rem' }}>
                      {skill.name}
                    </Text>
                    <Badge className={trained ? 'badge-boost' : 'badge-muted'} size="sm">{total >= 0 ? '+' : ''}{total}</Badge>
                  </Group>
                )
              })}
            </SimpleGrid>
          </Box>

          {/* Feats */}
          <Box style={sectionStyle}>
            <Title order={4} mb="md" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>Feats</Title>
            <Stack gap="sm">
              {character.selectedFeats.ancestryFeats.length > 0 && (
                <Group gap="xs"><Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Ancestry:</Text>
                  {character.selectedFeats.ancestryFeats.map((id) => <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>)}
                </Group>
              )}
              {character.selectedFeats.classFeats.length > 0 && (
                <Group gap="xs"><Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Class:</Text>
                  {character.selectedFeats.classFeats.map((id) => <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>)}
                </Group>
              )}
              {character.selectedFeats.generalFeats.length > 0 && (
                <Group gap="xs"><Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>General:</Text>
                  {character.selectedFeats.generalFeats.map((id) => <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>)}
                </Group>
              )}
              {character.selectedFeats.skillFeats.length > 0 && (
                <Group gap="xs"><Text size="sm" fw={600} style={{ color: '#c4a96a', fontFamily: '"Cinzel", serif' }}>Skill:</Text>
                  {character.selectedFeats.skillFeats.map((id) => <Badge key={id} className="badge-muted">{getFeatName(id)}</Badge>)}
                </Group>
              )}
            </Stack>
          </Box>

          {/* Notes */}
          {character.notes && (
            <Box style={sectionStyle}>
              <Title order={4} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>Character Notes</Title>
              <Text size="sm" style={{ whiteSpace: 'pre-wrap', color: '#8b7355', fontFamily: '"Crimson Text", serif' }}>{character.notes}</Text>
            </Box>
          )}
        </Stack>
      </Container>
    </Box>
  )
}
