import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  build: {
    outDir: 'build',
    rollupOptions: {
      input: {
        main: 'ścieżka/do/pliku/main.tsx',
        // inne pliki wejściowe
      },
    },
  },
  
})
