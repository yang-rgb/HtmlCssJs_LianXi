<template>
	<div class="tuijian">
		<lunbo></lunbo>
		<zi></zi>
	</div>
</template>

<script>
import lunbo from "../component/lunbo.vue"
import zi from "./zi1";

export default{
	name:"tuijian",
	data(){
		return{
		
		}
	},
	components: {
		lunbo,
		zi
	},
	activated(){

		 window.sessionStorage.setItem("path",this.$route.path)
	}
}
</script>

<style scoped="scoped">

</style>
