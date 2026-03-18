import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect } from 'react'
import { HomePage } from './pages/HomePage'
import { CharacterCreator } from './pages/CharacterCreator'
import { LoginPage } from './pages/LoginPage'
import { RegisterPage } from './pages/RegisterPage'
import { CampaignsPage } from './pages/CampaignsPage'
import { CampaignDetailPage } from './pages/CampaignDetailPage'
import { DMCharacterSheet } from './pages/DMCharacterSheet'
import { AuthGuard } from './components/AuthGuard'
import { useAuthStore } from './stores/authStore'

export default function App(): JSX.Element {
  const initialize = useAuthStore((s) => s.initialize)

  useEffect(() => {
    initialize()
  }, [initialize])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<AuthGuard />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/character/:id" element={<CharacterCreator />} />
          <Route path="/campaigns" element={<CampaignsPage />} />
          <Route path="/campaign/:id" element={<CampaignDetailPage />} />
          <Route path="/campaign/:campaignId/character/:characterId" element={<DMCharacterSheet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
