<template>
	<div class="pindao">
		<tabtop>
			<span class="pindaozi">频道</span>
			<template #icon>
				<icon>
					<div class="iconxiazai"></div>
					<div class="sousuo"></div>
				</icon>
			</template>
		</tabtop>
		<img v-demo src="../../assets/img/lunbo/1.jpg" alt="">
	</div>
</template>

<script>
import tabtop from "../tabtop/tabtop.vue"
import icon from "../../components/tabbar/icon.vue"

export default{
	name: 'pindao',
	components:{
		 tabtop,
		 icon
	}
}

</script>

<style scoped="scoped">
.iconxiazai{
	background: url(../../assets/img/xiazai.png) no-repeat;
}
.sousuo{
	background: url(../../assets/img/sousuo.png) no-repeat;
}

</style>
