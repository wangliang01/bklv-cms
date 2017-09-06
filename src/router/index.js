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
    name: 'login',

    redirect: "/login"
  },
  // 登录页
  {
    path: '/login',
    name: 'login',
    component: LOGIN
  },
  {
    path: '/test',
    name: 'test',
    component: resolve => {
      return require(['@/pages/home/test'], resolve)
    }
  },
  // 进入主页
  {
    path: '/home',
    name: 'index',
    component: INDEX,
    children: [
      {
        path: '',
        name: 'activityNewsPush',
        redirect: '/activityNewsPush'
      },
      {
        path: '/activityNewsPush',
        name: 'activityNewsPush',
        component: resolve => {
          return require(['@/pages/content_manage/trip_circle_manage/activityNewsPush'], resolve)
        }
      },
      {
        path: '/circleInfoSupervise',
        name: 'circleInfoSupervise',
        component: resolve => {
          return require(['@/pages/content_manage/trip_circle_manage/circleInfoSupervise'], resolve)
        }
      },
      {
        path: '/guideWordIndex',
        name: 'guideWordIndex',
        component: resolve => {
          return require(['@/pages/content_manage/guide-word/index'], resolve)
        }
      },
      {
        path: '/newCreate',
        name: 'newCreate',
        component: resolve => {
          return require(['@/pages/content_manage/guide-word/newCreate'], resolve)
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
// router.beforeEach((to, from, next) => {
//   if (to.path!=='/login' && !com.getCookie('token')) {
//     next({name: 'login'});
//   } else {
//     next();
//   }
// });

export default router;
