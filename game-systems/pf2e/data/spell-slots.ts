// PF2e spell slots per level for standard full casters
// Key: character level, Value: array indexed by spell level (index 0 = 1st level spells)
export const CASTER_SPELL_SLOTS: Record<number, number[]> = {
  1:  [2],
  2:  [3],
  3:  [3, 2],
  4:  [3, 3],
  5:  [3, 3, 2],
  6:  [3, 3, 3],
  7:  [3, 3, 3, 2],
  8:  [3, 3, 3, 3],
  9:  [3, 3, 3, 3, 2],
  10: [3, 3, 3, 3, 3],
  11: [3, 3, 3, 3, 3, 2],
  12: [3, 3, 3, 3, 3, 3],
  13: [3, 3, 3, 3, 3, 3, 2],
  14: [3, 3, 3, 3, 3, 3, 3],
  15: [3, 3, 3, 3, 3, 3, 3, 2],
  16: [3, 3, 3, 3, 3, 3, 3, 3],
  17: [3, 3, 3, 3, 3, 3, 3, 3, 2],
  18: [3, 3, 3, 3, 3, 3, 3, 3, 3],
  19: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
  20: [3, 3, 3, 3, 3, 3, 3, 3, 3, 1]
}

/** Returns max spell slots array for a caster at the given character level */
export function getSpellSlotTable(characterLevel: number): number[] {
  return CASTER_SPELL_SLOTS[characterLevel] ?? []
}
