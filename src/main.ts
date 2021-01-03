import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'vue-swatches/dist/vue-swatches.css'
import 'ant-design-vue/dist/antd.css'
import VueConfetti from 'vue-confetti'

Vue.config.productionTip = false

Vue.use(Antd)
Vue.use(VueConfetti)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
