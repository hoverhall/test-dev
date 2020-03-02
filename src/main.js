import Vue from 'vue'
import App from './App.vue'
import axios from "axios";
import VueAxios from "vue-axios";
import Routes from './routes.js';
import VueRouter from 'vue-router';

Vue.use(VueAxios, axios, VueRouter)

import Vue from 'vue';

// We create the router instance here.
const router = new VueRouter({
  routes: Routes
});

// The usual app stuff goes here.
new Vue({
  router,
  render: h => h(App)
}).$mount('#app');

// new Vue({
//   el: '#app',
//   render: h => h(App)
// })
