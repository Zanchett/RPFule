import { supabase } from './supabase'
import { CampaignShop, ShopInventoryItem } from '../types'

function rowToShop(row: Record<string, unknown>): CampaignShop {
  return {
    id: row.id as string,
    campaignId: row.campaign_id as string,
    name: row.name as string,
    description: (row.description as string) || '',
    isVisible: row.is_visible as boolean,
    inventory: (row.inventory as ShopInventoryItem[]) || [],
    createdAt: row.created_at as string,
    updatedAt: row.updated_at as string,
  }
}

export async function loadShops(campaignId: string): Promise<CampaignShop[]> {
  const { data, error } = await supabase
    .from('campaign_shops')
    .select('*')
    .eq('campaign_id', campaignId)
    .order('created_at', { ascending: true })

  if (error) throw error
  return (data ?? []).map(rowToShop)
}

export async function createShop(
  campaignId: string,
  name: string,
  description: string
): Promise<CampaignShop> {
  const { data, error } = await supabase
    .from('campaign_shops')
    .insert({
      campaign_id: campaignId,
      name,
      description,
      is_visible: false,
      inventory: [],
    })
    .select()
    .single()

  if (error) throw error
  return rowToShop(data)
}

export async function updateShop(
  shopId: string,
  updates: {
    name?: string
    description?: string
    isVisible?: boolean
    inventory?: ShopInventoryItem[]
  }
): Promise<void> {
  const row: Record<string, unknown> = { updated_at: new Date().toISOString() }
  if (updates.name !== undefined) row.name = updates.name
  if (updates.description !== undefined) row.description = updates.description
  if (updates.isVisible !== undefined) row.is_visible = updates.isVisible
  if (updates.inventory !== undefined) row.inventory = updates.inventory

  const { error } = await supabase
    .from('campaign_shops')
    .update(row)
    .eq('id', shopId)

  if (error) throw error
}

export async function deleteShop(shopId: string): Promise<void> {
  const { error } = await supabase
    .from('campaign_shops')
    .delete()
    .eq('id', shopId)

  if (error) throw error
}
