import { createI18n } from 'vue-i18n'
import { locales } from './locales'

export const i18n = createI18n({
  locale: 'ru',
  fallbackLocale: 'en',
  messages: locales,
  legacy: false,
  globalInjection: true
})
