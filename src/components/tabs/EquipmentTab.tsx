import {
  Box,
  Title,
  Text,
  Stack,
  Group,
  Button,
  Table,
  Tabs,
  ActionIcon,
  Badge
} from '@mantine/core'
import { useCharacterStore } from '../../stores/characterStore'
import { Equipment, EquipmentCategory } from '../../types'

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

function EquipmentRow({
  item,
  onBuy,
  canAfford
}: {
  item: Equipment
  onBuy: () => void
  canAfford: boolean
}): JSX.Element {
  return (
    <Table.Tr>
      <Table.Td>
        <Stack gap={0}>
          <Text size="sm" fw={500} style={{ color: '#e8d5a3' }}>
            {item.name}
          </Text>
          {item.damage && (
            <Text size="xs" style={{ color: '#5c4a35' }}>
              {item.damage} {item.damageType}
              {item.traits && item.traits.length > 0 && ` (${item.traits.join(', ')})`}
              {item.range && ` - Range ${item.range} ft`}
            </Text>
          )}
          {item.acBonus !== undefined && (
            <Text size="xs" style={{ color: '#5c4a35' }}>
              AC +{item.acBonus}
              {item.dexCap !== undefined && `, Dex Cap +${item.dexCap}`}
              {item.checkPenalty ? `, Check Penalty ${item.checkPenalty}` : ''}
              {item.speedPenalty ? `, Speed Penalty −${Math.abs(item.speedPenalty)} ft` : ''}
            </Text>
          )}
          {item.effect && !item.damage && item.acBonus === undefined && (
            <Text size="xs" style={{ color: '#5c4a35' }}>{item.effect}</Text>
          )}
          {item.rarity && item.rarity !== 'common' && (
            <Badge size="xs" variant="outline" color={item.rarity === 'rare' ? 'blue' : item.rarity === 'unique' ? 'grape' : 'yellow'} mt={2}>
              {item.rarity}
            </Badge>
          )}
        </Stack>
      </Table.Td>
      <Table.Td>
        <Text size="sm" style={{ color: '#d4a843' }}>{formatPrice(item.price)}</Text>
      </Table.Td>
      <Table.Td>
        <Text size="sm" style={{ color: '#8b7355' }}>{formatBulk(item.bulk)}</Text>
      </Table.Td>
      <Table.Td>
        <Button
          size="xs"
          variant="outline"
          onClick={onBuy}
          disabled={!canAfford}
          style={{
            borderColor: '#9a7b2f',
            color: '#f0c75e',
            fontFamily: '"Cinzel", serif'
          }}
        >
          Buy
        </Button>
      </Table.Td>
    </Table.Tr>
  )
}

export function EquipmentTab(): JSX.Element {
  const { character, gameSystem, addEquipment, removeEquipment } = useCharacterStore()

  if (!character) return <></>

  const allEquipment = gameSystem.getEquipment()

  const categories: { key: EquipmentCategory; label: string }[] = [
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

  const totalBulk = purchasedItems.reduce((total, p) => {
    if (!p.item) return total
    const bulk = p.item.bulk === 'L' ? 0.1 : p.item.bulk
    return total + bulk * p.quantity
  }, 0)

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
        Equipment
      </Title>

      <Group gap="lg">
        <Box style={{ ...sectionStyle, textAlign: 'center' as const, minWidth: 130 }}>
          <Stack align="center" gap="xs">
            <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
              Gold Remaining
            </Text>
            <Text
              fw={700}
              size="xl"
              style={{
                fontFamily: '"Cinzel", serif',
                color: character.goldRemaining < 0 ? '#a04040' : '#f0c75e'
              }}
            >
              {formatPrice(character.goldRemaining)}
            </Text>
          </Stack>
        </Box>
        <Box style={{ ...sectionStyle, textAlign: 'center' as const, minWidth: 100 }}>
          <Stack align="center" gap="xs">
            <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
              Total Bulk
            </Text>
            <Text
              fw={700}
              size="xl"
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              {totalBulk.toFixed(1)}
            </Text>
          </Stack>
        </Box>
        <Box style={{ ...sectionStyle, textAlign: 'center' as const, minWidth: 80 }}>
          <Stack align="center" gap="xs">
            <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>
              Items
            </Text>
            <Text
              fw={700}
              size="xl"
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              {purchasedItems.reduce((sum, p) => sum + p.quantity, 0)}
            </Text>
          </Stack>
        </Box>
      </Group>

      {/* Purchased equipment */}
      {purchasedItems.length > 0 && (
        <Box style={sectionStyle}>
          <Stack gap="md">
            <Title
              order={4}
              style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}
            >
              Your Inventory
            </Title>
            <Table>
              <Table.Thead>
                <Table.Tr>
                  <Table.Th>Item</Table.Th>
                  <Table.Th>Qty</Table.Th>
                  <Table.Th>Bulk</Table.Th>
                  <Table.Th></Table.Th>
                </Table.Tr>
              </Table.Thead>
              <Table.Tbody>
                {purchasedItems.map(
                  (p) =>
                    p.item && (
                      <Table.Tr key={p.itemId}>
                        <Table.Td>
                          <Text size="sm" style={{ color: '#e8d5a3' }}>{p.item.name}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm" style={{ color: '#c4a96a' }}>{p.quantity}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Text size="sm" style={{ color: '#8b7355' }}>{formatBulk(p.item.bulk)}</Text>
                        </Table.Td>
                        <Table.Td>
                          <Group gap="xs">
                            <ActionIcon
                              size="sm"
                              variant="subtle"
                              onClick={() => addEquipment(p.itemId)}
                              disabled={character.goldRemaining < p.item.price}
                              style={{ color: '#d4a843' }}
                            >
                              +
                            </ActionIcon>
                            <ActionIcon
                              size="sm"
                              variant="subtle"
                              onClick={() => removeEquipment(p.itemId)}
                              style={{ color: '#a04040' }}
                            >
                              −
                            </ActionIcon>
                          </Group>
                        </Table.Td>
                      </Table.Tr>
                    )
                )}
              </Table.Tbody>
            </Table>
          </Stack>
        </Box>
      )}

      {/* Equipment shop */}
      <Box style={sectionStyle}>
        <Tabs defaultValue="weapon">
          <Tabs.List mb="md">
            {categories.map((cat) => (
              <Tabs.Tab key={cat.key} value={cat.key}>
                {cat.label}
              </Tabs.Tab>
            ))}
          </Tabs.List>

          {categories.map((cat) => {
            const items = allEquipment.filter((e) => e.category === cat.key)
            return (
              <Tabs.Panel key={cat.key} value={cat.key}>
                <Table>
                  <Table.Thead>
                    <Table.Tr>
                      <Table.Th>Item</Table.Th>
                      <Table.Th>Price</Table.Th>
                      <Table.Th>Bulk</Table.Th>
                      <Table.Th></Table.Th>
                    </Table.Tr>
                  </Table.Thead>
                  <Table.Tbody>
                    {items.map((item) => (
                      <EquipmentRow
                        key={item.id}
                        item={item}
                        onBuy={() => addEquipment(item.id)}
                        canAfford={character.goldRemaining >= item.price}
                      />
                    ))}
                  </Table.Tbody>
                </Table>
              </Tabs.Panel>
            )
          })}
        </Tabs>
      </Box>
    </Stack>
  )
}
