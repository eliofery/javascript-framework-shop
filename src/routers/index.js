import Router from '@/core/Router/Router'

/**
 * Регистрация роутов
 *
 * @type {*|null}
 */
const router = Router.createRoute({
  history: Router.createWebHistory(),
  routes: [
    {
      path: '/javascript-framework-shop/',
      name: 'home',
      component: import('@/pages/HomePage'),
    },
    {
      path: '/javascript-framework-shop/item/[0-9]+',
      name: 'product',
      component: import('@/pages/ProductPage'),
    },
    {
      path: '/javascript-framework-shop/bids',
      name: 'bids',
      component: import('@/pages/BidsPage'),
    },
    {
      path: '/javascript-framework-shop/favourites',
      name: 'favourites',
      component: import('@/pages/FavouritesPage'),
    },
    {
      path: '/javascript-framework-shop/.*',
      name: '404',
      component: import('@/pages/ErrorPage'),
    },
  ],
})

export default router
