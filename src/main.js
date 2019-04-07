import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入css和fastclick库
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
// iconfont库引入
import 'style/iconfont.css'

Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
