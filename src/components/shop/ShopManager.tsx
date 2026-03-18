import { useState, useEffect } from 'react'
import {
  Box, Stack, Title, Text, Group, Button, TextInput, Textarea,
  Switch, Modal, Table, ActionIcon, Select, NumberInput, Badge,
  Tabs, Collapse, Loader, Center
} from '@mantine/core'
import { useShopStore } from '../../stores/shopStore'
import { CampaignShop, Equipment, EquipmentCategory } from '../../types'
import { getDefaultGameSystem } from '../../../game-systems'

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
  { key: 'talisman', label: 'Talismans' },
]

function ShopCard({ shop, campaignId }: { shop: CampaignShop; campaignId: string }) {
  const { toggleVisibility, deleteShop, addItemToShop, removeItemFromShop, updateShopItemStock, updateShopItemPrice, updateShop } = useShopStore()
  const [expanded, setExpanded] = useState(false)
  const [showItemPicker, setShowItemPicker] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editName, setEditName] = useState(shop.name)
  const [editDesc, setEditDesc] = useState(shop.description)
  const [searchQuery, setSearchQuery] = useState('')

  const gs = getDefaultGameSystem()
  const allEquipment = gs.getEquipment()

  const inventoryItems = shop.inventory.map((inv) => ({
    ...inv,
    item: allEquipment.find((e) => e.id === inv.itemId),
  }))

  const handleSaveEdit = async () => {
    await updateShop(shop.id, { name: editName, description: editDesc })
    setEditing(false)
  }

  return (
    <Box style={sectionStyle}>
      <Group justify="space-between" mb="sm">
        <Group>
          {editing ? (
            <Group>
              <TextInput
                value={editName}
                onChange={(e) => setEditName(e.currentTarget.value)}
                size="sm"
                styles={{ input: { background: '#1a1209', color: '#e8d5a3', borderColor: '#4a3828' } }}
              />
              <Button size="xs" onClick={handleSaveEdit} style={{ background: '#9a7b2f', color: '#120d06' }}>Save</Button>
              <Button size="xs" variant="subtle" onClick={() => setEditing(false)} style={{ color: '#8b7355' }}>Cancel</Button>
            </Group>
          ) : (
            <Group>
              <Title order={4} style={{ fontFamily: '"Cinzel", serif', color: '#e8d5a3', cursor: 'pointer' }} onClick={() => setExpanded(!expanded)}>
                {shop.name}
              </Title>
              <ActionIcon variant="subtle" size="sm" onClick={() => { setEditName(shop.name); setEditDesc(shop.description); setEditing(true) }} style={{ color: '#8b7355' }}>
                ✎
              </ActionIcon>
            </Group>
          )}
        </Group>
        <Group>
          <Switch
            label={shop.isVisible ? 'Open' : 'Closed'}
            checked={shop.isVisible}
            onChange={(e) => toggleVisibility(shop.id, e.currentTarget.checked)}
            styles={{
              label: { color: shop.isVisible ? '#6abf69' : '#a04040', fontFamily: '"Cinzel", serif', fontSize: '0.8rem' },
            }}
          />
          <Badge color={shop.isVisible ? 'green' : 'red'} variant="dot">
            {shop.inventory.length} items
          </Badge>
          <ActionIcon variant="subtle" size="sm" onClick={() => deleteShop(shop.id)} style={{ color: '#a04040' }}>
            ✕
          </ActionIcon>
        </Group>
      </Group>

      {editing && (
        <Textarea
          value={editDesc}
          onChange={(e) => setEditDesc(e.currentTarget.value)}
          placeholder="Shop description..."
          mb="sm"
          styles={{ input: { background: '#1a1209', color: '#e8d5a3', borderColor: '#4a3828' } }}
        />
      )}

      {shop.description && !editing && (
        <Text size="sm" style={{ color: '#8b7355' }} mb="sm">{shop.description}</Text>
      )}

      <Collapse in={expanded}>
        <Stack gap="sm" mt="sm">
          {/* Current shop inventory */}
          {inventoryItems.length > 0 && (
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
                {inventoryItems.map((inv) => inv.item && (
                  <Table.Tr key={inv.itemId}>
                    <Table.Td>
                      <Text size="sm" style={{ color: '#e8d5a3' }}>{inv.item.name}</Text>
                    </Table.Td>
                    <Table.Td>
                      <Group gap="xs">
                        <NumberInput
                          size="xs"
                          w={80}
                          min={0}
                          value={inv.customPrice ?? inv.item.price}
                          onChange={(val) => {
                            const newPrice = val as number
                            updateShopItemPrice(shop.id, inv.itemId, newPrice === inv.item!.price ? null : newPrice)
                          }}
                          styles={{ input: { background: '#1a1209', color: '#d4a843', borderColor: '#4a3828' } }}
                        />
                        <Text size="xs" style={{ color: '#5c4a35' }}>cp</Text>
                        {inv.customPrice !== null && inv.customPrice !== inv.item.price && (
                          <ActionIcon
                            variant="subtle"
                            size="xs"
                            onClick={() => updateShopItemPrice(shop.id, inv.itemId, null)}
                            title="Reset to default price"
                            style={{ color: '#8b7355' }}
                          >
                            ↺
                          </ActionIcon>
                        )}
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <Group gap="xs">
                        <Select
                          size="xs"
                          w={110}
                          value={inv.stock === null ? 'unlimited' : 'limited'}
                          data={[
                            { value: 'unlimited', label: 'Unlimited' },
                            { value: 'limited', label: 'Limited' },
                          ]}
                          onChange={(val) => {
                            if (val === 'unlimited') {
                              updateShopItemStock(shop.id, inv.itemId, null)
                            } else {
                              updateShopItemStock(shop.id, inv.itemId, 5)
                            }
                          }}
                          styles={{ input: { background: '#1a1209', color: '#e8d5a3', borderColor: '#4a3828', fontSize: '0.75rem' } }}
                        />
                        {inv.stock !== null && (
                          <NumberInput
                            size="xs"
                            w={60}
                            min={0}
                            value={inv.stock}
                            onChange={(val) => updateShopItemStock(shop.id, inv.itemId, val as number)}
                            styles={{ input: { background: '#1a1209', color: '#e8d5a3', borderColor: '#4a3828' } }}
                          />
                        )}
                      </Group>
                    </Table.Td>
                    <Table.Td>
                      <ActionIcon variant="subtle" size="sm" onClick={() => removeItemFromShop(shop.id, inv.itemId)} style={{ color: '#a04040' }}>
                        ✕
                      </ActionIcon>
                    </Table.Td>
                  </Table.Tr>
                ))}
              </Table.Tbody>
            </Table>
          )}

          <Button
            size="sm"
            variant="outline"
            onClick={() => setShowItemPicker(!showItemPicker)}
            style={{ borderColor: '#9a7b2f', color: '#f0c75e', fontFamily: '"Cinzel", serif' }}
          >
            {showItemPicker ? 'Hide Item Catalog' : 'Add Items to Shop'}
          </Button>

          {/* Item picker */}
          <Collapse in={showItemPicker}>
            <Box style={{ ...sectionStyle, border: '1px solid #3a2e1e' }}>
              <TextInput
                placeholder="Search items..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.currentTarget.value)}
                mb="sm"
                styles={{ input: { background: '#1a1209', color: '#e8d5a3', borderColor: '#4a3828' } }}
              />
              <Tabs defaultValue="weapon">
                <Tabs.List mb="sm" style={{ flexWrap: 'wrap' }}>
                  {categories.map((cat) => (
                    <Tabs.Tab key={cat.key} value={cat.key} style={{ fontSize: '0.75rem' }}>
                      {cat.label}
                    </Tabs.Tab>
                  ))}
                </Tabs.List>

                {categories.map((cat) => {
                  const existingIds = new Set(shop.inventory.map((i) => i.itemId))
                  const items = allEquipment
                    .filter((e) => e.category === cat.key)
                    .filter((e) => !existingIds.has(e.id))
                    .filter((e) =>
                      !searchQuery || e.name.toLowerCase().includes(searchQuery.toLowerCase())
                    )
                  return (
                    <Tabs.Panel key={cat.key} value={cat.key}>
                      {items.length === 0 ? (
                        <Text size="sm" style={{ color: '#5c4a35' }}>
                          {existingIds.size > 0 ? 'All items in this category are already in the shop.' : 'No items in this category.'}
                        </Text>
                      ) : (
                        <Table>
                          <Table.Thead>
                            <Table.Tr>
                              <Table.Th style={{ color: '#8b7355' }}>Item</Table.Th>
                              <Table.Th style={{ color: '#8b7355' }}>Price</Table.Th>
                              <Table.Th style={{ color: '#8b7355' }}></Table.Th>
                            </Table.Tr>
                          </Table.Thead>
                          <Table.Tbody>
                            {items.map((item) => (
                              <Table.Tr key={item.id}>
                                <Table.Td>
                                  <Stack gap={0}>
                                    <Text size="sm" style={{ color: '#e8d5a3' }}>{item.name}</Text>
                                    {item.effect && (
                                      <Text size="xs" style={{ color: '#5c4a35' }}>{item.effect}</Text>
                                    )}
                                  </Stack>
                                </Table.Td>
                                <Table.Td>
                                  <Text size="sm" style={{ color: '#d4a843' }}>{formatPrice(item.price)}</Text>
                                </Table.Td>
                                <Table.Td>
                                  <Button
                                    size="xs"
                                    variant="outline"
                                    onClick={() => addItemToShop(shop.id, item.id, null)}
                                    style={{ borderColor: '#9a7b2f', color: '#f0c75e', fontFamily: '"Cinzel", serif' }}
                                  >
                                    Add
                                  </Button>
                                </Table.Td>
                              </Table.Tr>
                            ))}
                          </Table.Tbody>
                        </Table>
                      )}
                    </Tabs.Panel>
                  )
                })}
              </Tabs>
            </Box>
          </Collapse>
        </Stack>
      </Collapse>

      {!expanded && (
        <Button
          size="xs"
          variant="subtle"
          onClick={() => setExpanded(true)}
          style={{ color: '#8b7355' }}
        >
          Click to expand
        </Button>
      )}
    </Box>
  )
}

