// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

//导入vue-router
import VueRouter from 'vue-router'

Vue.config.productionTip = false

//声明要使用vueRouter
Vue.use(VueRouter);




/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})

new Vue({
  el: '#content',
  components: { App },
  template: '<App/>'
})
