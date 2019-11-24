<template>
<div class="sanhang clearfix" v-pan="pandong">
	<div class="sanhang-top">
		<span class="t1">{{t1}}</span>
		<span class="t2">查看更多&gt;</span>
	</div>
	<Scroll2 class="contenttop">
		<div class="content3">
			<div class="sanhang-content" v-for="(item,index) in zhui" :key="index">
				<div class="imgcont">
					<img :src="src">
					<span>会员抢先</span>
					<p>更新至第{{item.geng}}话</p>
					<div class="mest"></div>
				</div>
				<div class="content-bottom">
					<p>{{item.fanming}}</p>
					<p>已看到第{{item.kan}}话</p>
				</div>
			</div>
			
		</div>
	</Scroll2>
	
</div>
</template>

<script>
export default{
	name:"sanhang",
	props:["zhui","t1"],
	data(){
		return{
			src:require('../../../../assets/img/2.jpg')
		}
	},
	methods:{
		pandong(){
			window.sessionStorage.setItem("lun",'false')
		}
	}
}
</script>

<style scoped="scoped">
	
.sanhang{
	padding: 0 0.185185rem 0.185185rem;
	border-bottom: 0.018518rem #aaa solid;
}
.content3{
	width: 14.629629rem;
	display: flex;
}
.contenttop{
	width: 100%;
	overflow: hidden;
}
.sanhang .sanhang-top{
	margin-top: 0.185185rem;
	display: flex;
	justify-content: space-between;
}
.sanhang .sanhang-top .t1{
	font-size: 0.296296rem;
	font-weight: bold;
}
.sanhang .sanhang-top .t2{
	color: #999;
}
.sanhang-content{
	margin-top: 0.185185rem;
	margin-right: 0.092592rem;
}
.sanhang-content .imgcont{
	width: 2.777777rem;
	height: 1.481481rem;
	border-radius: 0.092592rem;
	overflow: hidden;
	position: relative;
}
.sanhang-content .imgcont span{
	position: absolute;
	top: 0.055555rem;
	right: 0.055555rem;
	color: white;
	background-color: #FF6666;
	transform: scale(0.85);
	padding: 0.055555rem 0.055555rem;
	border-radius: 0.055555rem;
}
.sanhang-content .imgcont p{
	position: absolute;
	bottom: 0.055555rem;
	left: 0.055555rem;
	color: white;
	z-index: 2;
}
.sanhang-content .imgcont .mest{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0.37037rem;
	background: linear-gradient(to top,rgba(0,0,0,0.6),rgba(0,0,0,0));
}
.sanhang-content .imgcont>img{
	width: 100%;
	height: 100%;
}
.sanhang-content .content-bottom p:nth-child(1){
	font-size: 0.259259rem;
	font-weight: bold;
	margin: 0.092592rem 0;
	width: 2.777777rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
}
.sanhang-content .content-bottom p:nth-child(2){
	color: #FF6666;
}
</style>
