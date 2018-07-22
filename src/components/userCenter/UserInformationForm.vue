<!-- 查看用户信息表单，支持修改 -->
<template>
  <div>
    <el-form>
      <el-form-item label="用户名：">

        {{ userForm.userName }}
      </el-form-item>

      <el-form-item label="昵称：">
        <div v-if="nickNameSwitch">
          {{ userForm.nickName }}
        </div>

        <div v-else>
          <el-input v-model="userForm.nickName" class="nickNameInput" placeholder="昵称"></el-input>
          <el-button type="primary">修改</el-button>
          <el-button>取消</el-button>
        </div>
        
      </el-form-item>

      <el-form-item label="性别：">
        {{ userForm.sex }}
      </el-form-item>

      <el-form-item label="生日：">
        {{ userForm.birthday }}
      </el-form-item>

      <el-form-item label="手机号：">
        {{ userForm.mobile }}
      </el-form-item>

      <el-form-item label="邮箱：">
        {{ userForm.email }}
      </el-form-item>

      <el-form-item label="注册时间:">
        {{ userForm.registerDate }}
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

.nickNameInput {
  width: 200px;
  margin-right: 15px;
}
</style>

<script>

export default {
  data() {
    return {
      userForm: {
        userName: "mamian",
        nickName: "mamian",
        sex: "男",
        birthday: "1994-10-26",
        mobile: "176666666",
        email: "demo@demo.com",
        registerDate: "2018-10-26"
      },
      nickNameSwitch: false,
      mobileSwitch: true,
      emailSwitch: true,
    }
  }
}
</script>
