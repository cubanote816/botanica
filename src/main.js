import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import axios from 'axios'
import store from './vuex/store'
import './registerServiceWorker'
import '@mdi/font/css/materialdesignicons.css'
import formLoading from 'vue2-form-loading'
import VueAwesomeSwiper from 'vue-awesome-swiper';
import NProgress from 'nprogress';
import VueLodash from './plugins/VueLodash';

Vue.config.productionTip = false

Vue.use(formLoading)

Vue.use(VueAwesomeSwiper)

Vue.use(VueLodash)

router.beforeResolve((to, from, next) => {
  if (to.name) {
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  NProgress.done()
})

// Authorization header
axios.interceptors.request.use(function (config) {
  config['headers'] = {
    Authorization: 'Bearer ' + localStorage.getItem('access_token'),
    Accept: 'application/json',
  }
  return config
}, error => Promise.reject(error))

// Show toast with message for non OK responses
axios.interceptors.response.use(response => response, error => {
  store.dispatch('addToastMessage', {
    text: error.response.data.message || 'Request error status: ' + error.response.status,
    type: 'danger'
  })
  return Promise.reject(error)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
