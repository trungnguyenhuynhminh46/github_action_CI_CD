import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false,
      }
    }
  }
});

// export default defineConfig(({ mode: string }) => {
//   const env = loadEnv(mode, process.cwd(), '');
//
//   return {
//     plugins: [react()],
//     server: {
//       proxy: {
//         '/api': {
//           target: env.VITE_API_BASE_URL,
//           changeOrigin: true,
//           secure: false,
//         }
//       }
//     }
//   };
// });
