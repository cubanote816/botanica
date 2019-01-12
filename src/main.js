import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import '@mdi/font/css/materialdesignicons.css'
import formLoading from 'vue2-form-loading'

Vue.config.productionTip = false

Vue.use(formLoading)


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
