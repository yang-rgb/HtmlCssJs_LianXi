<template>
  <div class="users">
      <ul>
        <li v-for="user in users">
            <h2>{{user.name}}</h2>
            <h3>{{user.emil}}</h3>
        </li>
      </ul>
  </div>
</template>

<script>

  export default {
    name: 'users',
    // props:['users'],
    props:{
      users:{
        type:Array,
        required:true
      }
    },
    data () {
      return {

      }
    }
  }

</script>

<style scoped="scoped">
.users{
  width: 100%;
  max-width: 1200px;
  margin: 40px auto;
  box-sizing: border-box;
}
ul{
  display: flex;
  flex-wrap: wrap;
  list-style: none;
}
li{
  flex-grow: 1;
  flex-basis: 200px;
  text-align: center;
  padding: 30px;
  border: 1px solid #000;
  margin: 5px;
}

</style>
