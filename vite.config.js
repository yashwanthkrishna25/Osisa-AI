import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { GoogleAIFileManager } from '@google/generative-ai/files'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
