import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Allow serving from parent dir when cupertino-icons-svg is linked via file:..
    fs: { allow: ['..'] },
  },
})
