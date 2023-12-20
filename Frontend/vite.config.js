import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:5500' //whenever '/api' is there this will append automatically
    }
  },
  plugins: [react()],
})