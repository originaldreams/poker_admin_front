import "@/plugins/axios"
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Base64 = require("js-base64").Base64;

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$http=axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
