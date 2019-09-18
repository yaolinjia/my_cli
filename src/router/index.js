import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: "/",
  routes: [{
      path: '/',
      name: 'Home',
      component: () => import("@/views/Home"),
      meta: {
        keepAlive: true
      },
    },
  ],

  //控制滚动条是否滚动到顶部
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  }

})