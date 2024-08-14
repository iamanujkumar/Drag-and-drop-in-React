import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Grag-and-drop-in-React/', 
  plugins: [react()],
})
