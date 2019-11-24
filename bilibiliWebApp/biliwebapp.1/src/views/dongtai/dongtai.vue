<template>
	<div class="dongtai">
		<tabtop>
			<span class="pindaozi">动态</span>
			<template #icon>
				<icon>
					<div class="bianji"></div>
				</icon>
			</template>
		</tabtop>
		<img v-demo src="../../assets/img/lunbo/3.jpg" alt="">
	</div>
</template>

<script>
import tabtop from "../tabtop/tabtop.vue"
import icon from "../../components/tabbar/icon.vue"
export default{
	name: 'dongtai',
	components:{
		 tabtop,
		 icon
	}
}

</script>

<style scoped="scoped">
.bianji{
	background: url(../../assets/img/bianji.png) no-repeat;
	display: inline-block;
	width: 0.555555rem;
	height: 0.555555rem;
	background-size: contain;
}
</style>
