import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      name: 'CodexUiLibrary',
      fileName: (format) => `codex-ui-library.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
    },
  },
})
