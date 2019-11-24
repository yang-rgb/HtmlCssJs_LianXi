<template>
<div class="tuijian">
	<div class="tui1" v-for="(item,index) in isNu" :key="index">
		<div class="tui1-top">
			<img class="tui1-top-img" src="../../../../assets/img/2.jpg" alt="">
			<div class="img" @click="isNuclick(index)">
				<img v-if="item.isNu1" src="../../../../assets/img/xingli.png" alt="">
				<img v-else src="../../../../assets/img/xingli1.png" alt="">
			</div>
			<span class="j1">会员抢先</span>
			<div class="mst">
				<span class="j2">36.4万系列追番</span>
			</div>
		</div>
		<div class="tui1-bottom">
			<p>游戏王</p>
			<p>全224话</p>
		</div>
	</div>
	<!-- <div class="tui1">
		<div class="tui1-top">
			<img class="tui1-top-img" src="../../../../assets/img/2.jpg" alt="">
			<div class="img" @click="isNuclick">
				<img v-if="isNu" src="../../../../assets/img/心理.png" alt="">
				<img v-else src="../../../../assets/img/心理1.png" alt="">
			</div>
			<span class="j1">会员抢先</span>
			<div class="mst">
				<span class="j2">36.4万系列追番</span>
			</div>
		</div>
		<div class="tui1-bottom">
			<p>游戏王</p>
			<p>全224话</p>
		</div>
	</div>
	
	<div class="tui1">
		<div class="tui1-top">
			<img class="tui1-top-img" src="../../../../assets/img/2.jpg" alt="">
			<div class="img">
				<img v-if="isNu" src="../../../../assets/img/心理.png" alt="">
				<img v-else src="../../../../assets/img/心理1.png" alt="">
			</div>
			<span class="j1">会员抢先</span>
			<div class="mst">
				<span class="j2">36.4万系列追番</span>
			</div>
		</div>
		<div class="tui1-bottom">
			<p>游戏王</p>
			<p>全224话</p>
		</div>
	</div>
	
	<div class="tui1">
		<div class="tui1-top">
			<img class="tui1-top-img" src="../../../../assets/img/2.jpg" alt="">
			<div class="img">
				<img v-if="isNu" src="../../../../assets/img/心理.png" alt="">
				<img v-else src="../../../../assets/img/心理1.png" alt="">
			</div>
			<span class="j1">会员抢先</span>
			<div class="mst">
				<span class="j2">36.4万系列追番</span>
			</div>
		</div>
		<div class="tui1-bottom">
			<p>游戏王</p>
			<p>全224话</p>
		</div>
	</div>
	
	<div class="tui1">
		<div class="tui1-top">
			<img class="tui1-top-img" src="../../../../assets/img/2.jpg" alt="">
			<div class="img">
				<img v-if="isNu" src="../../../../assets/img/心理.png" alt="">
				<img v-else src="../../../../assets/img/心理1.png" alt="">
			</div>
			<span class="j1">会员抢先</span>
			<div class="mst">
				<span class="j2">36.4万系列追番</span>
			</div>
		</div>
		<div class="tui1-bottom">
			<p>游戏王</p>
			<p>全224话</p>
		</div>
	</div>
	
	<div class="tui1">
		<div class="tui1-top">
			<img class="tui1-top-img" src="../../../../assets/img/2.jpg" alt="">
			<div class="img">
				<img v-if="isNu" src="../../../../assets/img/心理.png" alt="">
				<img v-else src="../../../../assets/img/心理1.png" alt="">
			</div>
			<span class="j1">会员抢先</span>
			<div class="mst">
				<span class="j2">36.4万系列追番</span>
			</div>
		</div>
		<div class="tui1-bottom">
			<p>游戏王</p>
			<p>全224话</p>
		</div>
	</div>
	 -->
</div>
</template>

<script>
export default{
	name:"tuijian",
	data(){
		return{
			isNu:[
				{isNu1:true},
				{isNu1:true},
				{isNu1:true},
				{isNu1:true},
				{isNu1:true},
				{isNu1:true}
			]
		}
	},
	methods:{
		isNuclick(index){
			this.isNu[index].isNu1=!this.isNu[index].isNu1
		}
	}
	
}
</script>

<style scoped="scoped">
.tuijian{
	padding: 0 0.185185rem 0.37037rem;
	display: flex;
	flex-wrap: wrap;
}
.tuijian .tui1{
	width: 33.3333%;
	padding: 10px 10px 0 0;
	box-sizing: border-box;
}
.tuijian .tui1 .tui1-top{
	width: 100%;
	height: 2.777777rem;
	position: relative;
}
.tuijian .tui1 .tui1-top .tui1-top-img{
	width: 100%;
	height: 2.777777rem;
}
.tuijian .tui1 .tui1-top .img{
	position: absolute;
	left: 0;
	top: 0;
	width: 0.555555rem;
	height: 0.555555rem;
}
.tuijian .tui1 .tui1-top .img>img{
	width: 100%;
	height: 100%;
}
.tuijian .tui1 .tui1-top .j1{
	position: absolute;
	right: 0.055555rem;
	top: 0.055555rem;
	background: #FF6666;
	color: white;
	padding: 0.092592rem 0.092592rem;
	transform: scale(0.85);
	border-radius: 0.092592rem;
}
.tuijian .tui1 .tui1-top .mst{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0.555555rem;
	background: linear-gradient(to top,rgba(0,0,0,0.5),transparent);
}
.tuijian .tui1 .tui1-top .mst .j2{
	color: white;
	line-height: 0.555555rem;
	margin-left: 0.092592rem;
	transform: scale(0.85);
}
.tuijian .tui1 .tui1-bottom p:nth-child(1){
	font-size: 0.277777rem;
	margin-top: 0.092592rem;
}
.tuijian .tui1 .tui1-bottom p:nth-child(2){
	font-size: 0.222222rem;
	margin-top: 0.092592rem;
	color: #999;
}

</style>
