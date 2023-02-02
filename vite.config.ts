import { resolve } from 'path';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'packages/user-screens/index.ts'),
      name: 'UserScreens',
      fileName: 'user-screens'
    }
  },
  plugins: [react()],
})
