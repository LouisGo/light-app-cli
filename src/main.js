import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import inject from './inject'
import './styles/reset.css'
import './styles/common.scss'
/* // 引入JS桥
import './libs/JSBridge' */

Vue.config.productionTip = false

Vue.use(inject)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
