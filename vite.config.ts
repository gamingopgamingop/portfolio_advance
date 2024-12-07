import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue'; // If using Vue
import tsconfigPaths from 'vite-plugin-tsconfig-paths'; // For TypeScript path aliasing

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths() // Remove unnecessary trailing comma
  ],
  build: {
    outDir: 'dist', // Only one outDir
    assetsDir: 'assets',
    sourcemap: true,
    target: 'esnext', // Set the build target to modern JS for better module handling
    rollupOptions: {
      input: 'src/main.tsx', // Ensure this path is correct
    }
  },
  server: {
    port: 3000,
    open: true,
    cors: true,
  },
  resolve: {
    alias: {
      '@': '/src', // Optional: Set up path aliases if using custom paths
    }
  }
});
