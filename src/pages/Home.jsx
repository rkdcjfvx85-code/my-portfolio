import { Link } from 'react-router-dom'
import { Stack, Button } from '@mui/material'
import SectionCard from '../components/SectionCard'

function Home() {
  return (
    <Stack spacing={{ xs: 3, md: 4 }} sx={{ alignItems: 'center' }}>
      <SectionCard
        id="hero"
        label="01 · Hero"
        title="Hero 섹션"
        description="여기는 Hero 섹션입니다. 메인 비주얼, 이름, 간단 소개가 들어갈 예정입니다."
        highlight
      />

      <SectionCard
        id="about"
        label="02 · About Me"
        title="About Me 섹션"
        description="여기는 About Me 섹션입니다. 간단한 자기소개와 '더 알아보기' 버튼이 들어갈 예정입니다."
      >
        <Button component={Link} to="/about" variant="contained" color="primary" size="large">
          더 알아보기
        </Button>
      </SectionCard>

      <SectionCard
        id="skills"
        label="03 · Skill Tree"
        title="Skill Tree 섹션"
        description="여기는 Skill Tree 섹션입니다. 기술 스택을 트리나 프로그레스바로 시각화할 예정입니다."
      />

      <SectionCard
        id="projects"
        label="04 · Projects"
        title="Projects 섹션"
        description="여기는 Projects 섹션입니다. 대표작 썸네일 3-4개와 '더 보기' 버튼이 들어갈 예정입니다."
      >
        <Button component={Link} to="/projects" variant="outlined" size="large">
          더 보기
        </Button>
      </SectionCard>

      <SectionCard
        id="contact"
        label="05 · Contact"
        title="Contact 섹션"
        description="여기는 Contact 섹션입니다. 연락처, SNS, 간단한 메시지 폼이 들어갈 예정입니다."
        highlight
      />
    </Stack>
  )
}

export default Home
