<template>
	<div class="guanzhu">
		<div class="guan-top">
			<h1>我的关注</h1>
			<p><span>2</span><span>人正在直播</span></p>
			<div class="dong">
				<span></span>
				<span></span>
				<span></span>
			</div>
			<div class="kan">
				<span>查看更多&gt;</span>
			</div>
		</div>
		<div class="content">
			<div class="guan-content">
				<div class="guanzhu-top">
					<img src="../../../../assets/img/2.jpg" alt="">
					<p>
						<span>其他游戏</span>
						<span>2589</span>
					</p>
				</div>
				<div class="guanh-content">
					<div class="tou">
						<img src="../../../../assets/img/2.jpg" alt="">
					</div>
					<div class="touright">
						<h1>FUN科技</h1>
						<p>在，3万块帮我装个分体水3万块帮我装个分体水</p>
					</div>
				</div>
			</div>
			<div class="guan-content">
				<div class="guanzhu-top">
					<img src="../../../../assets/img/2.jpg" alt="">
					<p>
						<span>其他游戏</span>
						<span>2589</span>
					</p>
				</div>
				<div class="guanh-content">
					<div class="tou">
						<img src="../../../../assets/img/2.jpg" alt="">
					</div>
					<div class="touright">
						<h1>FUN科技</h1>
						<p>在，3万块帮我装个分体水3万块帮我装个分体水</p>
					</div>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
export default{
	name:"guanzhu"
}
</script>

<style scoped="scoped">
.guanzhu{
	margin-top: 0.37037rem;
	padding: 0 0.185185rem;
}
.guanzhu .guan-top{
	display: flex;
	font-size: 0.37037rem;
}
.guanzhu .guan-top .kan{
	margin-left: auto;
	color: #999;
}
.guanzhu .guan-top>h1{
	margin-right: 0.092592rem;
}
.guanzhu .guan-top>p span:nth-child(1){
	color: #FF6666;
}
.guanzhu .guan-top>p span:nth-child(2){
	color: #999;
}
.guanzhu .guan-top .dong{
	width: 1.111111rem;
	height: 0.37037rem;
	margin-left: 0.185185rem;
	overflow: hidden;
}
.guanzhu .guan-top .dong span{
	display: inline-block;
	width: 0.074074rem;
	height: 0.74074rem;
	background-color: #333;
	margin: 0 0.055555rem;
	border-radius: 0.055555rem;
}
.guanzhu .guan-top .dong span:nth-child(1){
	animation: sp1 3s linear infinite;
	
}
.guanzhu .guan-top .dong span:nth-child(2){
	animation: sp2 3s linear 0.3s infinite;

}
.guanzhu .guan-top .dong span:nth-child(3){
	animation: sp3 3s linear 0.6s infinite;

}
@keyframes sp1{
	0%{
		transform: rotateX(0deg);
	}
	100%{
		transform: rotateX(360deg);
	}
	
}
@keyframes sp2{
	0%{
		transform: rotateX(0deg);
	}
	100%{
		transform: rotateX(360deg);
	}
	
}
@keyframes sp3{
	0%{
		transform: rotateX(0deg);
	}
	100%{
		transform: rotateX(360deg);
	}
	
}
.guanzhu .content{
	margin-top: 0.185185rem;
	display: flex;
	justify-content: space-between;
}
.guanzhu .content .guan-content{
	width: 48%;
}
.guanzhu .content .guan-content .guanzhu-top{
	width: 100%;
	position: relative;
	border-radius: 0.092592rem;
	overflow: hidden;
}
.guanzhu .content .guan-content .guanzhu-top>p{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0.555555rem;
	background: linear-gradient(to top,rgba(0,0,0,0.6),transparent);
}
.guanzhu .content .guan-content .guanzhu-top>p span{
	color: white;
	line-height: 0.555555rem;
	padding: 0 0.185185rem;
}
.guanzhu .content .guan-content .guanzhu-top>p span:nth-child(2){
	float: right;
}
.guanzhu .content .guan-content .guanzhu-top>p span:nth-child(2):before{
	content: "";
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	vertical-align: middle;
	background: url(../../../../assets/img/zhibo/ren.png) no-repeat;
	background-size: cover;
	
}

.guanzhu .content .guan-content .guanzhu-top>img{
	width: 100%;
}
.guanzhu .content .guanh-content{
	display: flex;
	align-items: center;
	margin-top: 0.185185rem;
}
.guanzhu .content .guanh-content .tou{
	width: 0.555555rem;
	height: 0.555555rem;
	margin-right: 0.37037rem;
}
.guanzhu .content .guanh-content .tou>img{
	width: 100%;
	height: 100%;
	border-radius: 50%;
}
.guanzhu .content .guanh-content h1{
	font-size: 0.296296rem;
}
.guanzhu .content .guanh-content p{
	width: 3.796296rem;
	overflow: hidden;
	white-space: nowrap;
	text-overflow: ellipsis;
}
</style>
