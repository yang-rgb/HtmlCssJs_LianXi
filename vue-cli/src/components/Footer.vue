<template>
  <footer>
    <h1>{{title}}</h1>
  </footer>
</template>

<script>
export default {
  name: 'app-footer',
  data () {
    return {
        title:"footer"
    }
  }
}
</script>


<style scoped>
  footer{
    background: cyan;
  }
  h1{
    color: white;
    text-align: center;
  }
</style>
