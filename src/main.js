import Vue from 'vue'
import routers from './router/index.js'   
import App from './App.vue'   

// Vue.use(VueValidator) 

const router = routers

new Vue({
  el: '#root',
  router,
  // store,
  render: h => h(App)  //渲染你引入的App组件
})

