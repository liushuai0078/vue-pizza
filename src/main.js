import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import axios from 'axios'
import {routes} from './routers.js'
import {store} from './store/store.js'
Vue.use(VueRouter)
//配置默认根路径
axios.defaults.baseURL = 'https://wd1695319840sjftof.wilddogio.com/'

//配置  Vue 原型(在任何组件中都可以正常使用axios)
Vue.prototype.http = axios

const router = new VueRouter({
  routes,
 
  mode:'history',
  scrollBehavior (to, from, savedPosition) {
    // return { x: 0, y: 100 }
    // return {selector:'.btn'}
    // if (savedPosition){
    //   return savedPosition
    // }else{
    //   return {x:0,y:0}
    // }
  }
})

//全局守卫
// router.beforeEach((to,from,next)=>{
//  alert('还没有登陆,请先登录');
//   next();
  // console.log(to); 
  //判断 store.gettes.isLogin == false
//   if(to.path == '/login' || to.path == '/register'){
//     next();
//   }else{
//     alert('还没有登陆,请先登录');
//     next('/login')
//   }
// })


// 后置钩子
// router.afterEach((to,from) =>{
//   alert('after each')
// })
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
