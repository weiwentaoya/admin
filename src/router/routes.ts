import Home from '@/views/home/index.vue'
import Login from '@/views/login/index.vue'
import NotFound from '@/views/404/index.vue'

const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    children: [
      {
        path: '/User',
        component: import('@/views/Acl/User/index.vue'),
        name: 'User',
      },
      {
        path: '/Role',
        component: import('@/views/Acl/Role/index.vue'),
        name: 'Role',
      },
      {
        path: '/Permission',
        component: import('@/views/Acl/Permission/index.vue'),
        name: 'Permission',
      },
    ],
  },
  { path: '/login', component: Login, name: 'Login' },
  { path: '/404', component: NotFound, name: '404' },
  // { path: '/:pathMatch(.*)*', redirect: '/404', name: 'NotFound' },
]
export default routes
