import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PlansView from '../views/PlansView.vue'
import BasicPlan from '../views/BasicPlan.vue'
import ProPlan from '../views/ProPlan.vue'
import UltraPlan from '../views/UltraPlan.vue'
import GodPlan from '../views/GodPlan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/plans',
      name: 'plans',
      component: PlansView
    },
    {
      path: '/basic',
      name: 'basic',
      component: BasicPlan
    },
    {
      path: '/pro',
      name: 'pro',
      component: ProPlan
    },
    {
      path: '/ultra',
      name: 'ultra',
      component: UltraPlan
    },
    {
      path: '/god',
      name: 'god',
      component: GodPlan
    },
  ]
})

export default router
