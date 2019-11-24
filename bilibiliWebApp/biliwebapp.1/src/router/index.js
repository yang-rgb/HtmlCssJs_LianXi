import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location) {
  return originalPush.call(this, location).catch(err => err)
}



const Home=()=>import("@/views/Home/Home.vue");
	const zhibo=()=>import("@/views/Home/zimulu/zhibo/zhibo");
	const tuijian=()=>import("@/views/Home/zimulu/tuijian/tuijian");
	const remen=()=>import("@/views/Home/zimulu/remen/remen");
	const zhuifan=()=>import("@/views/Home/zimulu/zhuifan/zhuifan");
	const yingshi=()=>import("@/views/Home/zimulu/yingshi/yingshi");
	const nian=()=>import("@/views/Home/zimulu/nian/nian");	

const dongtai=()=>import("@/views/dongtai/dongtai.vue");
const huiyuangou=()=>import("@/views/huiyuangou/huiyuangou.vue");
const pindao=()=>import("@/views/pindao/pindao.vue");
const sousuoye=()=>import("@/views/Home/sousuo/sousuoye.vue");

const bofangye=()=>import("@/components/bofang/bofang");

const routes = [
	{
		path: '/',
		redirect: '/home'
	},
	{
		path: '/home',
		component: Home,
		children:[
			{
				path:"",
				redirect:"tuijian"
			},
			{
				path:"zhibo",
				component:zhibo,
				meta:{index:0}
			},
			{
				path:"tuijian",
				component:tuijian,
				meta:{index:1}
			},
			{
				path:"remen",
				component:remen,
				meta:{index:2}
			},
			{
				path:"zhuifan",
				component:zhuifan,
				meta:{index:3}
			},
			{
				path:"yingshi",
				component:yingshi,
				meta:{index:4}
			},
			{
				path:"nian",
				component:nian,
				meta:{index:5}
			},
			
		]
	},
	{
		path: '/dongtai',
		component: dongtai
	},
	{
		path: '/huiyuangou',
		component: huiyuangou
	},
	{
		path: '/pindao',
		component: pindao
	},
	{
		path: '/sousuo',
		components: {
			default:Home,
			sousuo:sousuoye
		}
	},
	{
		path: '/bofang', 
		components: {
			
			bofang:bofangye
		}
		
	}
	
]

const router = new VueRouter({
  // mode: 'history',
  routes
})

export default router
