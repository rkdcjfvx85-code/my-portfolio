import { NavLink } from 'react-router-dom'
import { AppBar, Toolbar, Box, Container, Typography } from '@mui/material'
import { colors } from '../theme'

const menus = [
  { label: 'Home', to: '/' },
  { label: 'About Me', to: '/about' },
  { label: 'Projects', to: '/projects' },
]

function NavBar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{ backgroundColor: colors.bgPrimary, borderBottom: `1px solid ${colors.borderLight}` }}
    >
      <Container maxWidth="md" sx={{ px: { xs: 2, sm: 3 } }}>
        <Toolbar
          disableGutters
          sx={{
            justifyContent: 'space-between',
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: 1, sm: 0 },
            py: { xs: 1.5, sm: 0 },
          }}
        >
          <Typography variant="h6" sx={{ fontWeight: 800, color: colors.primary }}>
            My Portfolio
          </Typography>

          <Box component="nav" sx={{ display: 'flex', gap: 1 }}>
            {menus.map((menu) => (
              <Box
                key={menu.to}
                component={NavLink}
                to={menu.to}
                end
                sx={{
                  px: 2,
                  py: 1,
                  borderRadius: 999,
                  fontWeight: 700,
                  fontSize: '0.95rem',
                  textDecoration: 'none',
                  color: colors.textSecondary,
                  transition: 'all 0.2s ease',
                  '&:hover': { color: colors.primary, backgroundColor: colors.primaryLight },
                  // 현재 선택된 탭
                  '&.active': { color: colors.primaryDark, backgroundColor: colors.primaryLight },
                }}
              >
                {menu.label}
              </Box>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default NavBar
