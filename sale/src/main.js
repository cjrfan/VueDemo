import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';

import goods from 'components/goods/goods';// 等价于components/goods/goods.vue
import ratings from 'components/ratings/ratings';
import seller from 'components/seller/seller';

import 'common/stylus/index.styl';

// 通过 Vue.use() 安装路由模块
Vue.use(VueRouter);

// Vue.extend(App) 代替new Vue() , 这里Vue.extend 和new Vue 搞不清
let app = Vue.extend(App);

// 创建一个路由器实例
let router = new VueRouter({
  linkActiveClass: 'active' // 设置激活状态的class
});

// 定义路由规则
router.map({
  '/goods': {
    component: goods
  },
  '/ratings': {
    component: ratings
  },
  '/seller': {
    component: seller
  }
});

// 路由器会创建一个 app 实例，并且挂载到选择符 #app 匹配的元素上。
router.start(app, '#app');

// 默认打开页面时 路由跳转
router.go('/goods');
