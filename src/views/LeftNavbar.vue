<template>
  <div >
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
  </div>
</template>


<style scoped>

</style>

<script>
export default {
  data() {
    return {

    }
  },

  methods: {
    
  }
}
</script>
