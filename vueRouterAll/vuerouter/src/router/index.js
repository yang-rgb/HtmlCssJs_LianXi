import Vue from "vue"
import VueRouter from "vue-router"

// import Home from '../components/Home'
// import About from '../components/About'
// import User from '../components/User'

const Home=()=> import('../components/Home');
const About=()=> import('../components/About');
const User=()=> import('../components/User');
const Homenew=()=> import('../components/Homenew');
const HomeMessage=()=> import('../components/HomeMessage');
const profile=()=> import('../components/profile');

Vue.use(VueRouter);

const routes=[
	{
		path:'/',
		redirect:'/home'
	},
	{
		path:'/home',
		component:Home,
		meta:{
			title:"首页"
		},
		children:[
			{
				path:"",
				redirect:'news'
			},
			{
				path:"news",
				component:Homenew
			},
			{
				path:"message",
				component:HomeMessage
			}
		]
	},
	{
		path:'/about',
		component:About,
		meta:{
			title:"关于"
		}
	},
	{
		path:'/user/:id',
		component:User
	},
	{
		path:'/profile',
		component:profile
	}
]

const router=new VueRouter({
	routes,
	mode:"history",
	linkActiveClass:'active'
	
});

router.beforeEach((to,from,next)=>{
	document.title=to.matched[0].meta.title;
	next()
})
router.afterEach((to,from)=>{
	console.log("----")
})

export default router