import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import 'vuetify/src/stylus/app.styl'

Vue.use(Vuetify, {
  iconfont: 'md',
  theme: {
    primary: '#4caf50',
    secondary: '#ffeb3b',
    accent: '#3f51b5',
    error: '#f44336',
    warning: '#ffeb3b',
    info: '#03a9f4',
    success: '#4caf50'
  }
})
