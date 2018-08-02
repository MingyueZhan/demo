// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

//引用vue
import Vue from 'vue'
//引用入口文件为App.vue文件
import App from './App'
//引用路由配置文件
import router from './router' 

//解释一下上面那句话
/*不是 vue 的规定，而是 node 加载模块的方式，
当你 require('./router') (import 会被转换成 require)，node 是这样寻找目标的：
首先寻找当前目录下有没有 router.js 或 router.node，如果有就导入
如果没有，看是否有 router 目录，如果没有，这个 require() 就失败了，会抛出异常 'Cannot find module './router'
如果有 router 目录，在其下寻找 package.json 文件，如果有，按照 package.json 的配置来导入
如果没有 package.json，看是否有 index.js 或 index.node，如果有就导入，没有就失败*/

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
    // 记得要通过 router配置参数注入路由， 加载路由 
    // 从而让整个应用都有路由功能  
  router,
  components: { App },
  template: '<App/>'
})
