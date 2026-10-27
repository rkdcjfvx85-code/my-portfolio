# My Portfolio

React + React Router + MUI로 만든 포트폴리오 템플릿 사이트입니다.
색상은 `컬러 팔레트 디자인 시스템.md`의 CSS 변수(당근 비즈니스 컬러 기반)를 사용합니다.

## 페이지 구성
- **Home**: Hero / About Me / Skill Tree / Projects / Contact 5개 섹션
- **About Me**: 상세 자기소개 (개발 예정)
- **Projects**: 포트폴리오 작품 (개발 예정)

## 실행 방법
```bash
npm install
npm run dev     # 개발 서버
npm run build   # 정적 파일 빌드 (dist/)
```

## 주요 파일
- `src/styles/colors.css`: 컬러 CSS 변수 (라이트/다크모드)
- `src/theme.js`: MUI 테마
- `src/components/SectionCard.jsx`: 섹션 공통 카드
- `.github/workflows/deploy.yml`: main 브랜치에 푸시하면 GitHub Pages로 자동 배포
