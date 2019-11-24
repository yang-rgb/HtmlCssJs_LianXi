<template>
	<div class="tu">
		<div class="img">
			<div class="img-zhu">
				<slot name="img-zhu"></slot>
			</div>
			<div class="xingshi">
				<div class="bofang">
					<slot name="bofang"></slot>
				</div>
				<span class="jishu"><slot name="jishu"></slot></span>
				<div class="pinglun">
					<slot name="pinglun"></slot>
				</div>
				<span class="pinglunshu"><slot name="pinglunshu"></slot></span>
				<span class="shijian"><slot name="shijian"></slot></span>
			</div>
		</div>
		<p class="biaoti"><slot name="biaoti"></slot></p>
		<span class="richang"><slot name="richang"></slot></span>
	</div>
</template>

<script>
	export default{
		name:"tu",
		
	}
</script>

<style scoped="scoped">
.tu{
	margin-top: 0.148148rem;
	width: 45%;
}

.tu .img{
	position: relative;
}
.img-zhu>img{
	width: 100%;
}
.tu .img .xingshi{
	position: absolute;
	left: 0;
	bottom: 0;
	width: 100%;
	height: 0.555555rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 0 0.185185rem;
	box-sizing: border-box;
	color: white;
	background: linear-gradient(to top,rgba(0,0,0,0.6),transparent);
}
.tu .img .xingshi .bofang{
	width: 0.37037rem;
	height: 0.37037rem;
}
.tu .img .xingshi .bofang>img{
	width: 100%;
	height: 100%;
}

.tu .img .xingshi .jishu{
	margin: 0 0.185185rem;
}
.tu .img .xingshi .pinglun{
	width: 0.37037rem;
	height: 0.37037rem;
	margin-right:0.092592rem;
}
.tu .img .xingshi .pinglun>img{
	width: 100%;
	height: 100%;
}
.tu .img .xingshi .shijian{
	margin-left: auto;
}
.tu .biaoti{
	padding: 0.185185rem 0.092592rem;
	overflow: hidden;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
	display: -webkit-box;
	height: 0.481481rem;
	font-size: 0.277777rem;
	margin-bottom: 0.092592rem;
}
.tu .richang{
	color: #999;
	padding-left: 0.185185rem;
}
</style>
