<template>
  <div id="app">
    <HelloWorld/>
  </div>
</template>
<script>
//导入外部模块
import HelloWorld from './components/main'
import headerss from './components/header'
import footer1 from './components/footer'

//这里是es6中的写法，意思是将花括号里面的内容全部都到导出去。
export default {
//	这里叫做组件注册,当注册多个组件的时候组件与组件之间使用“，”隔开。
  components: {
    HelloWorld,headerss,footer1
  }
}
</script>

<style scoped="scoped">
	@import url("common/css/app.css");
</style>
