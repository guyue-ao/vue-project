// 向外暴露路由器模块

import Vue from 'vue'
import VueRouter from 'vue-router'
//声明使用vue插件
Vue.use(VueRouter)
import routes from './routes.js'
export default new VueRouter({
  mode:'history',// 路由路径没有#
  //项目中所有的路由
  routes
})