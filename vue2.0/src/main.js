// 1.0 导入vue核心包
import Vue from 'vue';

// 2.0 导入App.vue的vue对象
import App from './App.vue';

// 3.0 将vue-router集成到这个项目中来
import vueRouter from 'vue-router';
import moment from 'moment';
import vueresource from 'vue-resource';
import VuePreview from 'vue-preview';
Vue.use(VuePreview)
// 3.0.1 将vueRouter对象绑定到Vue对象上
Vue.use(vueRouter);
Vue.use(vueresource);
Vue.filter('datafmt',function (value,datastring) {
    return moment(value).format(datastring);
})
Vue.http.options.xhr = { withCredentials: true }

// 3.0.2 导入路由规则对应的组件对象
// import login from './components/account/login.vue';
// import register from './components/account/register.vue';
import home from './components/home.vue';
import newslist from './components/news/newlist.vue'
import  newsinfo from './components/news/newsinfo.vue'
import photolist from './components/photo/photolist.vue'
import  photoinfo from './components/photo/photoinfo.vue'
import goodslist from './components/goods/goodslist.vue'
import goodsinfo from './components/goods/goodsinfo.vue'
import goodsdesc from './components/goods/goodsdesc.vue'
import goodscomment from './components/goods/goodscomment.vue'
import car from './components/shopcar/car.vue'
var router1 = new vueRouter({
    linkActiveClass: 'mui-active',
	routes:[
		{path:'/',redirect:'/home'},
		{path:'/home',component:home},
		{path:'/news/newslist',component:newslist},
		// {path:'/news/newsinfo/:id',component:newsinfo}
        {path:'/news/newsinfo',component:newsinfo},
        {path:'/photo/photolist',component:photolist},
		{path:'/photo/photoinfo/:id',component:photoinfo},
        {path:'/goods/goodslist',component:goodslist},
		{path:'/goods/goodsinfo',component:goodsinfo},
		{path:'/goods/goodsdesc',component:goodsdesc},
		{path:'/goos/goodscomment',component:goodscomment},
		{path:'/shopcar/car',component:car},
	]
	});


// 4.0 注册mint-ui
// 导入mint-ui的css文件
import 'mint-ui/lib/style.min.css';
// 导入mint-ui组件对象
import mintui from 'mint-ui';
// 在Vue中全局使用mintui
Vue.use(mintui);

// 5.0 注册mui的css样式
import '../statics/mui/css/mui.css';
// 6.0导入全局的css样式
import '../statics/css/site.css'
// 7.引入vue-resource注入$http来进行ajax的访问

new Vue({
	el:'#app',

    // 使用路由对象实例
	router:router1,
	// render:function(create){create(App)} //es5的写法
	render:c=>c(App)  // es6的函数写法 =>：goes to
});