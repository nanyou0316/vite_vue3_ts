import { createRouter, createWebHashHistory } from 'vue-router'

// import Home from '../views/home.vue'
const Home = ()=>import('../views/home.vue')
import Home1 from '../views/home1.vue'
import Home2 from '../views/home2.vue'
import About from '../views/about.vue'
import Detail from '../views/detail.vue'
import Login from '../views/login.vue'
import NotFound from '../views/notFound.vue'
const routes: any = [
  {
    path: '/home',
    name: 'home',
    alias: '/myHome', //路径别名
    component: Home,
    redirect: '/home/home1',
    children: [
      {
        path: '/home/home1',
        component: Home1,
      },
      {
        path: 'home2', //这种写法等价于 path: '/home/home1',
        component: Home2,
      },
    ],
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/login',
    name:'login',
    component: Login,
  },
  {
    // path: '/detail/:id',
    //  传参
    // 1 router.push(`/detail/${item}`) 
    // 2  router.push({
    //   name:'detail',
    //   params:{
    //     id:item
    //   }
    // })
    path: '/detail',
    name:'detail',
    component: Detail,
  },
  {
    path: '/',
    // redirect:'/home'
    redirect: {
      name: 'home',
    },
  },
  {
    path: '/:pathmMatch(.*)*',
    name: 'NotFound',
    component: NotFound,
  },
]
const router = createRouter({
  history: createWebHashHistory(),
  routes,
})
function isAuth(): boolean {
  return true
}
router.beforeEach((to, from, next) => {
  if (to.name != 'login' && !isAuth()) {
    next({
      name: 'login',
    })
  } else {
    next()
  }
})
export default router
