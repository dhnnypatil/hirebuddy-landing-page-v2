import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using relative path for GitHub Pages compatibility
  base: '/hirebuddy-landing-page-v2',
})
