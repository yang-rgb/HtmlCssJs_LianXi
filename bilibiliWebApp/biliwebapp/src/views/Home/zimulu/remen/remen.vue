<template>
	<div class="remen">
		<div class="icon">
			<div class="icon1">
				<img src="../../../../assets/img/pan.png" alt="">
				<span>排行榜</span>
			</div>
			<div class="icon2">
				<img src="../../../../assets/img/bikan.png" alt="">
				<span>每周必看</span>
				<span class="kan">有更新</span>
			</div>
			<div class="icon3">
				<img src="../../../../assets/img/shuazi.png" alt="">
				<span>入站必刷</span>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
		<div class="contenticon">
			<div class="imgtu">
				<img src="../../../../assets/img/2.jpg" alt="">
				<span>13:25</span>
			</div>
			<div class="cont clearfix">
				<span class="cont-zhu"> <span>[2019全球总决赛]</span>10月26日四分之一决赛 GRF vs IG 全球总决赛</span>
				<p>18万点赞</p>
				<p>老师好我叫何同学</p>
				<p>76.4万观看<span></span>13小时前</p>
				<i></i>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"remen",
		activated(){
			
			 window.sessionStorage.setItem("path",this.$route.path)
		}
	}
</script>

<style scoped="scoped">
.remen{
	padding: 0.185185rem 0.185185rem 0px 0.185185rem;
	box-sizing: border-box;
	background: white;
}

.icon{
	display: flex;
	justify-content: space-around;
	
}
.icon .icon1,
.icon .icon2,
.icon .icon3
{
	display: flex;
	flex-direction: column;
	align-items: center;
	font-weight: 300;
}
.icon .icon2{
	position: relative;
}
.icon .icon2 .kan{
	position: absolute;
	width: 37px;
	top: -0.055555rem;
    left: 0.555555rem;
	background-color: #d63031;
	padding: 0.037037rem 0.037037rem;
	border-radius: 0.277777rem;
	color: white;
	transform: scale(0.85);
	border: 0.018518rem solid white;
}
.icon img{
	width: 0.74074rem;
	height: 0.74074rem;
	margin-bottom: 0.092592rem;
}
.contenticon{
	padding: 0.185185rem 0;
	box-sizing: border-box;
	background-color: white;
	border-bottom: 0.018518rem solid #eee;
}
.contenticon .imgtu{
	width: 2.777777rem;
	height: 1.944444rem;
	display: inline-block;
	border-radius: 0.092592rem;
	overflow: hidden;
	margin-right: 0.148148rem;
	position: relative;
}
.contenticon .imgtu>span{
	position: absolute;
	bottom: 0.092592rem;
	right: 0.185185rem;
	color: white;
}
.contenticon .imgtu>img{
	width: 100%;
	height: 100%;
}
.contenticon .cont{
	display: inline-block;
	vertical-align: top;
	
}
.contenticon .cont .cont-zhu{
	width: 6.481481rem;
	height: 0.74074rem;
	font-size: 0.24074rem;
	font-size: 0.277777rem;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
}
.contenticon .cont .cont-zhu>span{
	margin: 0 0.092592rem;
}
.contenticon .cont p:nth-of-type(1){
	background-color: #e84118;
	color: white;
	display: inline-block;
	padding: 0.055555rem 0.055555rem;
	border-radius: 0.092592rem;
	font-size: 0.222222rem;
	transform: scale(0.85);
}
.contenticon .cont p:nth-of-type(2){
	margin-top: 0.092592rem;
	font-size: 0.222222rem;
	color: #757575;
}
.contenticon .cont p:nth-of-type(3){
	display: inline-block;
	margin-top: 0.092592rem;
	font-size: 0.222222rem;
	color: #757575;
}
.contenticon .cont p:nth-of-type(3)>span:before{
	content: "";
	display: inline-block;
	width: 0.037037rem;
	height: 0.037037rem;
	border-radius: 50%;
	background: #666;
	vertical-align: middle;
	text-align: center;
	margin-top: -0.055555rem;
	margin-left: 0.092592rem;
	margin-right: 0.074074rem;

}
.contenticon .cont i{
	display: inline-block;
	width: 0.277777rem;
	height: 0.277777rem;
	background: url(../../../../assets/img/sandia.png) no-repeat;
	background-size: cover;
	float: right;
}
</style>
