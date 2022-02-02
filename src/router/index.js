import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Library from '../views/Library.vue'
import SingleBook from '../views/SingleBook.vue'
import ReadingList from '../views/ReadingList.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Library',
    name: 'Library',
    component: Library,
  },
  {
    path: '/Library/:id',
    name: 'SingleBook',
    component: SingleBook,
    props: true
  },
  {
    path: '/ReadingList',
    name: 'ReadingList',
    component: ReadingList,
    props: true
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
