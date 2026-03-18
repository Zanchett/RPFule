import { useState, useEffect } from 'react'
import {
  Box, Stack, Title, Text, Group, Button, Table, Tabs, Badge,
  Select, Loader, Center, Modal
} from '@mantine/core'
import { useShopStore } from '../../stores/shopStore'
import { CampaignShop, Character, EquipmentCategory, Equipment } from '../../types'
import { getGameSystem, getDefaultGameSystem } from '../../../game-systems'
import * as api from '../../lib/api'

const sectionStyle = {
  background: 'linear-gradient(145deg, #241c14 0%, #1e1610 100%)',
  border: '1px solid #4a3828',
  padding: 20,
}

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

const shopCategories: { key: EquipmentCategory; label: string }[] = [
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

function ShopView({
  shop,
  character,
  onCharacterUpdate,
}: {
  shop: CampaignShop
  character: Character
  onCharacterUpdate: (c: Character) => void
}) {
  const { buyItem, sellItem } = useShopStore()
  const [buying, setBuying] = useState<string | null>(null)
  const [selling, setSelling] = useState<string | null>(null)
  const [message, setMessage] = useState<{ text: string; type: 'success' | 'error' } | null>(null)

  const gs = getGameSystem(character.gameSystemId) || getDefaultGameSystem()
  const allEquipment = gs.getEquipment()

  const shopItems = shop.inventory
    .map((inv) => ({
      ...inv,
      item: allEquipment.find((e) => e.id === inv.itemId),
    }))
    .filter((i) => i.item)

  // Group by category
  const availableCategories = shopCategories.filter((cat) =>
    shopItems.some((i) => i.item?.category === cat.key)
  )

  const handleBuy = async (itemId: string) => {
    setBuying(itemId)
    setMessage(null)
    try {
      const updated = await buyItem(shop.id, character, itemId, 1)
      onCharacterUpdate(updated)
      const item = allEquipment.find((e) => e.id === itemId)
      setMessage({ text: `Purchased ${item?.name}!`, type: 'success' })
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Purchase failed'
      setMessage({ text: errorMsg, type: 'error' })
    } finally {
      setBuying(null)
    }
  }

  const handleSell = async (itemId: string) => {
    setSelling(itemId)
    setMessage(null)
    try {
      const updated = await sellItem(shop.id, character, itemId, 1)
      onCharacterUpdate(updated)
      const item = allEquipment.find((e) => e.id === itemId)
      setMessage({ text: `Sold ${item?.name}!`, type: 'success' })
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : 'Sale failed'
      setMessage({ text: errorMsg, type: 'error' })
    } finally {
      setSelling(null)
    }
  }

  const playerItems = character.purchasedEquipment
    .map((p) => ({
      ...p,
      item: allEquipment.find((e) => e.id === p.itemId),
    }))
    .filter((p) => p.item)

  return (
    <Stack gap="md">
      {/* Gold display */}
      <Box style={{ ...sectionStyle, textAlign: 'center' as const }}>
        <Text size="sm" style={{ color: '#8b7355', fontFamily: '"Cinzel", serif' }}>Your Gold</Text>
        <Text fw={700} size="xl" style={{ fontFamily: '"Cinzel", serif', color: character.goldRemaining < 0 ? '#a04040' : '#f0c75e' }}>
          {formatPrice(character.goldRemaining)}
        </Text>
      </Box>

      {message && (
        <Text size="sm" style={{ color: message.type === 'success' ? '#6abf69' : '#a04040', textAlign: 'center' }}>
          {message.text}
        </Text>
      )}

      {shop.description && (
        <Text size="sm" style={{ color: '#8b7355', fontStyle: 'italic' }}>{shop.description}</Text>
      )}

      {/* Shop items by category */}
      {availableCategories.length > 0 ? (
        <Box style={sectionStyle}>
          <Title order={5} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>For Sale</Title>
          <Tabs defaultValue={availableCategories[0]?.key}>
            <Tabs.List mb="sm" style={{ flexWrap: 'wrap' }}>
              {availableCategories.map((cat) => (
                <Tabs.Tab key={cat.key} value={cat.key} style={{ fontSize: '0.75rem' }}>
                  {cat.label}
                </Tabs.Tab>
              ))}
            </Tabs.List>

            {availableCategories.map((cat) => {
              const items = shopItems.filter((i) => i.item?.category === cat.key)
              return (
                <Tabs.Panel key={cat.key} value={cat.key}>
                  <Table>
                    <Table.Thead>
                      <Table.Tr>
                        <Table.Th style={{ color: '#8b7355' }}>Item</Table.Th>
                        <Table.Th style={{ color: '#8b7355' }}>Price</Table.Th>
                        <Table.Th style={{ color: '#8b7355' }}>Stock</Table.Th>
                        <Table.Th style={{ color: '#8b7355' }}></Table.Th>
                      </Table.Tr>
                    </Table.Thead>
                    <Table.Tbody>
                      {items.map((si) => {
                        const price = si.customPrice ?? si.item!.price
                        const canAfford = character.goldRemaining >= price
                        const inStock = si.stock === null || si.stock > 0
                        return (
                          <Table.Tr key={si.itemId}>
                            <Table.Td>
                              <Stack gap={0}>
                                <Text size="sm" fw={500} style={{ color: '#e8d5a3' }}>{si.item!.name}</Text>
                                {si.item!.effect && (
                                  <Text size="xs" style={{ color: '#5c4a35' }}>{si.item!.effect}</Text>
                                )}
                                {si.item!.rarity && si.item!.rarity !== 'common' && (
                                  <Badge size="xs" variant="outline" color={si.item!.rarity === 'rare' ? 'blue' : 'yellow'} mt={2}>
                                    {si.item!.rarity}
                                  </Badge>
                                )}
                              </Stack>
                            </Table.Td>
                            <Table.Td>
                              <Text size="sm" style={{ color: '#d4a843' }}>{formatPrice(price)}</Text>
                            </Table.Td>
                            <Table.Td>
                              <Text size="sm" style={{ color: si.stock !== null && si.stock <= 0 ? '#a04040' : '#8b7355' }}>
                                {si.stock === null ? 'Unlimited' : si.stock}
                              </Text>
                            </Table.Td>
                            <Table.Td>
                              <Button
                                size="xs"
                                variant="outline"
                                onClick={() => handleBuy(si.itemId)}
                                disabled={!canAfford || !inStock || buying === si.itemId}
                                loading={buying === si.itemId}
                                style={{ borderColor: '#9a7b2f', color: '#f0c75e', fontFamily: '"Cinzel", serif' }}
                              >
                                Buy
                              </Button>
                            </Table.Td>
                          </Table.Tr>
                        )
                      })}
                    </Table.Tbody>
                  </Table>
                </Tabs.Panel>
              )
            })}
          </Tabs>
        </Box>
      ) : (
        <Box style={sectionStyle}>
          <Text style={{ color: '#5c4a35', textAlign: 'center' }}>This shop has no items for sale.</Text>
        </Box>
      )}

      {/* Sell items */}
      {playerItems.length > 0 && (
        <Box style={sectionStyle}>
          <Title order={5} mb="sm" style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
            Sell Your Items (50% value)
          </Title>
          <Table>
            <Table.Thead>
              <Table.Tr>
                <Table.Th style={{ color: '#8b7355' }}>Item</Table.Th>
                <Table.Th style={{ color: '#8b7355' }}>Qty</Table.Th>
                <Table.Th style={{ color: '#8b7355' }}>Sell Price</Table.Th>
                <Table.Th style={{ color: '#8b7355' }}></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {playerItems.map((p) => (
                <Table.Tr key={p.itemId}>
                  <Table.Td>
                    <Text size="sm" style={{ color: '#e8d5a3' }}>{p.item!.name}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" style={{ color: '#c4a96a' }}>{p.quantity}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" style={{ color: '#d4a843' }}>
                      {formatPrice(Math.floor(p.item!.price * 0.5))}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Button
                      size="xs"
                      variant="outline"
                      color="red"
                      onClick={() => handleSell(p.itemId)}
                      loading={selling === p.itemId}
                      style={{ borderColor: '#8b4040', color: '#d47070', fontFamily: '"Cinzel", serif' }}
                    >
                      Sell 1
                    </Button>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </Box>
      )}
    </Stack>
  )
}

export function ShopBrowser({
  campaignId,
  characters,
}: {
  campaignId: string
  characters: Character[]
}) {
  const { shops, loading, loadShops, subscribeToShops } = useShopStore()
  const [selectedCharId, setSelectedCharId] = useState<string | null>(
    characters.length === 1 ? characters[0].id : null
  )
  const [openShop, setOpenShop] = useState<CampaignShop | null>(null)
  const [localCharacters, setLocalCharacters] = useState(characters)

  useEffect(() => {
    loadShops(campaignId)
    const unsub = subscribeToShops(campaignId)
    return unsub
  }, [campaignId, loadShops, subscribeToShops])

  useEffect(() => {
    setLocalCharacters(characters)
  }, [characters])

  const visibleShops = shops.filter((s) => s.isVisible)
  const selectedChar = localCharacters.find((c) => c.id === selectedCharId)

  const handleCharacterUpdate = (updated: Character) => {
    setLocalCharacters((prev) =>
      prev.map((c) => (c.id === updated.id ? updated : c))
    )
  }

  if (loading && shops.length === 0) {
    return <Center py="xl"><Loader color="#c4a96a" /></Center>
  }

  if (visibleShops.length === 0) {
    return (
      <Box style={sectionStyle}>
        <Text style={{ color: '#8b7355', textAlign: 'center' }}>
          No shops are currently available. The DM will open shops when you reach a market area.
        </Text>
      </Box>
    )
  }

  return (
    <Stack gap="md">
      <Title order={3} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
        Available Shops
      </Title>

      {/* Character selector */}
      {characters.length > 1 && (
        <Select
          label="Shopping with character"
          placeholder="Select a character"
          value={selectedCharId}
          onChange={setSelectedCharId}
          data={localCharacters.map((c) => ({
            value: c.id,
            label: `${c.name || 'Unnamed'} (${formatPrice(c.goldRemaining)} gold)`,
          }))}
          styles={{
            input: { background: '#1a1209', color: '#e8d5a3', borderColor: '#4a3828' },
            label: { color: '#c4a96a' },
          }}
        />
      )}

      {/* Shop cards */}
      {visibleShops.map((shop) => (
        <Box
          key={shop.id}
          style={{ ...sectionStyle, cursor: selectedChar ? 'pointer' : 'default' }}
          onClick={() => selectedChar && setOpenShop(shop)}
        >
          <Group justify="space-between">
            <Stack gap={2}>
              <Title order={4} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3' }}>
                {shop.name}
              </Title>
              {shop.description && (
                <Text size="sm" style={{ color: '#8b7355', fontStyle: 'italic' }}>{shop.description}</Text>
              )}
            </Stack>
            <Badge color="green" variant="outline">{shop.inventory.length} items</Badge>
          </Group>
          {!selectedChar && (
            <Text size="xs" mt="xs" style={{ color: '#a04040' }}>Select a character above to enter the shop</Text>
          )}
        </Box>
      ))}

      {/* Shop modal */}
      <Modal
        opened={!!openShop && !!selectedChar}
        onClose={() => setOpenShop(null)}
        title={<Text style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>{openShop?.name}</Text>}
        size="lg"
        styles={{
          content: { background: '#1a1209', border: '1px solid #4a3828' },
          header: { background: '#1a1209' },
        }}
      >
        {openShop && selectedChar && (
          <ShopView
            shop={openShop}
            character={selectedChar}
            onCharacterUpdate={handleCharacterUpdate}
          />
        )}
      </Modal>
    </Stack>
  )
}
