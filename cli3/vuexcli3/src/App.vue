<template>
  <div id="app">
    <!-- <h2>{{counter}}</h2> -->
	<!-- <HelloVue @shoeu ="-"></HelloVue> -->
	<!-- <HelloVue :counterd="counter"></HelloVue> -->
	<!-- <HelloVue></HelloVue>
	<HelloWorld></HelloWorld> -->
	<!-- <h1>{{yyy}}</h1> -->
	<h2>iii</h2>
	<h2>{{$store.state.counter}}</h2>
	<button @click="addition()">+</button>
	<button @click="subtraction()">-</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import HelloVue from "./components/HelloVue.vue"

export default {
  name: 'app',
  data(){
	  return{
		  counter:"wewew4",
		  yyy:""
	  }
  },
  components: {
    HelloWorld,
	HelloVue
  },
  methods:{
	  vty(tt){
		  this.yyy=tt
	  },
	  addition(){
		  this.$store.commit("increment")
	  },
	  subtraction(){
		   this.$store.commit("decrement")
	  }
	  
	  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
