import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'GlassDeals',
    component: () => import('../views/GlassDeals.vue')
  },
  {
    path: '/DiffChanges',
    name: 'DiffChanges',
    component: () => import('../views/DiffChanges.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
