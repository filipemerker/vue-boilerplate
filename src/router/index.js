import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import About from '../screens/About/About.vue'
import Homepage from '../screens/Homepage/Homepage.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/about', component: About },
    { path: '/', component: Homepage }
  ]
})
