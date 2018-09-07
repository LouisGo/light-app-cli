import Vue from 'vue'
import Router from 'vue-router'
import { routers } from './router'

Vue.use(Router)

const ROUTER_CONFIG = {
  routes: routers
}

const router = new Router(ROUTER_CONFIG)

router.beforeEach((to, from, next) => {
  console.log(`router from ${from.path}`)
  console.log(`router to ${to.path}`)
  next()
})

router.afterEach(to => {
  console.log('router transform finish')
})

export default router
