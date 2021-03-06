import Vue from 'vue'
import App from './App.vue'
import store from './store/index'
import router from './router/index'
import { sync } from 'vuex-router-sync'
import Components from './components/_index'

sync(store, router)

Object.keys(Components).forEach(key => {
  Vue.component(key, Components[key])
})

new Vue({
  router,
  store,
  ...App
}).$mount('#app')
