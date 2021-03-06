// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import $ from 'jquery'
import axios from '@/util/axios/axios'
// import api from '@/util/axios/allapi'

// Vue.prototype.$api=api

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './assets/rest.css'
import VueVideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

Vue.use(VueVideoPlayer)
Vue.use(ElementUI);




Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
