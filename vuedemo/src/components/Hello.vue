<template>
	<div>
	<h1>{{msg}}</h1>
	</div>
	 
</template>

<!--然后这个script的做用是将本模板加载进去-->
<script>
export default {
  name: 'Hello',
  data (){
    return {
  				  msg: '我们这里是高新区！'
  			}
  		}
}
</script>

<!--这个style的意思是将样式适用于template中的标记  注意这里面有一个非常重要的属性叫做 scoped 表示的是此样式表只适用于当前这个vue文件-->
<style type="text/css" scoped="scoped">
	
	div{
		background-color: aqua;
	}
</style>