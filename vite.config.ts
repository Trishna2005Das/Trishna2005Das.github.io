// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  // Use '/' for a username.github.io repo
  base: '/',
  // Allow any host on `vite preview` so ngrok / cloudflared tunnels reach
  // the local production build. Local-preview-only setting - production
  // is served by GitHub Pages and never runs the Vite preview server.
  preview: {
    host: '0.0.0.0',
    port: 4173,
    allowedHosts: true,
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
});
