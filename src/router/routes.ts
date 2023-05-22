import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/404/index.vue'

const routes = [
  { path: '/', component: Home, name: 'Home' },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/404', component: NotFound, name: '404' },
  { path: '/:pathMatch(.*)*', redirect: '/404', name: 'NotFound' },
]
export default routes
