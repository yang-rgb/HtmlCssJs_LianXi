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
		document.addEventListener('plusready', function() {
			var fill=null;
		        var webview = plus.webview.currentWebview();
		        plus.key.addEventListener('backbutton', function() {
		            webview.canBack(function(e) {
		                if(e.canBack) {
		                    webview.back();   
		                } else {
							if(!fill){
								fill=new Date().getTime();
								plus.nativeUI.toast("再按一次退出应用")
								setTimeout(function() {
									fill=null
								}, 1000);
							}else{
								if(new Date().getTime()-fill<1000){
									plus.runtime.quit();
								}
							}
		                }
		            })
		        });
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
