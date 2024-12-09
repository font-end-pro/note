import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/home.vue'),
    },
    {
      path: '/todo',
      name: 'todo',
      component: () => import('../views/todo.vue'),
    },
    {
      path: '/note',
      name: 'note',
      component: () => import('../views/note.vue'),
    },
    {
      path: '/bookmark',
      name: 'bookmark',
      component: () => import('../views/bookmark.vue'),
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue'),
    },
  ],
})

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
