import { resetStore } from '@/composables/base/resetStore'
import { createPinia } from 'pinia'
import { createApp, markRaw } from 'vue'
import type { Router } from 'vue-router'
import { i18n } from './i18n'
import ToastPlugin from 'vue3-toaster'
import 'virtual:svg-icons-register'
import 'vue3-toaster/styles'
import { appRouter } from './router.ts'
import App from './App.vue'
import './styles/main.scss'

createApp(App)
  .use(
    createPinia()
      .use(({ store }) => {
        store.router = markRaw(appRouter)
      })
      .use(resetStore)
  )
  .use(ToastPlugin, {
    closable: true,
    pauseOnHover: false,
    duration: 2000,
    closeOnDoubleClick: true
  })
  .use(appRouter)
  .use(i18n)
  .mount('#app')

declare module 'pinia' {
  export interface PiniaCustomProperties {
    router: Router
  }
}
