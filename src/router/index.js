import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Blog from '../screens/Blog/Blog.vue'
import Post from '../screens/Blog/screens/Post/Post.vue'
import About from '../screens/About/About.vue'
import Homepage from '../screens/Homepage/Homepage.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/blog', component: Blog },
    { path: '/blog/post/:id', component: Post },
    { path: '/about', component: About },
    { path: '/', component: Homepage }
  ]
})
