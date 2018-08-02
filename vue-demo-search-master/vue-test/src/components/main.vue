<template>
	 <div>
	 <header1 @getindex='getIndex'/>
	 <div class="search-input">
	 		<!--这里先写一个文本框。-->
	 		<!--然后使用v-model 指令来双向绑定文本框中的数据  -->
	 		<!--当我们按下enter键的时候触发search() ,同样的当我们使用down建来浏览列表项的数据时候此时会触发selectDown()
	 		在我们按下up键的时候，浏览器会触发selectUp()方法。-->
	 		<input type="text"  v-model="keyword" @keyup="get($event)" @keydown.enter="search()" @keydown.down="selectDown()" @keydown.up.prevent="selectUp()"/>
	 		<!--接下来写一个小叉叉，用来消除文本框中的关键词。-->
	 		<span class="search-reset" @click="clearInput()">&times;</span>
	 		<!--下来是一个按钮用于提交关键词-->
	 		<button class="search-btn" @click="search()">搜一下</button>
	 		<!--我们知道@keyup函数是用于即时搜索的，接下来我们要遍历并显示即时搜索的内容并且把内容显示在下拉列表框中-->
	 		<div class="search-select" >
	 		      <transition-group name="itemfade" tag="ul" v-cloak mode="out-in">
	 		      		<li v-for="(value,index) in myData" :class="{selectback:index==now}"  @mouseover="selectHover(index)" @click="selectClick(index)" :key="value" class="search-select-option search-select-list">
	 		      			{{value}}
	 		      		</li>
	 		      </transition-group>
	 		</div>
	 </div>
	 <!--<div>
	 	{{data1}}
		<a :href="url" :target="target">百度一下，你就知道</a>
		v-bind指令用于给HTML的标记动态的赋值。
		接下来解释v-show 指令  由此可以看出v-show指令是用来根据条件显示判断是否显示标记的、
		<p  v-show="haha&&xixi">这是标题吗？</p>
		接下来是关于事件的使用。
		<button @click="clickMe">点我向你问候一下</button>
		<span>这个按钮被点击了{{count}}</span>
		<!--在进行一些逻辑计算的时候建议使用computed来代替methods或者是 直接在字符串中进行处理。这是因为在computed中是自带getter方法的。-->
		 <!--默认的情况下computed是没有setter方法的，然而当我们需要的时候这些我们也可以提供一个setter方法。-->
		 
	 </div>
	 </div>
</template>

<script>
//	内部导入模块
import header1 from './header'
export default {
//	注册组件
	components:{
		header1,
	},
	data (){
		return{
//			data1:'我是中国人',
//			url:'https://www.baidu.com',
//			target:'_blank',
//			haha:true,
//			xixi:false,
//			count:0,
			myData:[], //用来接收ajax接收到的数据
			keyword:'',//用来绑定文本框中的值
			now:-1,  //用来设置当前的下来列表的数据的位置
			searchIndex:0,
			logoData:[{
				name:'360搜索',
				searchSrc:'https://www.so.com/s?ie=utf-8&shb=1&src=360sou_newhome&q='
			},{
				name:'百度搜索',
				searchSrc:'https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=0&rsv_idx=1&tn=baidu&wd='
			},{
				name:'搜狗搜索',
				searchSrc:'https://www.sogou.com/web?query='
			}]
		}
	},
	methods:{
//		clickMe: function(){
			//给当前的data里面的值加1
//			this.count += 1;	
//			vue 中使用const来定义变量
//			const hello = "hello";
//			window.alert(hello);
//		}
	get:function(ev){
		if(ev.code==38||ev.code==40){
			return;
		}
//		除此之外就会发送ajax请求
    this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword + '&encodein=utf-8&encodeout=utf-8').then(function(res) {
        this.myData = res.data.s;
    });
	},
	selectDown: function(){
		this.now++;
		if(this.now==this.myData.length){
			this.now = 0;
		}
		this.keyword = this.myData[this.now];
	},
	selectUp:function(){
		  this.now--;
    //同上
    if (this.now == -1) {
        this.now = this.myData.length - 1;
    }
    this.keyword = this.myData[this.now];
	},
	search:function(){
//		打开搜索界面
		 window.open(this.logoData[this.searchIndex].searchSrc + this.keyword);
	},
	clearInput: function(){
		  this.keyword = '';
		  this.$http.jsonp('https://sug.so.360.cn/suggest?word=' + this.keyword+ '&encodein=utf-8&encodeout=utf-8').then(function(res) {
                this.myData = res.data.s;
      });
	},
	selectHover: function(index){
//		当选中鼠标悬停的list下拉列表的时候,此时将选中的列表项复制给now
		this.now = index;
	},
	selectClick: function(index){
//		当鼠标单击下拉列表中的内容的时候,此时将下拉列表框的内容赋值给用于提供给用户的输入文本框.
		this.keyword = this.myData[index];
//		然后开启搜索,调用本次定义的search（）方法即可实现。
		this.search();
	},
	getIndex: function(index){
		this.searchIndex =  index;
	}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*这一块是关于搜索整体的样式设置*/
.search-input {
    height: 45px;
    width: 600px;
    margin: 0 auto;
    margin-top: 10px;
    position: relative;
}
/*input文本输入框的样式设置*/
.search-input input {
    border: 1px solid #e4e4e4;
    box-sizing: border-box;
    width: 500px;
    height: 45px;
    font-size: 18px;
    float: left;
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
}	
/*接下来设置搜一下按钮的样式*/	
.search-btn {
    height: 45px;
    width: 100px;
    border: 1px solid mediumseagreen;
    background-color: mediumseagreen;
    color: white;
    font-size: 16px;
    font-weight: bold;
    float: left;
    cursor:pointer
}

/*接下来设置小叉叉的样式*/
.search-reset {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 12px
}
.search-select {
    position: absolute;
    top: 45px;
    width: 500px;
    box-sizing: border-box;
    z-index: 999;
}

.search-select li {
    border: 1px solid #d4d4d4;
    border-top: none;
    border-bottom: none;
    background-color: #fff;
    width: 100%
}

.search-select-option {
    box-sizing: border-box;
    padding: 7px 10px;
}
.search-select-list {
    transition: all 0.5s
}

/*当前选中内容的背景颜色设置*/
.selectback {
	/*加入了!important是为了覆盖父组件的样式*/
    background-color: #eee !important;  
    cursor: pointer
}

input::-ms-clear {
    display: none
}

.search-reset {
    width: 21px;
    height: 21px;
    position: absolute;
    display: block;
    line-height: 21px;
    text-align: center;
    cursor: pointer;
    font-size: 20px;
    right: 110px;
    top: 12px
}




/*定义过渡时的开始状态在元素被插入之前有效,在元素被插入之后的下一帧移除*/
.itemfade-enter,
/*定义离开过渡生效时的状态,在整个离开过渡的阶段中应用,在离开过渡被触发时立即生效*/
.itemfade-leave-active {
    opacity: 0;
}

.itemfade-leave-active {
    position: absolute;
}

.search-select ul{margin:0;text-align: left; }
</style>
