import { defineConfig } from 'vite';
import { default as viteReact } from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [viteReact(), svgr()],
  server: {
    strictPort: true,
  },
  build: {
    outDir: `build`,
  },
});