export function ShopManager({ campaignId }: { campaignId: string }) {
  const { shops, loading, loadShops, createShop } = useShopStore()
  const [showCreate, setShowCreate] = useState(false)
  const [newName, setNewName] = useState('')
  const [newDesc, setNewDesc] = useState('')

  useEffect(() => {
    loadShops(campaignId)
  }, [campaignId, loadShops])

  const handleCreate = async () => {
    if (!newName.trim()) return
    await createShop(campaignId, newName.trim(), newDesc.trim())
    setNewName('')
    setNewDesc('')
    setShowCreate(false)
  }

  if (loading && shops.length === 0) {
    return <Center py="xl"><Loader color="#c4a96a" /></Center>
  }

  return (
    <Stack gap="md">
      <Group justify="space-between">
        <Title order={3} style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>
          Shops & Markets
        </Title>
        <Button
          onClick={() => setShowCreate(true)}
          style={{ background: '#9a7b2f', color: '#120d06', fontFamily: '"Cinzel", serif' }}
        >
          + Create Shop
        </Button>
      </Group>

      {shops.length === 0 && (
        <Box style={sectionStyle}>
          <Text style={{ color: '#8b7355', textAlign: 'center' }}>
            No shops yet. Create a shop and stock it with items for your players to browse.
          </Text>
        </Box>
      )}

      {shops.map((shop) => (
        <ShopCard key={shop.id} shop={shop} campaignId={campaignId} />
      ))}

      <Modal
        opened={showCreate}
        onClose={() => setShowCreate(false)}
        title={<Text style={{ fontFamily: '"Cinzel", serif', color: '#c4a96a' }}>Create New Shop</Text>}
        styles={{
          content: { background: '#1a1209', border: '1px solid #4a3828' },
          header: { background: '#1a1209' },
        }}
      >
        <Stack>
          <TextInput
            label="Shop Name"
            placeholder="e.g. The Golden Anvil, Potions & Elixirs"
            value={newName}
            onChange={(e) => setNewName(e.currentTarget.value)}
            styles={{
              input: { background: '#241c14', color: '#e8d5a3', borderColor: '#4a3828' },
              label: { color: '#c4a96a' },
            }}
          />
          <Textarea
            label="Description (optional)"
            placeholder="A brief description of the shop..."
            value={newDesc}
            onChange={(e) => setNewDesc(e.currentTarget.value)}
            styles={{
              input: { background: '#241c14', color: '#e8d5a3', borderColor: '#4a3828' },
              label: { color: '#c4a96a' },
            }}
          />
          <Group justify="flex-end">
            <Button variant="subtle" onClick={() => setShowCreate(false)} style={{ color: '#8b7355' }}>
              Cancel
            </Button>
            <Button
              onClick={handleCreate}
              disabled={!newName.trim()}
              style={{ background: '#9a7b2f', color: '#120d06', fontFamily: '"Cinzel", serif' }}
            >
              Create
            </Button>
          </Group>
        </Stack>
      </Modal>
    </Stack>
  )
}
