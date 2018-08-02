// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
//导入vue模块
import Vue from 'vue'
//导入vue组件
import App from './App'
//导入vue模块
import  VueResource  from 'vue-resource'
Vue.use(VueResource);


Vue.config.productionTip = false  
//用法：设置为 false 以阻止 vue 在启动时生成生产提示。

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount('#app')   

//vue 对象会查找当前对象中是否会有el属性 如果没有就去找  .$mount('#app') 来实现挂载 

//render函数是渲染一个视图，然后提供给el挂载 ，如果没有render那页面什么都不会出来 
//h => h(App) 这句话的意思是需要用App来渲染视图

