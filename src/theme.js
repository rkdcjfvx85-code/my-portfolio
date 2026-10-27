import { createTheme } from '@mui/material/styles'

// 색상 값은 src/styles/colors.css 의 CSS 변수를 그대로 참조합니다.
// 그래서 다크모드로 바뀌면 MUI 컴포넌트 색상도 함께 바뀝니다.
export const colors = {
  primary: 'var(--color-primary)',
  primaryLight: 'var(--color-primary-light)',
  primaryDark: 'var(--color-primary-dark)',
  secondary: 'var(--color-secondary)',
  accent: 'var(--color-accent)',
  bgPrimary: 'var(--color-bg-primary)',
  bgSecondary: 'var(--color-bg-secondary)',
  textPrimary: 'var(--color-text-primary)',
  textSecondary: 'var(--color-text-secondary)',
  textMuted: 'var(--color-text-muted)',
  buttonPrimary: 'var(--color-button-primary)',
  buttonHover: 'var(--color-button-hover)',
  link: 'var(--color-link)',
  linkHover: 'var(--color-link-hover)',
  border: 'var(--color-border)',
  borderLight: 'var(--color-border-light)',
  borderHover: 'var(--color-border-hover)',
}

// MUI 팔레트는 색상 계산(투명도 등)을 위해 실제 Hex 값이 필요해서 라이트모드 값을 넣었습니다.
const theme = createTheme({
  palette: {
    primary: { main: '#FF6600', light: '#FFF2EC', dark: '#E14D00', contrastText: '#FFFFFF' },
    secondary: { main: '#1A1C20', contrastText: '#FFFFFF' },
    text: { primary: '#1A1C20', secondary: '#555D6D', disabled: '#868B94' },
    background: { default: '#F3F4F5', paper: '#FFFFFF' },
    divider: '#EAEBEE',
  },
  typography: {
    fontFamily: "'Pretendard Variable', Pretendard, -apple-system, BlinkMacSystemFont, sans-serif",
    h1: { fontWeight: 800 },
    h2: { fontWeight: 700 },
    h3: { fontWeight: 700 },
    button: { fontWeight: 700, textTransform: 'none' },
  },
  shape: { borderRadius: 12 },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundColor: colors.bgPrimary,
          color: colors.textPrimary,
          border: `1px solid ${colors.borderLight}`,
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: colors.buttonPrimary,
          boxShadow: 'none',
          '&:hover': { backgroundColor: colors.buttonHover, boxShadow: 'none' },
        },
        outlined: {
          color: colors.textPrimary,
          borderColor: colors.border,
          '&:hover': { color: colors.primary, borderColor: colors.borderHover, backgroundColor: 'transparent' },
        },
      },
    },
  },
})

export default theme
