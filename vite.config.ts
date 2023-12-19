import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    {
      name: 'deep-index',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/') {
            req.url = '/index.html'
          }
          next()
        })
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app/src', import.meta.url))
    }
  },
  root: './app',
  publicDir: 'public/',
  server: { open: true },
  build: {
    rollupOptions: {
      input: {
        index: path.resolve(__dirname, 'app/public/index.html')
      }
    }
  }
})
