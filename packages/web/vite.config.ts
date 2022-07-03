import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['typescript'],
  },
  build: {
    commonjsOptions: {
      include: [/typescript/, /node_modules/],
    },
  },
});
