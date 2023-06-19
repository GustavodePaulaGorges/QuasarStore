import { createRouter, createWebHistory } from 'vue-router'
import PTHomeView from '../views/pt/HomeView.vue'
import PTPlansView from '../views/pt/PlansView.vue'
import PTBasicPlan from '../views/pt/BasicPlan.vue'
import PTProPlan from '../views/pt/ProPlan.vue'
import PTUltraPlan from '../views/pt/UltraPlan.vue'
import PTGodPlan from '../views/pt/GodPlan.vue'

import ENPlansView from '../views/eng/PlansView.vue'
import ENHomeView from '../views/eng/HomeView.vue'
import ENBasicPlan from '../views/eng/BasicPlan.vue'
import ENProPlan from '../views/eng/ProPlan.vue'
import ENUltraPlan from '../views/eng/UltraPlan.vue'
import ENGodPlan from '../views/eng/GodPlan.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: PTHomeView
    },
    {
      path: '/plans',
      name: 'plans',
      component: PTPlansView
    },
    {
      path: '/basic',
      name: 'basic',
      component: PTBasicPlan
    },
    {
      path: '/pro',
      name: 'pro',
      component: PTProPlan
    },
    {
      path: '/ultra',
      name: 'ultra',
      component: PTUltraPlan
    },
    {
      path: '/god',
      name: 'god',
      component: PTGodPlan
    },
    {
      path: '/en/basic',
      name: 'en-basic',
      component: ENBasicPlan
    },
    {
      path: '/en/god',
      name: 'en-god',
      component: ENGodPlan
    },
    {
      path: '/en',
      name: 'en-home',
      component: ENHomeView
    },
    {
      path: '/en/plans',
      name: 'en-plans',
      component: ENPlansView
    },
    {
      path: '/en/pro',
      name: 'en-pro',
      component: ENProPlan
    },
    {
      path: '/en/ultra',
      name: 'en-ultra',
      component: ENUltraPlan
    }
  ]
})

export default router
