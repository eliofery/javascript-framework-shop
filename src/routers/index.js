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
    {
      path: '/bids',
      name: 'bids',
      component: import('@/pages/BidsPage'),
    },
    {
      path: '/favourites',
      name: 'favourites',
      component: import('@/pages/FavouritesPage'),
    },
  ],
})

export default router
