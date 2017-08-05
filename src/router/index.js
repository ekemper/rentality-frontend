import Vue from 'vue'
import Router from 'vue-router'
import rentalList from '@/components/rentalList'
import rentalDetails from '@/components/rentalDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/rentals',
      name: 'rentalList',
      component: rentalList
    },
    {
      path: '/rental/:rentalId',
      name: 'rentalDetails',
      component: rentalDetails
    },
    { path: '*', redirect: '/rentals' }
  ]
})
