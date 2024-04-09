import { route } from 'quasar/wrappers'
import {
  createMemoryHistory,
  createRouter,
  createWebHashHistory,
  createWebHistory,
} from 'vue-router'

import routes from './routes'
import { useHeadBarStore } from 'stores/headBar'

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function(/* { store, ssrContext } */) {
  const headBarStore = useHeadBarStore()
  const createHistory = process.env.SERVER
    ? createMemoryHistory
    : process.env.VUE_ROUTER_MODE === 'history'
      ? createWebHistory
      : createWebHashHistory

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE),
  })
  Router.beforeEach((to, form, next) => {
    // 是一个list 不显示 headbar
    // 后续把不显示header的进行枚举，把这个路由首位单独放出去
    console.log('路由守卫', to.fullPath, to.fullPath.indexOf('/list') > 0, to.fullPath.split('/')[1], 'headBarStore.setCurrentHeader')
    if (to.fullPath.indexOf('/list') > 0) {
      headBarStore.setCurrentHeader('')
    } else {
      headBarStore.setCurrentHeader(to.fullPath.split('/')[1])
    }
    next()
  })
  return Router
})
