<template>
	<div class="icon">
		<slot></slot>
	</div>
</template>

<script>
</script>

<style scoped="scoped">
.icon{
	width: 3.888888rem;
	height: 0.925925rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	margin-left: auto;
	/* background: #CCCCCC; */
}
.icon>div{
	display: inline-block;
	width: 0.555555rem;
	height: 0.555555rem;
	background-size: contain;
	margin-right: 0.37037rem;
}
	
</style>
