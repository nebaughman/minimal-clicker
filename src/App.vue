<template>
  <div id="app">
    <prod/>
    <msg/>
  </div>
</template>

<script>
  import Prod from "./Prod"
  import Msg from "./Msg"

  export default {
    components: {Prod,Msg},
  }
</script>

<style scoped>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    margin: 64px;
  }
</style>