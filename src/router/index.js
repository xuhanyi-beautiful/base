import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    nanme: 'Home',
    component: () => import('../views/home/HomeComponent.vue')
  },
  {
    path: '/login',
    nanme: 'Login',
    component: () => import('../views/login/LoginComponent.vue')
  },
  {
    path: '/register',
    nanme: 'Register',
    component: () => import('../views/register/RegisterComponent.vue')
  },
  {
    path: '/cart',
    nanme: 'Cart',
    component: () => import('../views/cart/CartComponent.vue')
  },
  {
    path: '/order',
    nanme: 'Order',
    component: () => import('../views/order/OrderComponent.vue')
  },
  {
    path: '/createaddress',
    nanme: 'CreateAddress',
    component: () => import('../views/mine/CreateAddress.vue')
  },
  {
    path: '/addressmanagement',
    nanme: 'AddressManagement',
    component: () => import('../views/mine/AddressManagement.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
