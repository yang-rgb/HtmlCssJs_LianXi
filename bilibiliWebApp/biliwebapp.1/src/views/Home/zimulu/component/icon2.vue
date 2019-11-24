<template>
	<div class="icon2">
		<div class="img"><slot name="img"></slot></div>
		<div class="imgspan"><slot name="imgspan"></slot></div>
	</div>
</template>

<script>
	export default{
		name:"icon2"
	}
</script>

<style scoped="scoped">
.icon2{
	text-align: center;
}
.img img{
	width: 0.74074rem;
	height: 0.74074rem;
	margin-bottom: 0.092592rem;
	margin-top: 0.092592rem;
}
</style>
