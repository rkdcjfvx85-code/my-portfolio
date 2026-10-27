import { Card, CardContent, Typography, Box } from '@mui/material'
import { colors } from '../theme'

// 각 섹션을 구분하는 공통 카드
// highlight: 강조 섹션은 연한 오렌지 배경을 사용
function SectionCard({ id, label, title, description, highlight = false, children }) {
  return (
    <Card
      id={id}
      component="section"
      sx={{
        width: '100%',
        textAlign: 'center',
        backgroundColor: highlight ? colors.primaryLight : colors.bgPrimary,
        borderTop: `4px solid ${colors.primary}`,
      }}
    >
      <CardContent sx={{ py: { xs: 4, md: 6 }, px: { xs: 3, md: 6 } }}>
        <Box
          component="span"
          sx={{
            display: 'inline-block',
            mb: 2,
            px: 1.5,
            py: 0.5,
            borderRadius: 999,
            fontSize: '0.8rem',
            fontWeight: 700,
            color: colors.primaryDark,
            backgroundColor: highlight ? colors.bgPrimary : colors.accent,
          }}
        >
          {label}
        </Box>
        <Typography variant="h4" component="h2" sx={{ mb: 2, fontSize: { xs: '1.5rem', md: '2rem' }, color: colors.textPrimary }}>
          {title}
        </Typography>
        <Typography sx={{ color: colors.textSecondary, lineHeight: 1.8, maxWidth: 560, mx: 'auto' }}>
          {description}
        </Typography>
        {children && <Box sx={{ mt: 3 }}>{children}</Box>}
      </CardContent>
    </Card>
  )
}

export default SectionCard
