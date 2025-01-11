import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import postcss from './postcss.config.js'
import { resolve } from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
  css: {
    postcss,
  },
})
