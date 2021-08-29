<template>
  <div id="app">
    <h1>Minimal Clicker</h1>
    <prod/>
    <msg/>
    <lv/>
  </div>
</template>

<script>
  import Prod from "./Prod.vue"
  import Msg from "./Msg.vue"
  import Lv from "./Lv.vue"

  export default {
    components: {Prod,Msg,Lv},
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