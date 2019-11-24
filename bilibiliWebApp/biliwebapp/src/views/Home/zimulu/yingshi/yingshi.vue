<template>
	<div class="yingshi">
		<lunbo></lunbo>
		<yingshiicon></yingshiicon>
		<sanhang :zhui="zhui" :t1="t1"></sanhang>
		<dongman></dongman>
		<tui></tui>
	</div>
</template>

<script>
	import lunbo from "../component/lunbo.vue"
	import yingshiicon from "../component/yingshiicon.vue"
	import sanhang from "../component/sanhang.vue"
	import dongman from "../component/dongman.vue"
	import tui from "../component/tuijian.vue"
	export default{
		name:"yingshi",
		components:{
			lunbo,
			yingshiicon,
			sanhang,
			dongman,
			tui
		},
		data(){
			return{
				zhui:[
					{geng:"15",fanming:"单挑荒野",kan:"6"},
					{geng:"5",fanming:"罗小黑战记",kan:"10"},
					{geng:"6",fanming:"龙珠超",kan:"19"},
					{geng:"7",fanming:"荒野求生",kan:"4"},
					{geng:"9",fanming:"决战荒野",kan:"14"}
					
				],
				t1:"我的追剧"
			}
		},
		activated(){
			
			 window.sessionStorage.setItem("path",this.$route.path)
		}
	}
</script>

<style scoped="scoped">
.yingshi{
	background: white;
}
</style>
