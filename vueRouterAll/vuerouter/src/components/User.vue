<template>
	<div>
		<h1>我是用户界面</h1>
		<p>用户界面的相关信息</p>
		<h2>{{userid}}</h2>
	</div>
</template>

<script>
	export default {
		name:"User",
		computed:{
			userid(){
				return this.$route.params.id
			}
		}
	}
</script>

<style scoped="scoped">
</style>
