# Fix Background Skill Feat + Remaining Tasks

## Status Check
1. **Local save fallback** — ✅ Already implemented (localStorage backup on save failure, restore on load)
2. **Prerequisite locking** — ✅ Already implemented (checkFeatPrerequisites + locked/lockReason props)
3. **Background feat sharing** — ❌ FIX NEEDED

## Task: Fix Background Skill Feat Display

### Problem
All backgrounds share the same full pool of skill feats. When you pick Warrior, you see the same skill feats as Acolyte. The background's specific granted feat (e.g., Intimidating Glare for Warrior) is not shown as auto-granted.

### Fix in `FeatsTab.tsx`
1. Remove the `+ (character.backgroundId ? 1 : 0)` from `maxSkillFeats` — the background feat is separate
2. Resolve the background's `skillFeat` name to the actual feat object by matching against skill feats by name
3. Show the background-granted feat as a separate auto-granted card at the top of the Skill Feats section (locked, non-removable, with a "Granted by Background" label)
4. The choosable skill feats below it only come from class advancement slots

### Files to modify
- `src/components/tabs/FeatsTab.tsx` — main fix

## Remaining from previous session
- AbilityTab level-up boost selectors
- Tag element-specific Kineticist feats
- Kineticist element picker in ClassTab
- TypeCheck
