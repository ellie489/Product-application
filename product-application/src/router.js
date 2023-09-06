import Vue from 'vue'
import Router from 'vue-router'
import Login from '../components/login.vue'
import Register from '../components/register.vue'
import Products from "../src/components/all-products.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login,

      path: '/register',
      name: 'register',
      component: Register,
    
    path: '/all-products',
    name: 'Products',
    component: Products,
    props: {}
      }
  ]
})