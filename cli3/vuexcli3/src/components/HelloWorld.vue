<template>
  <div class="hello">
   <h1>{{drdr}}</h1>
  </div>
</template>

<script>
	import bus from "../event.js"
export default {
	
  name: 'HelloWorld',
  data(){
	  return{
		  drdr:""
	  }
  },
	created(){
		var that=this;
		bus.$on("shoeu",(data)=>{
			 that.drdr=data
		})
	}
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
