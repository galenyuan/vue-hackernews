// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import router from './router'
import App from './App'
import store from './store'
import { domain, fromNow } from './filters'

Vue.filter('fromNow', fromNow)
Vue.filter('domain', domain)

const app = new Vue({
  router,
  store,
  ...App
}).$mount('#app')
