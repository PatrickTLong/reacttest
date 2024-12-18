import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Make sure to listen on all network interfaces
    port: 3000,        // Optional: You can specify the port or use the default port
  },
})
