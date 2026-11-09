import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // GitHub Pages project site: https://mariogranada.github.io/tic-tac-toe/
  base: '/tic-tac-toe/',
  plugins: [react()],
})
