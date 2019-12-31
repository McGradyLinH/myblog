// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import ElementUI  from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import NormailizeCss from 'normalize.css'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon'

import axios from 'axios'

Vue.use(ElementUI)

axios.defaults.baseURL='/blog'
Vue.prototype.$axios = axios


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
