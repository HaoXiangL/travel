import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入css和fastclick库
import fastClick from 'fastclick'
import 'style/reset.css'
import 'style/border.css'
// iconfont库引入
import 'style/iconfont.css'
// vueawesomeswiper库引入(轮播)
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
