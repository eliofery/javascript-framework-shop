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
      path: '/cart',
      name: 'cart',
      component: import('@/pages/CartPage'),
    },
  ],
})

export default router
