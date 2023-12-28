import path from 'node:path'
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// @ts-ignore
import jsonServer from 'vite-plugin-simple-json-server'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    {
      name: 'root-route-index',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url === '/') {
            req.url = '/index.html'
          }
          next()
        })
      }
    },
    jsonServer({
      handlers: [
        {
          pattern: '/api/colors',
          handle: (req: any, res: any) => {
            res.end(
              JSON.stringify({
                code: 200,
                data: ['purple', 'orange', 'pink']
              })
            )
          }
        }
      ]
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./app/src', import.meta.url)),
      '@domain': fileURLToPath(new URL('./domain', import.meta.url)),
      '@infra': fileURLToPath(new URL('./infra', import.meta.url)),
      '@facade': fileURLToPath(new URL('./infra/facade.ts', import.meta.url))
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
