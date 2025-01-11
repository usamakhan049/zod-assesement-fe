import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import postcss from './postcss.config.js';
// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
          src: "/src",
          "@components": "/src/components",
          "@assets": "/src/assets",
          "@models": "/src/models",
          "@utils": "/src/utils",
          "@hooks": "/src/hooks",
          "@context": "/src/context",
          "@pages": "/src/pages",
        },
      },
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
        postcss: postcss,
    },
});
