import vue from '@vitejs/plugin-vue'
import { fileURLToPath, pathToFileURL, URL } from 'node:url'
import { visualizer } from 'rollup-plugin-visualizer'
import { defineConfig, loadEnv } from 'vite'
import { createSvgIconsPlugin } from '@digitalacorn/vite-plugin-svg-icons'
import path from 'node:path'

export default defineConfig(({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }

  const landingType: string = process.env.VITE_LANDING_TYPE!

  function setPlugins() {
    const plugins = [
      vue(),
      createSvgIconsPlugin({
        iconDirs: [path.resolve(process.cwd(), `src/components/pages/${landingType}/icons`)],
        symbolId: 'icon-[dir]-[name]',
        inject: 'body-last',
        replaceStrokeWithCurrentColor: false
      })
    ]

    if (mode === 'development') {
      plugins.push(
        visualizer({
          emitFile: true,
          filename: 'stats.html',
          template: 'sunburst',
          open: true,
          gzipSize: true,
          brotliSize: true
        })
      )
    }

    return plugins
  }

  return {
    plugins: setPlugins(),
    build: {
      target: 'esnext',
      rollupOptions: {
        output: {
          manualChunks: function manualChunks(id) {
            if (id.includes('node_modules')) {
              return 'vendor'
            }

            if (!id.includes(landingType)) {
              return ''
            }
          }
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      },
      extensions: ['.vue', '.ts', '.js', '.json']
    },
    css: {
      // transformer: 'lightningcss',
      devSourcemap: true,
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          importers: [
            {
              /**
               * An importer that redirects relative URLs starting with "~" to
               * `node_modules`.
               */
              findFileUrl(url: string) {
                if (!url.startsWith('~')) return null
                return new URL(url.substring(1), pathToFileURL('node_modules'))
              }
            },
            {
              /**
               * An importer that redirects relative URLs starting with "@styles"
               * to `src/styles`.
               */
              findFileUrl(url: string) {
                if (!url.startsWith('@styles')) return null
                return new URL(url.substring(1), pathToFileURL('src/styles'))
              }
            }
          ]
        }
      }
    }
  }
})
