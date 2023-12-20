import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'https://ems-backend-ksng.onrender.com' //whenever '/api' is there this will append automatically
    }
  },
  plugins: [react()],
})