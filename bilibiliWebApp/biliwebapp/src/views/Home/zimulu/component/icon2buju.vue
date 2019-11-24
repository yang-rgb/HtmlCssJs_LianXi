<template>
	<div class="iconbuju">
		<icon>
			<template #img>
				<img src="../../../../assets/img/zhuifan/fanju.png" alt="">
			</template>
			<template #imgspan>
				<span>番剧</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/zhuifan/guochuang.png" alt="">
			</template>
			<template #imgspan>
				<span>国创</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/zhuifan/shijianbiao.png" alt="">
			</template>
			<template #imgspan>
				<span>时间表</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/zhuifan/suoying.png" alt="">
			</template>
			<template #imgspan>
				<span>索引</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/zhuifan/remenbangsou.png" alt="">
			</template>
			<template #imgspan>
				<span>热门榜单</span>
			</template>
		</icon>
	</div>
</template>

<script>
import icon from "./icon2.vue"
export default{
	name:"iconbuju",
	components:{
		icon
	}
}
</script>

<style scoped="scoped">
.iconbuju{
	display: flex;
	justify-content: space-around;
	padding-bottom: 0.185185rem;
	border-bottom: 0.018518rem #ccc solid;
}

</style>
