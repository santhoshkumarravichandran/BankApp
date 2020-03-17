import Vue from 'vue'
import BankApp from './landing.vue'

import VueRouter from 'vue-router';
import Routes from './routes'

import VueResources from 'vue-resource';
Vue.use(VueResources);

const router = new VueRouter({
 routes: Routes
});

Vue.use(VueRouter)

new Vue({
  el: '#bank-app',
  render: h => h(BankApp),
  router: router
})
