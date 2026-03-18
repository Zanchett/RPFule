import React from 'react'
import ReactDOM from 'react-dom/client'
import { MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import './medieval-theme.css'
import App from './App'

const theme = createTheme({
  primaryColor: 'yellow',
  fontFamily: '"Crimson Text", Georgia, "Times New Roman", serif',
  headings: {
    fontFamily: '"Cinzel", "Times New Roman", serif',
  },
  defaultRadius: 'sm',
  colors: {
    dark: [
      '#e8d5a3',
      '#c4a96a',
      '#8b7355',
      '#5c4a35',
      '#4a3828',
      '#3a2a1a',
      '#241c14',
      '#1e1610',
      '#1a1209',
      '#120d06'
    ],
    yellow: [
      '#fef9ec',
      '#f8ecc8',
      '#f0c75e',
      '#d4a843',
      '#b8922f',
      '#9a7b2f',
      '#7d6326',
      '#5f4c1d',
      '#413514',
      '#23200c'
    ]
  }
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark">
      <App />
    </MantineProvider>
  </React.StrictMode>
)
