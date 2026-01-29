import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Optimización de producción
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    },
    // Code splitting para mejor carga
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion'],
          icons: ['lucide-react', '@phosphor-icons/react']
        }
      }
    },
    // Optimización de assets
    assetsInlineLimit: 4096,
    cssCodeSplit: true
  },
  // Optimización de servidor dev
  server: {
    host: true,
    open: true
  }
})
