<template>
  <div id="app">
	<router-view name="sousuo"></router-view>
	<router-view name="bofang"></router-view>
	<celan></celan>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
	<keep-alive>
		<tabbar></tabbar>
	</keep-alive>
  </div>
</template>

<script>
import tabbar from "./components/tabbar/tabbar.vue"
import celan from "./views/celan/celan.vue"

import { tanchuang2 } from "./components/tanchuangzujian/tanchuangindex.js"

export default {
	name:"app",
	components:{
		tabbar,
		celan
	},
	mounted(){ 
		tanchuang2({
					title:"青少年模式",
					handleOk(){
						console.log(0)
					}
				});

	}
	
}
	
</script>

<style>
@import url("assets/css/base.css");

*{
	/* line-height: 1; */
}

#app{
	overflow: hidden;
}
body{
	min-width: 4.266666rem;
	max-width: 10rem;
	width: 10rem;
	margin: 0 auto;
	line-height: 0.37037rem;
	background-color: #eee;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

</style>
