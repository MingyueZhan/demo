<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    <h2>热门网站</h2>
    <ul>
      <li>
        <a href="https://baidu.com" target="_blank"> 百度 </a>
      </li>
      <li>
        <a
          href="https://sohu.com"
          target="_blank"
        >
         搜狐
        </a>
      </li>
      <li>
        <a
          href="https://sina.com"
          target="_blank"
        >
         新浪
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a href="http://taobao.com" target="_blank">淘宝</a>
      </li>
    </ul>
    <h2>网上交易</h2>
    <ul>
      <li>
        <a
          href="http://dangdang.com/"
          target="_blank"
        >
         当当网
        </a>
      </li>
      <li>
        <a
          href="http://guazi.com/"
          target="_blank"
        >
         瓜子网
        </a>
      </li>
      <li>
        <a
          href="http://jingdong.com/"
          target="_blank"
        >
     京东商城
        </a>
      </li>
      <li>
        <a
          href="https://kuliao.com"
          target="_blank"
        >
    酷聊
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '欢迎来到西安市！'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped="scoped">
		/*一种新的导入样式表的说明*/
			@import url("../style/style.css");
</style>
