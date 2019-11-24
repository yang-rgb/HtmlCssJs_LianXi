<template>
	<div class="huiyuangou">
		<tabtop>
			<span class="pindaozi">会员购</span>
			<template #icon>
				<icon>
					<div class="gouwuche"></div>
					<div class="wode"></div>
				</icon>
			</template>
		</tabtop>
		<img  v-demo src="../../assets/img/lunbo/2.jpg" alt="">
	</div>
</template>

<script>
import tabtop from "../tabtop/tabtop.vue"
import icon from "../../components/tabbar/icon.vue"
export default{
	name: 'huiyuangou',
	components:{
		 tabtop,
		 icon
	}
}

</script>

<style scoped="scoped">
.gouwuche{
	background: url(../../assets/img/gouwuche.png) no-repeat;
}
.wode{
	background: url(../../assets/img/wode.png) no-repeat;
}
</style>
