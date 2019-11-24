<template>
	<div class="zhibo">
		<lunbo></lunbo>
		<biao></biao>
		<div class="lanwai">
			<div class="lan">
				<div class="img-sai">
					<img src="../../../../assets/img/zhibo/saishi.png" alt="">
				</div>
				<div class="content">
					<p>S9全球总决赛G2 vx FPX</p>
					<p>11月10日 20:00 开始</p>
				</div>
				<div class="but">
					订阅
				</div>
			</div>
		</div>
		<guanzhu></guanzhu>
	</div>
</template>

<script>
import lunbo from "../component/lunbo.vue"
import biao from "./biaoqian.vue"
import guanzhu from "./guanzhu.vue"
	export default{
		name:"zhibo",
		components:{
			lunbo,
			biao,
			guanzhu
		},
		activated(){
			 window.sessionStorage.setItem("path",this.$route.path)
		}
		
	}
</script>

<style scoped="scoped">
.zhibo{
	background-color: white;
	height: 750px;
}
.lanwai{
	padding: 0 0.185185rem;
}
.lan{
	width: 100%;
	padding: 0.092592rem 0.37037rem;
	box-sizing: border-box;
	display: flex;
	margin-top: 0.277777rem;
	align-items: center;
	border: 0.018518rem solid #999;
	border-radius: 0.092592rem;
}
.lan .img-sai{
	width: 1.111111rem;
	margin-right: 0.185185rem;
}
.lan .img-sai>img{
	width: 100%;
	height: 100%;
}
.lan .but{
	margin-left: auto;
}
.lan .content{
	padding-left: 0.185185rem;
	border-left:0.018518rem #999 solid;
}
.lan .content p:nth-child(1){
	font-size: 0.37037rem;
	margin-bottom: 0.092592rem;
}
.lan .content p:nth-child(2){
	color: #999;
}
.but{
	background-color: #FF6666;
	padding: 0.185185rem;
	color: white;
	border-radius: 0.092592rem;
}
</style>
