import Vue from 'vue'   //引入vue
import Router from 'vue-router'   //引入vue-router

Vue.use(Router)     //单独引用时，不必写
import Header from '../components/Header'  
import Index from '../components/Index'   
import Right from '../components/Right'

export default new Router({
    mode: 'history',      //history 模式,跳转无须重新加载页面。最后后端要相应配置好防止404
    scrollBehavior: () => ({ y: 0 }),   //滚动行为
    routes: [
        {    //动态路径参数 以冒号开头，使用组件来渲染（动态路由匹配）
            path: '/home',  component: Header,
            children: [  //在嵌套的出口中渲染组件，需要在 VueRouter 的参数中使用 children 配置
                { path: '', component: Index }
            ]
        },
        { path: '*', redirect: '/home' }   //重定向，访问的是/home
    ]
})



    
