<template>
  <div id="app">
      <!-- <app-blog></app-blog > -->
      <!-- <show-blogs></show-blogs> -->
      <blog-header></blog-header>
      <router-view></router-view>
  </div>
</template>


<script>
import AddBlog from './components/AddBlog'
import ShowBlogs from './components/ShowBlogs'
import BlogHeader from './components/BlogHeader'

  export default {
    name: 'app',
    components:{
      "app-blog":AddBlog,
      "show-blogs":ShowBlogs,
      BlogHeader
    },
    created(){
      this.$axios.post("/api/test/test.php",{username:"hello",password:"123456"})
      .then(data=>{
        console.log(data)
      })
    }

  }
</script>


<style scoped="scoped">

</style>
