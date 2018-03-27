import Vue from 'vue'
import Router from 'vue-router'

import Login from '../components/Login'
import Home from '../components/Home'
import GoodsList from '../components/GoodsList'
import GoodsDetail from '../components/GoodsDetail'
import ShoppingCart from '../components/ShoppingCart'

import Test from '../components/test'


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/goodsList',
      name: 'GoodsList',
      component: GoodsList
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    },
    {
      path: '/shoppingCart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/test',
      name: 'Test',
      component: Test
    }
  ]
})
