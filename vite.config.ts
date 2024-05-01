import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          ['intro-js']: ['intro.js'],
          ['use-local-storage-state']: ['use-local-storage-state'],
          ['netlify-identity-widget']: ['netlify-identity-widget'],
          ['bootstrap.min.css']: ['bootstrap/dist/css/bootstrap.min.css'],
          ['bootstrap.min.js']: ['bootstrap/dist/js/bootstrap.js'],
          ['bootstrap-icons']: ['bootstrap-icons/font/bootstrap-icons.css'],
          ['introjs.css']: ['intro.js/introjs.css', 'intro.js/themes/introjs-modern.css'],
          ['recharts']: ['recharts'],
        },
      },
    },
  },
});
