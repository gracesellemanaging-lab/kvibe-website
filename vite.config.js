import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
// For GitHub Pages project site: https://<user>.github.io/kvibe-website/
// Local dev uses '/', Pages build uses '/kvibe-website/'
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_ACTIONS ? '/kvibe-website/' : '/',
})
