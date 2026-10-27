import { Box, Typography } from '@mui/material'
import { colors } from '../theme'

function Footer() {
  return (
    <Box
      component="footer"
      sx={{ py: 3, textAlign: 'center', backgroundColor: colors.bgPrimary, borderTop: `1px solid ${colors.borderLight}` }}
    >
      <Typography variant="body2" sx={{ color: colors.textMuted }}>
        © 2026 My Portfolio
      </Typography>
    </Box>
  )
}

export default Footer
