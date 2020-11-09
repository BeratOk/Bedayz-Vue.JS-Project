import Vue from 'vue'
import VueRouter from 'vue-router'
import bedayz1 from '../components/bedayz1.vue'
import bedayz2 from '../components/bedayz2.vue'
import bedayz3 from '../components/bedayz3.vue'
import bedayz4 from '../components/bedayz4.vue'
import bedayz5 from '../components/bedayz5.vue'
import bedayz6 from '../components/bedayz6.vue'
import bedayz7 from '../components/bedayz7.vue'
import bedayz8 from '../components/bedayz8.vue'
import bedayz9 from '../components/bedayz9.vue'
import bedayz10 from '../components/bedayz10.vue'
import isimsoyisim from '../components/isimsoyisim.vue'

Vue.use(VueRouter)

const routes = [
  {
   path:'/bedayz1',
   name:'BEDAYZ',
   component:bedayz1
  },
  {
    path:'/bedayz2',
    name:'BEDAYZ',
    component:bedayz2
   },
   {
    path:'/bedayz3',
    name:'BEDAYZ',
    component:bedayz3
   },
   {
    path:'/bedayz4',
    name:'BEDAYZ',
    component:bedayz4
   },
   {
    path:'/bedayz5',
    name:'BEDAYZ',
    component:bedayz5
   },
   {
    path:'/bedayz6',
    name:'BEDAYZ',
    component:bedayz6
   },
   {
    path:'/bedayz7',
    name:'BEDAYZ',
    component:bedayz7
   },
   {
    path:'/bedayz8',
    name:'BEDAYZ',
    component:bedayz8
   },
   {
    path:'/bedayz9',
    name:'BEDAYZ',
    component:bedayz9
   },
   {
    path:'/bedayz10',
    name:'BEDAYZ',
    component:bedayz10
   },

  {
    path:'/deneme',
    name:'Deneme',
    component:bedayz2
   },
   {
    path:'/',
    name:'Mainpage',
    component:isimsoyisim
   },
  
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
