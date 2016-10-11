import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './pages/Home'
import User from './pages/User'
import Comments from './pages/Comments'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: 'vue-hackernews',
  routes: [
    {
      name: 'home',
      path: '/',
      redirect: {
        name: 'news',
        params: { page: 1 }
      }
    },
    {
      name: 'user',
      path: '/user/:id',
      component: User
    },
    {
      name: 'news',
      path: '/news/:page',
      component: Home
    },
    {
      name: 'comments',
      path: '/comments/:id',
      component: Comments
    }
  ]
})

export default router
