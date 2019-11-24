<template>
  <div id="single-blog">
      <h1>{{blog.title}}</h1>
      <article>{{blog.body}}</article>
      <button @click="deleteSingleBlog()">删除</button>
  </div>
</template>

<script>
  import axios from 'axios'

  export default{
    name:"single-blog",
    data(){
      return{
        id:this.$route.params.id,
        blog:{}
      }
    },
    created(){
      // this.$http.get("http://jsonplaceholder.typicode.com/posts/"+this.id)
      // .then(function(data){
      //   this.blog=data.body;
      // })

      axios.get("/posts/"+this.id)
      .then((data)=>{
        this.blog=data.body;
      })

    },
    methods:{
      deleteSingleBlog(){
        // this.$http.delete("http://jsonplaceholder.typicode.com/posts/"+this.id)
        // .then(response=>{
        //   this.$router.push({path:'/'})
        // })

        axios.delete("/posts/"+this.id)
        .then(response=>{
          this.$router.push({path:'/'})
        })
      }
    }

  }
</script>

<style>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
  background: #EEEEEE;
  border: 1px solid #000000;
}
</style>
