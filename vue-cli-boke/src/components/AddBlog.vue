<template>
  <div id="app-blog">
    <h2>增加博客</h2>
    <form v-if="!submmited">
      <label>博客标题</label>
      <input type="text" v-model="blog.title" required>
      <label>博客内容</label>
      <textarea v-model="blog.content"></textarea>
      <div id="checkboxes">
        <label >Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label >node.js</label>
        <input type="checkbox" value="node.js" v-model="blog.categories">
        <label >React.j</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label >Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories">
      </div>
      <label>作者:</label>
      <select v-model="blog.author">
        <option v-for="author in authors">
          {{author}}
        </option>
      </select>
      <button v-on:click.prevent="post">增加博客</button>
    </form>

    <div v-if="submmited">
      <h3>博客发布成功</h3>
    </div>

    <div id="preview">
      <h3>博客总览</h3>
       <p>博客标题:{{blog.title}}</p>
       <p>博客内容:</p>
       <p>{{blog.content}}</p>
       <p>博客分类:</p>
       <ul>
       	<li v-for="category in blog.categories" :key="category">
          {{category}}
        </li>
       </ul>
        <p>作者:</p>
        <p>{{blog.author}}</p>
    </div>
  </div>
</template>


<script>
import axios from 'axios'

  export default {
    name:"app-blog",
    data (){
      return {
        blog:{
          title:"",
          content:"",
          categories:[],
          author:""
        },
        authors:['jon','Aom','Mon'],
        submmited:false
      }
    },
    methods:{
      post:function(){
        // this.$http.post("http://jsonplaceholder.typicode.com/posts",{
        //   title:this.blog.title,
        //   body:this.blog.content,
        //   userID:1
        // })
        // var _than=this;
        axios.post("/posts",{
          title:this.blog.title,
          body:this.blog.content,
          userID:1
        })

        .then((data)=>{
          console.log(data)
          this.submmited=true;
        })
      }
    }

  }
</script>


<style scoped="scoped">
 #app-blog *{
   box-sizing: border-box;
 }
   #app-blog{
     max-width: 600px;
     padding: 20px 10px;
     margin: 0 auto;
   }
   label{
     display: block;
     margin: 20px 0 10px;
   }
   input[type="text"],textarea,select{
     display: block;
     width: 100%;
     padding: 8px;
   }
   #checkboxes label{
     display: inline-block;
    margin: 0;
   }
   textarea{
     height: 200px;
   }
   button{
     background: red;
     color: white;
     border: 0;
     margin-top: 20px;
     padding: 10px 10px;
     border-radius: 10px;
     margin-bottom: 100px;
   }


</style>
