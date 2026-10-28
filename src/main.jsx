import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import config from '../user_config.json'

// Colors and the tab title come from user_config.json.
const root = document.documentElement
root.style.setProperty('--primary', config.colors.primary)
root.style.setProperty('--secondary', config.colors.secondary)
root.style.setProperty('--accent', config.colors.accent)
document.title = `${config.site_name} | ${config.role}`

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
