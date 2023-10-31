import Router from '@/core/Router/Router'

const router = Router.createRoute({
  history: Router.createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: import('@/pages/HomePage'),
    },
    {
      path: '/item/[0-9]+',
      name: 'product',
      component: import('@/pages/ProductPage'),
    },
  ],
})

export default router
