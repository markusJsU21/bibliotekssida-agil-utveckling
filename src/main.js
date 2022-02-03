import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,

  data() {
    return{
      books: [],
    }
  },

  store,
  render: h => h(App)
}).$mount('#app')
