<template>
  <div >
    <el-container style="background-color:#f2f2f2;height: 800px">
      <!-- top -->
      <el-header>
        <top-navbar></top-navbar>
      </el-header>

      
      <el-container id="leftContainer" >
        <el-aside  style="height: 100%;width:200px;padding-right: 0px">
          <!-- left -->
          <left-navbar></left-navbar>
          
        </el-aside>
        
        <el-main style="margin:3px;border: 1px solid #eee;background-color: #fff;">
          <div id="main" >
            <router-view></router-view>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>    
</template>

<style scoped>
  .el-header{
    padding:0px;
  }

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



