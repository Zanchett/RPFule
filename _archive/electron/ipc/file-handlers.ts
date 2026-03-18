import { ipcMain, app } from 'electron'
import { join } from 'path'
import { readdir, readFile, writeFile, unlink, mkdir } from 'fs/promises'
import { existsSync } from 'fs'

function getCharactersDir(): string {
  return join(app.getPath('userData'), 'characters')
}

async function ensureCharactersDir(): Promise<void> {
  const dir = getCharactersDir()
  if (!existsSync(dir)) {
    await mkdir(dir, { recursive: true })
  }
}

export function registerFileHandlers(): void {
  ipcMain.handle('character:save', async (_event, character: { id: string }) => {
    await ensureCharactersDir()
    const filePath = join(getCharactersDir(), `${character.id}.json`)
    await writeFile(filePath, JSON.stringify(character, null, 2), 'utf-8')
  })

  ipcMain.handle('character:load', async (_event, id: string) => {
    const filePath = join(getCharactersDir(), `${id}.json`)
    const data = await readFile(filePath, 'utf-8')
    return JSON.parse(data)
  })

  ipcMain.handle('character:delete', async (_event, id: string) => {
    const filePath = join(getCharactersDir(), `${id}.json`)
    await unlink(filePath)
  })

  ipcMain.handle('character:list', async () => {
    await ensureCharactersDir()
    const dir = getCharactersDir()
    const files = await readdir(dir)
    const characters = await Promise.all(
      files
        .filter((f) => f.endsWith('.json'))
        .map(async (f) => {
          const data = await readFile(join(dir, f), 'utf-8')
          return JSON.parse(data)
        })
    )
    return characters
  })

  ipcMain.handle('app:getDataPath', () => {
    return app.getPath('userData')
  })
}
