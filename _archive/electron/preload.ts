import { contextBridge, ipcRenderer } from 'electron'

const api = {
  saveCharacter: (character: unknown): Promise<void> =>
    ipcRenderer.invoke('character:save', character),
  loadCharacter: (id: string): Promise<unknown> =>
    ipcRenderer.invoke('character:load', id),
  deleteCharacter: (id: string): Promise<void> =>
    ipcRenderer.invoke('character:delete', id),
  listCharacters: (): Promise<unknown[]> =>
    ipcRenderer.invoke('character:list'),
  getAppDataPath: (): Promise<string> =>
    ipcRenderer.invoke('app:getDataPath')
}

contextBridge.exposeInMainWorld('electronAPI', api)

export type ElectronAPI = typeof api
