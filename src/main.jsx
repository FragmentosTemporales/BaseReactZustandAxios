import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App.jsx'
import theme from './theme/theme.jsx'  // tu archivo de tema

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />   {/* normaliza estilos y aplica tipografía global */}
      <App />
    </ThemeProvider>
  </StrictMode>,
)