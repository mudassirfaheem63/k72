import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'   // ← THIS WAS MISSING

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),   // ← ADD THIS
  ],
})