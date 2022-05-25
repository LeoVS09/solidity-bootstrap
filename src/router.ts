import * as Router from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'

export default Router.createRouter({
  history: Router.createWebHistory(import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    }
  ]
})