import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import("../views/home.vue")
    },
    {
      path: '/test',
      name: 'test',
      component: () => import("../views/test.vue")
    },
    {
      path: '/about',
      name: 'about',
      component: () => import("../views/about.vue")
    }
  ]
})

export default router
