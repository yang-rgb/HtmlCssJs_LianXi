<template>
	<div id="Home">
		<h2>我是首页</h2>
		<p>我是首页内容</p>
		<router-link to="/home/news">新闻</router-link>
		<router-link to="/home/message">消息</router-link>
		
			<router-view></router-view>
		
	</div>
</template>

<script>
	export default {
		name:"Home",
		data(){
			return{
				path:"/home/news"
			}
		},
		activated(){
			this.$router.push(this.path);
		},
		beforeRouteLeave (to, from, next) {
		    // 导航离开该组件的对应路由时调用
		    // 可以访问组件实例 `this`
			this.path=this.$route.path;
			next();
		 }
	}
	
</script>

<style scoped="scoped">
</style>
