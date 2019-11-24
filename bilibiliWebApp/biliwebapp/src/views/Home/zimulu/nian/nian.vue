<template>
	<div class="nian">
		<img class="imgtu" src="../../../../assets/img/2.jpg" alt="">
		<lunbo class="lunbo" :hig="90"></lunbo>
		<div class="content">
			<h1 class="ti">我和我的祖国</h1>
			<div class="tuji">
				<tu>
					<template #img-zhu>
						<img src="../../../../assets/img/2.jpg" alt="">
					</template>
					<template #jishu>
						789
					</template>
					<template #bofang>
						<img src="../../../../assets/img/bofang4.png" alt="">
					</template>
					<template #pinglun>
						<img src="../../../../assets/img/pinglunxioaxi.png" alt="">
					</template>
					<template #pinglunshu>
						78
					</template>
					<template #shijian>
						4:23
					</template>
					<template #biaoti>
						过来热度接力了，视频看上去水了，但是这不重要，重要的是让更多人知道！但是这不重要，重要的是让更多人知道！但是这不重要，重要的是让更多人知道！
					</template>
					<template #richang>
						日常
					</template>
				</tu>
				<tu>
					<template #img-zhu>
						<img src="../../../../assets/img/2.jpg" alt="">
					</template>
					<template #jishu>
						8
					</template>
					<template #bofang>
						<img src="../../../../assets/img/bofang4.png" alt="">
					</template>
					<template #pinglun>
						<img src="../../../../assets/img/pinglunxioaxi.png" alt="">
					</template>
					<template #pinglunshu>
						80
					</template>
					<template #shijian>
						54:23
					</template>
					<template #biaoti>
						为什么拖更了这么久，知道真相的我已经哭了！
					</template>
					<template #richang>
						综艺
					</template>
				</tu>
				<tu>
					<template #img-zhu>
						<img src="../../../../assets/img/2.jpg" alt="">
					</template>
					<template #jishu>
						60
					</template>
					<template #bofang>
						<img src="../../../../assets/img/bofang4.png" alt="">
					</template>
					<template #pinglun>
						<img src="../../../../assets/img/pinglunxioaxi.png" alt="">
					</template>
					<template #pinglunshu>
						34
					</template>
					<template #shijian>
						12:23
					</template>
					<template #biaoti>
						医学博士：如何才能通过掌控大脑，提高专注力？
					</template>
					<template #richang>
						综艺
					</template>
				</tu>
				<tu>
					<template #img-zhu>
						<img src="../../../../assets/img/2.jpg" alt="">
					</template>
					<template #jishu>
						56
					</template>
					<template #bofang>
						<img src="../../../../assets/img/bofang4.png" alt="">
					</template>
					<template #pinglun>
						<img src="../../../../assets/img/pinglunxioaxi.png" alt="">
					</template>
					<template #pinglunshu>
						23
					</template>
					<template #shijian>
						20:23
					</template>
					<template #biaoti>
						纪念我的意大利那不勒斯留学---第二个月
					</template>
					<template #richang>
						科普
					</template>
				</tu>
			</div>
			
		</div>
	</div>
</template>

<script>
import lunbo from "../component/lunbo.vue"
import tu from "../component/tu.vue"

export default{
	name:"nian",
	components:{
		lunbo,
		tu
	},
	activated(){

		 window.sessionStorage.setItem("path",this.$route.path)
	}
}
</script>

<style scoped="scoped">
.nian{
	position: relative;
	padding: 0 0.185185rem;
	height: 600px;
}
.lunbo{
	position: absolute;
	top:1.111111rem;
	left: 0;
}
.imgtu{
	width: 100%;
	height: 2.222222rem;
	margin-bottom: 1.574074rem;
}
.content .ti{
	font-size: 16px;
}
.content .tuji{
	display: flex;
	justify-content: space-around;
	flex-wrap: wrap;
}
</style>
