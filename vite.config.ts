import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vue from '@vitejs/plugin-vue'; // If using Vue
import tsconfigPaths from 'vite-plugin-tsconfig-paths'; // For TypeScript path aliasing

export default defineConfig({
  plugins: [react(),tsconfigPaths(),],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
  },
  server: {
    port: 3000,
    open: true,
    cors: true,

  },
  build: {
  target: 'esnext', // Set the build target to modern JS for better module handling
  outDir: 'dist', // Directory for build output
  rollupOptions: {
    input: '/path/to/your/main.tsx', // Adjust to your main entry point if needed
  },
},
resolve: {
  alias: {
    '@': '/src', // Optional: Set up path aliases if using custom paths
  },
},

});
