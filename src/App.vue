<template>
  <div id="app">
    <el-container>
      <el-header>

        <el-menu
          class="el-menu-demo"
          mode="horizontal"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b">
          
          <el-menu-item index="2">退出登录</el-menu-item>
        </el-menu>


      </el-header>
      <el-container id="leftContainer">
        <el-aside width="200px">

            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              :router="true"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b">

              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户中心</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"></template>
                  <el-menu-item index="/userInformation">用户信息</el-menu-item>
                  <!-- TODO 重置属性 -->
                  <el-menu-item index="/resetPassword">重置密码</el-menu-item>
                </el-menu-item-group>
                
              </el-submenu>

              <el-submenu index="1" disabled>
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>用户管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"></template>
                  <el-menu-item index="1-1">查询用户</el-menu-item>
                  <el-menu-item index="1-2">查询用户登录记录</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="1" disabled>
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>权限管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"></template>
                  <el-menu-item index="1-1">查询角色</el-menu-item>
                  <el-menu-item index="1-2">查询权限</el-menu-item>
                </el-menu-item-group>
              </el-submenu>

              <el-submenu index="1" disabled>
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>邮件管理</span>
                </template>
                <el-menu-item-group>
                  <template slot="title"></template>
                  <el-menu-item index="1-1">邮件发送记录</el-menu-item>
                  <!-- <el-menu-item index="1-2">重置密码</el-menu-item> -->
                </el-menu-item-group>
                
              </el-submenu>

            </el-menu>

          <!-- <div id="nav" style="float: right">
            <ul>
              <li><router-link to="/userCenter/information">任务</router-link></li>
              <li><router-link to="/userCenter/resetPassword">任务结果</router-link></li>
              <li><router-link to="/taskConfig">任务配置</router-link></li>
            </ul>
            
          </div> -->

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
