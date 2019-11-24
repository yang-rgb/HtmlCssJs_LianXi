<template>
  <div id="home">
    <app-header v-on:titleChanged="updateTitle($event)" v-bind:title="title"></app-header>
     <users v-bind:users="users"></users>
     <app-footer v-bind:title="title"></app-footer>
  </div>
</template>


<script>

import Users from './Users'
import Header from './Header'
import Footer from './Footer'

  export default {
    name: 'home',
    data(){
      return {
        users:[
          // {name:"jon",position:"Web",show:false},
          // {name:"foi",position:"Web",show:false},
          // {name:"mon",position:"Web",show:false},
          // {name:"hju",position:"Web",show:false},
          // {name:"drd",position:"Web",show:false}
        ],
        title:"app app app"
      }
    },
    components:{
      "users":Users, // Users
       "app-header":Header,
       "app-footer":Footer
    },
    methods:{
      updateTitle(title){
        this.title=title;
      }
    },
    created:function(){
      this.$http.get("http://jsonplaceholder.typicode.com/users")
      .then((data)=>{
        this.users=data.body;
      })
    }

  }
</script>


<style scoped="scoped">

</style>
