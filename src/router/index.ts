import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { facts } from '@/assets/facts'
import Home from '../views/Home.vue'
import { useMatrix } from '../store/index'

// import { createPinia } from 'pinia';
// import { createApp } from 'vue'
// import App from '../App.vue'
//
// const pinia = createPinia()
// const app = createApp(App)
// app.use(pinia)
// const store = useMatrix();
// store.fetchTodos()
// console.log(store.matrix)

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/fact/:id',
    name: 'Fact',
    component: () => import('../views/Fact.vue'),
    beforeEnter: (to, _, next) => {
      const { id } = to.params

      if (Array.isArray(id)) {
        next({ path: '/error' })
        return
      }

      // Is a valid index number
      const index = parseInt(id)
      if (index < 0 || index >= facts.length) {
        next({ path: '/error' })
        return
      }

      next()
    }
  },
  {
    path: '/facts',
    name: 'FactList',
    component: () => import('../views/FactList.vue')
  },
  {
    path: '/private',
    name: 'Private',
    component: () => import('../views/PrivateRoute.vue'),beforeEnter:(to,_,next)=>{
      const store = useMatrix();
      console.log(store.matrix)
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'PageNotFound',
    component: () => import('../views/PageNotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
