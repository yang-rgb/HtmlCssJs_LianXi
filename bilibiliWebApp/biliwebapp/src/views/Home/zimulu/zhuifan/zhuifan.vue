<template>
	<div class="zhuifan">
		<lunbo></lunbo>
		<icon2buju></icon2buju>
		<sanhang :zhui="zhui" :t1="t1"></sanhang>
		<dongman></dongman>
		<tui></tui>
	</div>
</template>

<script>
import lunbo from "../component/lunbo.vue"
import icon2buju from "../component/icon2buju.vue"
import sanhang from "../component/sanhang.vue"
import dongman from "../component/dongman.vue"
import tui from "../component/tuijian.vue"
	export default{
		name:"zhuifan",
		components:{
			lunbo,
			icon2buju,
			sanhang,
			dongman,
			tui
		},
		activated(){
			
			 window.sessionStorage.setItem("path",this.$route.path)
		},
		data(){
			return{
				zhui:[
					{geng:"15",fanming:"炎炎消防队",kan:"14"},
					{geng:"15",fanming:"鬼灭之刃",kan:"14"},
					{geng:"15",fanming:"灵笼",kan:"14"},
					{geng:"15",fanming:"武庚纪",kan:"14"},
					{geng:"15",fanming:"中华小当家",kan:"14"}
					
				],
				t1:"我的追番"
			}
		}
		
	}
</script>

<style scoped="scoped">
.zhuifan{
	background-color: white;
	padding-bottom: 0.37037rem;
}
</style>
