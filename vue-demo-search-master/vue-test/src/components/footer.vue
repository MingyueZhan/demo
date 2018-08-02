<template>
	<div id="footer1">
		<p v-html="message"></p>
	</div>
</template>

<script>
export default{
	data(){
		return{
			message:"<h1>我是尾部信息</h1>"
		}
	}
}
</script>

<style>
</style>