import { createRouter, createWebHistory } from 'vue-router'
import ViewIndex from '../views/index.vue'

const routes = [
  {
    path: '/',
    name: 'view-index',
    component: ViewIndex
  },
  {
    path: '/todos',
    name: 'view-todos',
    component: () => import( '../views/todos.vue' )
  },
  {
    path: '/posts',
    name: 'view-posts',
    component: () => import( '../views/posts.vue' )
  }
]

const router = createRouter( {
  history: createWebHistory( process.env.BASE_URL ),
  routes
} )

export default router