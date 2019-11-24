<template>
	<div class="yingshiicon">
		<icon>
			<template #img>
				<img src="../../../../assets/img/yingshi/jilupian.png" alt="">
			</template>
			<template #imgspan>
				<span>纪录片</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/yingshi/dianying.png" alt="">
			</template>
			<template #imgspan>
				<span>电影</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/yingshi/dianshiju.png" alt="">
			</template>
			<template #imgspan>
				<span>电视剧</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/yingshi/remenyongshi.png" alt="">
			</template>
			<template #imgspan>
				<span>热门榜单</span>
			</template>
		</icon>
		<icon>
			<template #img>
				<img src="../../../../assets/img/yingshi/shitangping.png" alt="">
			</template>
			<template #imgspan>
				<span>深夜食堂</span>
			</template>
		</icon>
	</div>
</template>

<script>
import icon from "./icon2.vue"
export default{
	name:"yingshiicon",
	components:{
		icon
		
	}
}
</script>

<style scoped="scoped">
	.yingshiicon{
		display: flex;
		justify-content: space-around;
		padding-bottom: 0.185185rem;
		border-bottom: 0.018518rem #ccc solid;
	}
</style>
