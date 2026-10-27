import { Routes, Route } from 'react-router-dom'
import { Box, Container } from '@mui/material'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Projects from './pages/Projects'

function App() {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <NavBar />
      {/* 반응형 중앙정렬: 최대 너비 1024px, 좌우 여백은 화면 크기에 따라 조절 */}
      <Container maxWidth="md" component="main" sx={{ flex: 1, py: { xs: 3, md: 6 }, px: { xs: 2, sm: 3 } }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Container>
      <Footer />
    </Box>
  )
}

export default App
