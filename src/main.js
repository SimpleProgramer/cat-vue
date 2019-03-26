// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vant from 'vant';
import Toast from 'vant';
import global from './global/globalVar.js'
import axios from 'axios'
import * as socketApi from './socket'
import Qs from 'qs'
import 'vant/lib/index.css';

Vue.use(Vant);
Vue.use(Toast);
Vue.prototype.global = global
Vue.prototype.axios = axios
Vue.prototype.qs = Qs
Vue.prototype.socketApi = socketApi
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
