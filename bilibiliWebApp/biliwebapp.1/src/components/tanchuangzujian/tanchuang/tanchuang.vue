<template>
	<div class="tanchuang">
		<div class="rou" @click="handleOk">
			<i></i>
			<span>{{title}}</span>
		</div>
	</div>
</template>

<script>
export default{
	name:"tanchuang"
}
</script>

<style scoped="scoped">
.tanchuang{
	position: absolute;
	top: 0;
	left: 50%;
	margin-left: -5rem;
	width: 10rem;
	height: 100%;
	background-color: rgba(0,0,0,0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 999;
}
.tanchuang .rou{
	width: 3.703703rem;
	height: 3.703703rem;
	background: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	border-radius: 0.185185rem;
	box-shadow: 1px 1px 3px 3px #666;
}
.tanchuang .rou>i{
	display: block;
	width: 0.925925rem;
	height:0.925925rem;
	margin-top: -0.185185rem;
	margin-bottom: 0.37037rem;
	background: url(../../../assets/img/san.png) no-repeat;
	background-size: contain;
}
.tanchuang .rou>span{
	font-size: 16px;
	font-family:"微软雅黑";
}

</style>
