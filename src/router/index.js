import Vue from 'vue'
import Router from 'vue-router'
import rentalList from '@/components/rentalList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rental-list',
      name: 'rentalList',
      component: rentalList
    }
  ]
})
