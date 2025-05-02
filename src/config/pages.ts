export const pages: Record<
  string,
  { name: string; path: string; component: () => Promise<unknown> }
> = {
  chicken_road: {
    name: 'chicken-road',
    path: '/',
    component: () => import('@/components/pages/chicken_road/ChickenRoadPage.vue')
  },
  sweet_bonanza: {
    name: 'sweet-bonanza',
    path: '/',
    component: () => import('@/components/pages/sweet_bonanza/SweetBonanzaPage.vue')
  }
}
