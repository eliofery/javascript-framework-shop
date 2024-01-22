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
      path: `${process.env.PREFIX_URL}`,
      name: 'home',
      component: import('@/pages/HomePage'),
    },
    {
      path: `${process.env.PREFIX_URL}/item/[0-9]+`,
      name: 'product',
      component: import('@/pages/ProductPage'),
    },
    {
      path: `${process.env.PREFIX_URL}/bids`,
      name: 'bids',
      component: import('@/pages/BidsPage'),
    },
    {
      path: `${process.env.PREFIX_URL}/favourites`,
      name: 'favourites',
      component: import('@/pages/FavouritesPage'),
    },
    {
      path: `${process.env.PREFIX_URL}/.*`,
      name: '404',
      component: import('@/pages/ErrorPage'),
    },
  ],
})

export default router
