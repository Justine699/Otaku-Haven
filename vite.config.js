import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/my-anniversary-site/', // Halimbawa: '/our-anniversary/' (dapat may slash sa dulo at umpisa)
})
