import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ThemeProvider } from '@mui/material/styles'
import './styles/colors.css'
import theme from './theme'
import App from './App.jsx'

// GitHub Pages는 서버 라우팅을 지원하지 않아서, 새로고침해도 404가 나지 않도록 HashRouter를 사용합니다.
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <HashRouter>
        <App />
      </HashRouter>
    </ThemeProvider>
  </StrictMode>,
)
