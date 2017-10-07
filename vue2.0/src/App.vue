<!-- 以后项目的根组件 -->
<template>
	<div>
		<mt-header title="vue2.0练习">
			<mt-button icon="back" slot="left" @click="back" v-if="isshow">返回</mt-button>
		</mt-header>

		<router-view></router-view>
		<!--利用mui里的tablebar制作底部导航栏12312312-->
		<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item " to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-chat">
				<span class="mui-icon mui-icon-email"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item" to="/shopcar/car">
				<span class="mui-icon mui-icon-contact"><span class="mui-badge">0</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item" to="/tabbar-with-map">
				<span class="mui-icon mui-icon-gear"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
	</div>
</template>

<script>
// 按需导入
//	import {add} from './calc.js';
//
//	import { Toast } from 'mint-ui';

	// 负责导出 .vue这个组件对象(它本质上是一个Vue对象,所以Vue中该定义的元素都可以使用)
	// function add(x,y){console.log(x+y)}	
	// module.exports = {  //es5的导出对象的写法
import {vm,COUNTSTR} from './components/kits/vue'
		vm.$on(COUNTSTR,function (number) {
			console.log(number);

			var badage=document.querySelector('.mui-badge');
			badage.innerText=parseInt(badage.innerText)+number;
		})
	export default{  // es6的导出对象的写法
		data(){  //等价于 es5的 data:function(){
			return {
				msg :'hello vuejs111111',
                isshow:false,

			}
		},
		watch:{
		  '$route':function (newroute,oldroute) {
		      console.log(newroute)
			  if(newroute.path=="/home")
			  {
			      this.isshow=false;
			  }
			  else {
		          this.isshow=true;
			  }

          }
		},
		methods:{
//			getImage(){
//			    var url='http://www.baidu.com';
//			    this.$http.get(url).then(function (res,) {
//
//                })
//			}
            back(){
                //vue-router的方法
                this.$router.go(-1);
			}

		},
		created(){

		},
	}
</script>

<style scoped>
/*当前页面的css样式写到这里，其中scoped表示这个里面写的css代码只是在当前组件页面上有效，不会去影响到其他组件页面*/
	.red{
		color: red;
	}
</style>