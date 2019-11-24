<template>
	<div class="tabbar">
		<tabbarItem path='/home'>
			<img slot="tab-tu1" src="../../assets/img/tabbar/shouye.png" alt="">
			<img slot="tab-tu2" src="../../assets/img/tabbar/shouye1.png" alt="">
			<span slot="active">首页</span>
		</tabbarItem>
		<tabbarItem path='/pindao'>
			<img slot="tab-tu1" src="../../assets/img/tabbar/fenlei.png" alt="">
			<img slot="tab-tu2" src="../../assets/img/tabbar/fenlei1.png" alt="">
			<span slot="active">频道</span>
		</tabbarItem>
		<tabbarItem path='/dongtai'>
			<img slot="tab-tu1" src="../../assets/img/tabbar/dongtai.png" alt="">
			<img slot="tab-tu2" src="../../assets/img/tabbar/dongtai1.png" alt="">
			<span slot="active">动态</span>
		</tabbarItem>
		<tabbarItem path='/huiyuangou'>
			<img slot="tab-tu1" src="../../assets/img/tabbar/huiyuangou.png" alt="">
			<img slot="tab-tu2" src="../../assets/img/tabbar/huiyuangou1.png" alt="">
			<span slot="active">会员购</span>
		</tabbarItem>
	</div>
</template>

<script>
	import tabbarItem from "./tabbarItem.vue";
	
	export default {
		name:"tabbar",
		data(){
			return{
				isActiveData:true
			}	
		},
		components:{
			tabbarItem
		}
		
	}
</script>

<style scoped="scoped">
.tabbar{
	display: flex;
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	background-color: #f6f6f6;
	box-shadow: 0px -1px 20px -8px #ccc;
	
	min-width: 4.266666rem;
	max-width: 10rem;
	width: 10rem;
	margin: 0 auto;

}
	
</style>
