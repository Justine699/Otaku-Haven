import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Otaku-Haven/', // <--- Ipalit ang eksaktong pangalan ng repository mo
})
