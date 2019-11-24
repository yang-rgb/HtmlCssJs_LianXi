<template>
  <div id="app">
    <ul>
      <li> <router-link to="/">Home</router-link> </li>
      <li> <router-link to="/helloworld">HelloWorld</router-link> </li>
      <!-- <a href="/">Home</a>
      <a href="/helloworld">HelloWorld</a> -->
    </ul>
      <router-view></router-view>
  </div>
</template>


<script>


  export default {
    name: 'app',
    data(){
      return {

      }
    }


  }
</script>


<style scoped="scoped">

</style>
