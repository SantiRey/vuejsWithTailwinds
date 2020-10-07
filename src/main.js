import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

import '@/assets/styles/index.css'
import router from '@/router'
new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
