import { GameSystem } from '../src/types'
import { pf2eSystem } from './pf2e'

// Registry of all available game systems
const gameSystems: Record<string, GameSystem> = {
  pf2e: pf2eSystem
}

export function getGameSystem(id: string): GameSystem | undefined {
  return gameSystems[id]
}

export function getAllGameSystems(): GameSystem[] {
  return Object.values(gameSystems)
}

export function getDefaultGameSystem(): GameSystem {
  return pf2eSystem
}
