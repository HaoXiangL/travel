import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入css和fastclick库
import fastClick from 'fastclick'
import './assets/style/reset.css'
import './assets/style/border.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
