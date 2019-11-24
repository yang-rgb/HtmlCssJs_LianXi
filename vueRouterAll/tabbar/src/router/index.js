import Vue from 'vue'
import Router from 'vue-router'

const Home=() => import('../views/home/home.vue');
const Category=() => import("../views/category/category");
const Cart=() => import("../views/cart/cart");
const Profile=() => import("../views/profile/profile");


Vue.use(Router)

const routers=[
	{
		path:"",
		redirect:'/home'
	},
	{
		path:"/home",
		component:Home
	},
	{
		path:"/category",
		component:Category
	},
	{
		path:"/cart",
		component:Cart
	},
	{
		path:"/profile",
		component:Profile
	}
]

const router=new Router({
  mode: 'history',
  routers
});

export default router
