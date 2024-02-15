import { createRoot } from 'react-dom/client'
import App from './App'
import { ThemeProvider } from '@hummingbot/hbui/system/ThemeContext'

const container = document.getElementById('root')
const root = createRoot(container);
root.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
)
