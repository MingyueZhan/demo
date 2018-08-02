<template>
	<div>{{title}}</div>
</template>

<script>
export default{
  name:'search',
  data (){
    return{
			title:'搜索房屋'
		}
	}
}
</script>
<!--在这里对template中的标签样式设置样式， 注意为了避免影响别的组件，我们这一块最好加上scoped属性--> 
<style scoped="scoped">
	/*在这里我为了方便以后的维护,特意将样式表提取出来*/
	/*使用@inport 导入样式表文件*/
	@import url("../style/search.css" );
</style>