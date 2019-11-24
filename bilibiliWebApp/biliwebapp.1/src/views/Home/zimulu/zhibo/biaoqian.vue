<template>
<div class="biaoqian">
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/cahngshang.png" alt="">
		<span>英雄联盟</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/xingicon.png" alt="">
		<span>lol云顶之奕</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/wangzhe.png" alt="">
		<span>王者荣耀</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/yule.png" alt="">
		<span>娱乐</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/danjid.png" alt="">
		<span>单机</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/dadiantai.png" alt="">
		<span>电台</span>
	</div>
	
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/zhuanyelieren.png" alt="">
		<span>怪物猎人</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/shiming.png" alt="">
		<span>使命召唤</span>
	</div>
	<div class="bioa-box">
		<img src="../../../../assets/img/zhibo/5.png" alt="">
		<span>第五人格</span>
	</div>
	<div class="bioa-box">
		<img class="img2" src="../../../../assets/img/zhibo/aunabuicon.png" alt="">
		<span>全部标签</span>
	</div>
</div>
</template>

<script>
export default{
	name:"biaoqian"
}
</script>

<style scoped="scoped">
.biaoqian{
	width: 100%;
	display: flex;
	justify-content: space-between;
	/* align-items: center; */
	flex-wrap: wrap;
	margin-top: 0.185185rem;
}
.biaoqian .bioa-box{
	flex: 20%;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	margin-top: 0.37037rem;
}
.biaoqian .bioa-box img{
	width: 0.666666rem;
	height: 0.666666rem;
	margin-bottom: 0.092592rem;
}

</style>
