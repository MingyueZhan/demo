//这个文件里面是必须要导入vue的 负责会报错  Uncaught ReferenceError: Vue is not defined
import Vue from 'vue'
//引用路由插件
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hello from '@/components/Hello'
import Look from '@/components/Look'
import search from '@/components/search'
import update from '@/components/update'
import delet from '@/components/delete'
//因为在这里用到了vue，使用路由插件
Vue.use(Router)


//配置路由规则
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },{
    	path:'/hello',
    	name:'HelloWorld',
    	component:HelloWorld
    },{
    	path:'/look',
    	name:'Look',
    	component:Look
    },{
    	path:'/search',
    	name:'search',
    	component:search
    },{
    	path:'/update',
    	name:'update',
    	component:update
    },{
    	path:'/del',
    	name:'delete',
    	component:delet
    }
  ]
})
