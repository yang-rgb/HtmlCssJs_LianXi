<template>
  <div v-theme:column="'narrow'" id="show-blogs">
      <h1>博客总览</h1>
      <input type="text" v-model="search" placeholder="搜索">
      <div v-for="blog in filteredBlogs" class="single-blog" :key="blog.title">
        <router-link v-bind:to="'/blog/'+blog.id">
        <h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
        </router-link>
        <article>
          {{blog.body | snippet}}
        </article>
      </div>
  </div>
</template>


<script>
// import axios from 'axios'

import axios from '../axios-file.js'

  export default {
    name: 'show-blogs',
    data(){
      return{
        blogs:[],
        search:""
      }
    },
    created(){
      // this.$http.get("http://jsonplaceholder.typicode.com/posts")
      // .then(function(data){
      //   this.blogs=data.body.slice(0,10);
      // })

      axios.get("/posts")
      .then((data)=>{
        this.blogs=data.body.slice(0,10);
      })
    },
    computed:{
      filteredBlogs:function(){
        return this.blogs.filter((blog)=>{
          return blog.title.match(this.search);
        })
      }
    },
    filters:{
      // "to-uppercase":function(value){
      //   return value.toUpperCase();
      // }
      toUppercase(value){
         return value.toUpperCase();
      }
    },
    directive:{
      'rainbow':{
          bind(el,binding,vnode){
            el.style.maxWidth="1260px";
          }
      }
    }


  }
</script>


<style scoped="scoped">
#show-blogs{
  max-width: 800px;
  margin: 0 auto;
}
.single-blog{
  padding: 20px;
  margin: 20px 0;
  box-sizing: border-box;
  background: #eee;
  border:1px dotted #aaa;

}
#show-blogs a{
  color: #444444;
  text-decoration: none;

}
input[type="text"]{
  padding: 8px;
  width: 100%;
  box-sizing: border-box;
}

</style>
