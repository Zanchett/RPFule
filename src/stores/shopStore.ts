import { create } from 'zustand'
import { supabase } from '../lib/supabase'
import { CampaignShop, ShopInventoryItem, Character } from '../types'
import * as shopApi from '../lib/shopApi'
import * as api from '../lib/api'
import { getGameSystem, getDefaultGameSystem } from '../../game-systems'
import { withRetry } from '../lib/retry'

interface ShopStore {
  shops: CampaignShop[]
  loading: boolean

  // DM actions
  loadShops: (campaignId: string) => Promise<void>
  createShop: (campaignId: string, name: string, description: string) => Promise<void>
  updateShop: (shopId: string, updates: Partial<Pick<CampaignShop, 'name' | 'description' | 'isVisible' | 'inventory'>>) => Promise<void>
  deleteShop: (shopId: string) => Promise<void>
  toggleVisibility: (shopId: string, visible: boolean) => Promise<void>
  addItemToShop: (shopId: string, itemId: string, stock: number | null) => Promise<void>
  removeItemFromShop: (shopId: string, itemId: string) => Promise<void>
  updateShopItemStock: (shopId: string, itemId: string, stock: number | null) => Promise<void>
  updateShopItemPrice: (shopId: string, itemId: string, customPrice: number | null) => Promise<void>

  // Player actions
  buyItem: (shopId: string, character: Character, itemId: string, quantity: number) => Promise<Character>
  sellItem: (shopId: string, character: Character, itemId: string, quantity: number) => Promise<Character>

  // Realtime
  subscribeToShops: (campaignId: string) => () => void
}

