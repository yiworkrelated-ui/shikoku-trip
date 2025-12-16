import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// Explicitly declare process to avoid TS2580 error without needing complex tsconfig changes
declare const process: any;

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), '')

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
      assetsDir: 'assets',
      sourcemap: false,
    },
    define: {
      // Vital: This allows 'process.env.API_KEY' to work in the browser
      // We use a safe fallback to empty string to prevent build crashes if key is missing
      'process.env.API_KEY': JSON.stringify(env.API_KEY || '')
    }
  }
})