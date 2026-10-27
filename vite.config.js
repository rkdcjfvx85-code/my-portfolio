import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // GitHub Pages 하위 경로(/my-portfolio/)에서도 동작하도록 상대 경로 사용
  base: './',
})
