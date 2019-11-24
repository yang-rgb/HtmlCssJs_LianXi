<template>
  <div id="app">
 <!--   <router-link to="/home" tag='button' replace active-class='active'>首页</router-link>
	<router-link to="/about">关于</router-link> -->
	
	<!-- <button @click="homeclick()"></button> -->
	
	<router-link to="/home" >首页</router-link>
	<router-link to="/about">关于</router-link>
	<router-link v-bind:to="'/user/'+userid">用户</router-link>
	 
	<router-link :to="{path:'/profile',query:{name:'Aok',age:18}}">档案</router-link>
	
	
	<keep-alive exclude="profile,User">
		<router-view></router-view>
	</keep-alive>
  </div>
</template>

<script>


export default {
  name: 'app',
  data(){
	return{
		userid:"Aom"
	}  
  },
  methods:{
	homeclick(){
		// this.$router.push("/home");
		// this.$router.replace("/home");
	}  
  },
  components: {
   
  }
}
</script>

<style scoped="scoped">

</style>
