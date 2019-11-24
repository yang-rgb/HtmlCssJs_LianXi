<template>
  <div id="app">
	  <router-view></router-view>
   <tabbar>
	 <tabbarItem path="/home">
		 <img slot="item-icon" src="./assets/img/tabbar/首页.png" />
		 <img slot="item-icon-active" src="./assets/img/tabbar/首页1.png" />
		 <div slot="item-text">首页</div>
	 </tabbarItem>
	 <tabbarItem path="/category">
	 		 <img slot="item-icon" src="./assets/img/tabbar/分类.png" />
			 <img slot="item-icon-active" src="./assets/img/tabbar/分类 (1).png" />
	 		 <div slot="item-text">分类</div>
	 </tabbarItem>
	 <tabbarItem path="/cart">
	 		 <img slot="item-icon" src="./assets/img/tabbar/购物车.png" />
			 <img slot="item-icon-active" src="./assets/img/tabbar/购物车 (1).png" />
	 		 <div slot="item-text">购物车</div>
	 </tabbarItem>
	 <tabbarItem path="/profile">
	 		 <img slot="item-icon" src="./assets/img/tabbar/我的.png" />
			 <img slot="item-icon-active" src="./assets/img/tabbar/我的 (1).png" />
	 		 <div slot="item-text">我的</div>
	 </tabbarItem>
	   
	   
   </tabbar>
  
  </div>
</template>

<script>
	import tabbar from './components/tabbar/tabbar'
	import tabbarItem from './components/tabbar/tabbarItem'
	
	export default {
		name:"app",
		components:{
			tabbar,
			tabbarItem
		}
	}
</script>

<style>
@import 'assets/css/base.css';

</style>
