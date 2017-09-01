import Vue from "vue";
import VueRouter from "vue-router";
import com from '../common/common'

const LOGIN = resolve => require(['@/pages/login'], resolve);
const INDEX = resolve => require(['@/pages/home/index'], resolve);

Vue.use(VueRouter);
/*
* path: 路径名称
* name: 名称
* hidden: 菜单是否隐藏
* component: 组件，
* icon: 对应图标
*/
const routes = [
  {
    path: '/',
    redirect: "/login"
  },
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: LOGIN
  },
  // 进入主页
  {
    path: '/home',
    name: 'index',
    component: INDEX,
    children: [
      {
        path: '',
        redirect: '/activityNewsPush'
      },
      {
        path: '/activityNewsPush',
        component: resolve => {
          return require(['@/pages/content_manage/trip_circle_manage/activityNewsPush'], resolve)
        }
      }
    ]
  },

];

const router = new VueRouter({
  // mode: "history",
  // base: "/audit",
  routes: routes
});

// 路由钩子
router.beforeEach((to, from, next) => {
  if (to.path!=='/login' && !com.getCookie('token')) {
    next({name: 'login'});
  } else {
    next();
  }
});

export default router;
