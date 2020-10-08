import Vue from 'vue'
import App from './App.vue'
import { dollarFilter, percentFilter } from '@/filters'

import '@/assets/styles/index.css'
import router from '@/router'

Vue.filter('dollar', dollarFilter)
Vue.filter('percent', percentFilter)
Vue.config.productionTip = false

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#app')
