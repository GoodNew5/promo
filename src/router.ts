import { createRouter, createWebHistory } from 'vue-router'
import { constants } from './config/constants'
import { pages } from './config/pages'

const testPage = {
  name: 'test-page',
  path: '/test-page',
  component: import('@/components/pages/test_page/TestPage.vue')
}

export const appRouter = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: constants.IS_DEV
    ? [testPage, pages[constants.LANDING_TYPE]]
    : [pages[constants.LANDING_TYPE]]
})
