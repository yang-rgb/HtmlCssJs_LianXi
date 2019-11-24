<template>
	<div class="HelloVue">
		<h1>{{counterd}}</h1> 
			<!-- <h2>{{dddd}}</h2> -->
		
		<h1 v-on:click="moont2()">f</h1>
		
	</div>
</template>

<script>
	import bus from "../event.js"
	export default{
		name: "HelloVue",
		props:['counterd'],
		data(){
			return{
				dddd:"ddddd",
			}
		},
		methods:{
			// moont(){
			// 	this.$emit("shoeu",this.dddd);
			// },
			moont2(){
				bus.$emit("shoeu",this.dddd);
			}
		}
		
		
	}
</script>

<style>
</style>
