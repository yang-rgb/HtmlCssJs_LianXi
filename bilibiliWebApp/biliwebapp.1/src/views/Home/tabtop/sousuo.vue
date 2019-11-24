<template>
	<div class="sousuo">
		<span @click="sousuoye">组件的 prop 指定验证要求要求要求</span>
	</div>
</template>

<script>
export default{
	name:"sousuo",
	methods:{
		sousuoye(){
			this.$router.push("/sousuo");
		}
	}
}
</script>

<style scoped="scoped">
.sousuo{
	width: 3.703703rem;
	height: 0.648148rem;
	line-height: 0.648148rem;
	padding: 0 0.37037rem 0 0.74074rem;
	box-sizing: border-box;
	background: rgba(0,0,0,0.6);
	margin-left: 0.462962rem;
	border-radius: 0.925925rem;
	overflow: hidden;
	text-overflow: ellipsis;
	white-space: nowrap;
	color: #999;
	position: relative;
	
}
.sousuo:before{
	content: "";
	display: inline-block;
	width: 0.37037rem;
	height: 0.37037rem;
	background: url(../../../assets/img/fangdajing.png) no-repeat;
	background-size: cover;
	position: absolute;
	top: 50%;
	left: 0.185185rem;
	transform: translateY(-50%);
}
</style>
