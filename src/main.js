// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//模板（安装方式npm i element-ui -S）
import ElementUI from 'element-ui';
//样式文件
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.config.productionTip = false
//使用vue插件
Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
