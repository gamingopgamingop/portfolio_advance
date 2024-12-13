// vite.config.ts
import { defineConfig } from "file:///D:/project-bolt-sb1-azwnpc%20(5)/project/node_modules/vite/dist/node/index.js";
import react from "file:///D:/project-bolt-sb1-azwnpc%20(5)/project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import tsconfigPaths from "file:///D:/project-bolt-sb1-azwnpc%20(5)/node_modules/vite-plugin-tsconfig-paths/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    tsconfigPaths()
    // Remove unnecessary trailing comma
  ],
  build: {
    outDir: "dist",
    // Only one outDir
    assetsDir: "assets",
    sourcemap: true,
    target: "esnext",
    // Set the build target to modern JS for better module handling
    rollupOptions: {
      input: "src/main.tsx"
      // Ensure this path is correct
    }
  },
  server: {
    port: 3e3,
    open: true,
    cors: true
  },
  resolve: {
    alias: {
      "@": "/src"
      // Optional: Set up path aliases if using custom paths
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0LWJvbHQtc2IxLWF6d25wYyAoNSlcXFxccHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxccHJvamVjdC1ib2x0LXNiMS1henducGMgKDUpXFxcXHByb2plY3RcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L3Byb2plY3QtYm9sdC1zYjEtYXp3bnBjJTIwKDUpL3Byb2plY3Qvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnOyAvLyBJZiB1c2luZyBWdWVcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS1wbHVnaW4tdHNjb25maWctcGF0aHMnOyAvLyBGb3IgVHlwZVNjcmlwdCBwYXRoIGFsaWFzaW5nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICB0c2NvbmZpZ1BhdGhzKCkgLy8gUmVtb3ZlIHVubmVjZXNzYXJ5IHRyYWlsaW5nIGNvbW1hXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgb3V0RGlyOiAnZGlzdCcsIC8vIE9ubHkgb25lIG91dERpclxyXG4gICAgYXNzZXRzRGlyOiAnYXNzZXRzJyxcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIHRhcmdldDogJ2VzbmV4dCcsIC8vIFNldCB0aGUgYnVpbGQgdGFyZ2V0IHRvIG1vZGVybiBKUyBmb3IgYmV0dGVyIG1vZHVsZSBoYW5kbGluZ1xyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBpbnB1dDogJ3NyYy9tYWluLnRzeCcsIC8vIEVuc3VyZSB0aGlzIHBhdGggaXMgY29ycmVjdFxyXG4gICAgfVxyXG4gIH0sXHJcbiAgc2VydmVyOiB7XHJcbiAgICBwb3J0OiAzMDAwLFxyXG4gICAgb3BlbjogdHJ1ZSxcclxuICAgIGNvcnM6IHRydWUsXHJcbiAgfSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6ICcvc3JjJywgLy8gT3B0aW9uYWw6IFNldCB1cCBwYXRoIGFsaWFzZXMgaWYgdXNpbmcgY3VzdG9tIHBhdGhzXHJcbiAgICB9XHJcbiAgfVxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0UyxTQUFTLG9CQUFvQjtBQUN6VSxPQUFPLFdBQVc7QUFFbEIsT0FBTyxtQkFBbUI7QUFFMUIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sY0FBYztBQUFBO0FBQUEsRUFDaEI7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFFBQVE7QUFBQTtBQUFBLElBQ1IsV0FBVztBQUFBLElBQ1gsV0FBVztBQUFBLElBQ1gsUUFBUTtBQUFBO0FBQUEsSUFDUixlQUFlO0FBQUEsTUFDYixPQUFPO0FBQUE7QUFBQSxJQUNUO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUs7QUFBQTtBQUFBLElBQ1A7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
