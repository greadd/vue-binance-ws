import Vue from 'vue'
import App from './App.vue'
import router from './router'
import miniCore from '@/plugins/miniCore';
import Loader from '@/components/Loader'

Vue.config.productionTip = false

Vue.use(miniCore);
Vue.component('Loader', Loader)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
