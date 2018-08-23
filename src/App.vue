<template>
  <div id="app" style="height: 100%;width: 100%;margin-top: 10px;background-color: #f7f7f7">
    <router-view></router-view>
  </div>
</template>
<style scoped>

#leftContainer {
  margin: 20px;
}
#app {
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
<script>
import Main from "./views/Main.vue";
export default {
  data() {
    return {

    }
  },
  components: {
    Main
  }
    
  
}
</script>
