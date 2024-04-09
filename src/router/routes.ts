import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('src/pages/login/Login.vue'),
  },
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/IndexPage.vue'),
      }, {
        path: 'project',
        redirect: () => {
          return '/project/list'
        },
        children: [{
          path: 'list',
          component: () => import('pages/project/ProjectList.vue'),
        }, {
          path: ':projectId',
          redirect: () => {
            return '/project/:projectId/overview'
          },
          children: [{
            path: 'overview',
            component: () => import('pages/project/ProjectOverview.vue'),
          }, {
            path: 'transaction',
            component: () => import('pages/project/ProjectTransaction.vue'),
          }],
        }],
      }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]
export default routes
