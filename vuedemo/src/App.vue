<template>
  <div id="app">
  	<div id="head">
  		房屋租赁管理系统
  	</div>
  	<div id="center" class="center">
  		<div id="left">
  			<ol>
  			<li><router-link to="/look">查看房源</router-link></li>
				<li><router-link to="/search">查找房源</router-link></li>
				<li><router-link to="/update">修改房源</router-link></li>
				<li><router-link to="/del">删除房源</router-link></li>	
  			</ol>	
  		</div>
  		
  		<div id="right">
  			<router-view/>
  		</div>
  	</div>
  	
  	
    <div id="footer">
    Copyright&copy;2018 kuliao.com Inc All Rights Reserved 酷聊智能 版权所有
    </div>
  </div>
</template>



<script>
//	import Hello from './components/Hello'
export default {
  name: 'App'
}
</script>



<style>
	@import url("style/app.css");
</style>