export const useShopStore = create<ShopStore>((set, get) => ({
  shops: [],
  loading: false,

  loadShops: async (campaignId) => {
    set({ loading: true })
    try {
      const shops = await withRetry(() => shopApi.loadShops(campaignId))
      set({ shops, loading: false })
    } catch (err) {
      console.error('Failed to load shops:', err)
      set({ loading: false })
    }
  },

  createShop: async (campaignId, name, description) => {
    const shop = await shopApi.createShop(campaignId, name, description)
    set((s) => ({ shops: [...s.shops, shop] }))
  },

  updateShop: async (shopId, updates) => {
    await shopApi.updateShop(shopId, updates)
    set((s) => ({
      shops: s.shops.map((shop) =>
        shop.id === shopId ? { ...shop, ...updates } : shop
      ),
    }))
  },

  deleteShop: async (shopId) => {
    await shopApi.deleteShop(shopId)
    set((s) => ({ shops: s.shops.filter((shop) => shop.id !== shopId) }))
  },

  toggleVisibility: async (shopId, visible) => {
    await shopApi.updateShop(shopId, { isVisible: visible })
    set((s) => ({
      shops: s.shops.map((shop) =>
        shop.id === shopId ? { ...shop, isVisible: visible } : shop
      ),
    }))
  },

  addItemToShop: async (shopId, itemId, stock) => {
    const shop = get().shops.find((s) => s.id === shopId)
    if (!shop) return
    // Don't add duplicate
    if (shop.inventory.some((i) => i.itemId === itemId)) return
    const newInventory: ShopInventoryItem[] = [
      ...shop.inventory,
      { itemId, stock, customPrice: null },
    ]
    await shopApi.updateShop(shopId, { inventory: newInventory })
    set((s) => ({
      shops: s.shops.map((sh) =>
        sh.id === shopId ? { ...sh, inventory: newInventory } : sh
      ),
    }))
  },

  removeItemFromShop: async (shopId, itemId) => {
    const shop = get().shops.find((s) => s.id === shopId)
    if (!shop) return
    const newInventory = shop.inventory.filter((i) => i.itemId !== itemId)
    await shopApi.updateShop(shopId, { inventory: newInventory })
    set((s) => ({
      shops: s.shops.map((sh) =>
        sh.id === shopId ? { ...sh, inventory: newInventory } : sh
      ),
    }))
  },

  updateShopItemStock: async (shopId, itemId, stock) => {
    const shop = get().shops.find((s) => s.id === shopId)
    if (!shop) return
    const newInventory = shop.inventory.map((i) =>
      i.itemId === itemId ? { ...i, stock } : i
    )
    await shopApi.updateShop(shopId, { inventory: newInventory })
    set((s) => ({
      shops: s.shops.map((sh) =>
        sh.id === shopId ? { ...sh, inventory: newInventory } : sh
      ),
    }))
  },

  updateShopItemPrice: async (shopId, itemId, customPrice) => {
    const shop = get().shops.find((s) => s.id === shopId)
    if (!shop) return
    const newInventory = shop.inventory.map((i) =>
      i.itemId === itemId ? { ...i, customPrice } : i
    )
    await shopApi.updateShop(shopId, { inventory: newInventory })
    set((s) => ({
      shops: s.shops.map((sh) =>
        sh.id === shopId ? { ...sh, inventory: newInventory } : sh
      ),
    }))
  },

  buyItem: async (shopId, character, itemId, quantity) => {
    const shop = get().shops.find((s) => s.id === shopId)
    if (!shop) throw new Error('Shop not found')

    const gs = getGameSystem(character.gameSystemId) || getDefaultGameSystem()
    const allEquip = gs.getEquipment()
    const item = allEquip.find((e) => e.id === itemId)
    if (!item) throw new Error('Item not found')

    const shopItem = shop.inventory.find((i) => i.itemId === itemId)
    if (!shopItem) throw new Error('Item not in shop')

    const price = shopItem.customPrice ?? item.price
    const totalCost = price * quantity

    if (character.goldRemaining < totalCost) throw new Error('Not enough gold')
    if (shopItem.stock !== null && shopItem.stock < quantity) throw new Error('Not enough stock')

    // Update character
    const existing = character.purchasedEquipment.find((p) => p.itemId === itemId)
    const newEquipment = existing
      ? character.purchasedEquipment.map((p) =>
          p.itemId === itemId ? { ...p, quantity: p.quantity + quantity } : p
        )
      : [...character.purchasedEquipment, { itemId, quantity }]

    const newGold = character.goldRemaining - totalCost

    // Save character changes using targeted update (with retry for transient failures)
    await withRetry(() => api.saveDMEdits(character.id, {
      goldRemaining: newGold,
      purchasedEquipment: newEquipment,
    }))

    const updatedChar: Character = {
      ...character,
      goldRemaining: newGold,
      purchasedEquipment: newEquipment,
    }

    // Update shop stock locally if finite
    if (shopItem.stock !== null) {
      const newInventory = shop.inventory.map((i) =>
        i.itemId === itemId ? { ...i, stock: (i.stock ?? 0) - quantity } : i
      )
      // Try to persist stock change — may fail if player lacks update permission
      try {
        await shopApi.updateShop(shopId, { inventory: newInventory })
      } catch {
        // Stock update will sync via realtime when DM makes changes
      }
      set((s) => ({
        shops: s.shops.map((sh) =>
          sh.id === shopId ? { ...sh, inventory: newInventory } : sh
        ),
      }))
    }

    return updatedChar
  },

  sellItem: async (shopId, character, itemId, quantity) => {
    const gs = getGameSystem(character.gameSystemId) || getDefaultGameSystem()
    const allEquip = gs.getEquipment()
    const item = allEquip.find((e) => e.id === itemId)
    if (!item) throw new Error('Item not found')

    const owned = character.purchasedEquipment.find((p) => p.itemId === itemId)
    if (!owned || owned.quantity < quantity) throw new Error('Not enough items to sell')

    // 50% sell price (standard PF2e rule)
    const sellPrice = Math.floor(item.price * 0.5) * quantity

    const newEquipment = character.purchasedEquipment
      .map((p) =>
        p.itemId === itemId ? { ...p, quantity: p.quantity - quantity } : p
      )
      .filter((p) => p.quantity > 0)

    const newGold = character.goldRemaining + sellPrice

    // Save character changes using targeted update (with retry for transient failures)
    await withRetry(() => api.saveDMEdits(character.id, {
      goldRemaining: newGold,
      purchasedEquipment: newEquipment,
    }))

    return {
      ...character,
      goldRemaining: newGold,
      purchasedEquipment: newEquipment,
    }
  },

  subscribeToShops: (campaignId) => {
    const channel = supabase
      .channel(`shops:${campaignId}`)
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'campaign_shops',
          filter: `campaign_id=eq.${campaignId}`,
        },
        () => {
          // Reload all shops on any change
          get().loadShops(campaignId)
        }
      )
      .subscribe()

    return () => {
      supabase.removeChannel(channel)
    }
  },
}))
