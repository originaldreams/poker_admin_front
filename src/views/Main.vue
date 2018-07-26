<template>
  <div>
    <el-container>
      <!-- top -->
      <el-header>
        <top-navbar></top-navbar>
      </el-header>

      
      <el-container id="leftContainer">
        <el-aside width="200px">
          <!-- left -->
          <left-navbar></left-navbar>
          
        </el-aside>
        
        <el-main>
          <div id="main">
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>    
</template>

<style scoped>

</style>

<script>

import LeftNavbar from "./LeftNavbar.vue"
import TopNavbar from "./TopNavbar.vue"

export default {
  data() {
    return {

    }
  },

  components: {
    TopNavbar,
    LeftNavbar
  }
}
</script>



