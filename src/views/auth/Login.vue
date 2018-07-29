<template>
    <div class="loginForm">
        <h3>登录</h3>
        <el-form ref="LoginForm" :model="LoginForm" :rules="LoginFormRules"  label-width="80px">
            <el-form-item label="登录类型" >
              <el-select v-model="loginType">
                <el-option
                  v-for="item in loginOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                  :disabled="item.disabled">
                </el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="用户名" prop="username">
              <el-input v-model="LoginForm.username" class="input"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
              <el-input v-model="LoginForm.password" class="input" type="password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary"  class="loginButton" @click="loginFormSubmit('LoginForm')">登录</el-button>
            </el-form-item>
        </el-form>

    </div>
  
</template>


<script>
import axios from "axios";
import { setCookie, getCookie } from "@/utils/cookie";

import auth_url from "@/constant/api/auth";

import "url-search-params-polyfill";

const LOGIN_OPTIONS = [
  {value: 'loginWithUserName', label: '用户名登录'},
  {value: 'logonWithPhone', label: '手机号登录', disabled: true},
  {value: 'logonWithEmail', label: 'Email登录', disabled: true}
]

const SESSION_ID = "sessionid";
const CSRF_TOKEN = "csrftoken";
const SESSION_EXPIRE_DAY = 14;

// 暂未使用
const SESSION_PATH = "";

export default {
  data() {
    return {
      LoginForm: {
        username: "",
        password: ""
      },

      LoginFormRules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, message: "密码至少需要输入6位", trigger: "blur" }
        ]
      },
      loginType: LOGIN_OPTIONS[0].value,
      loginOptions: LOGIN_OPTIONS
    };
  
  },

  methods: {
    loginFormSubmit: function(formName) {
      let self = this;
      this.$refs[formName].validate(valid => {
        if (valid) {
          self.login();
        } else {
          self.$message({
            showClose: true,
            message: "输入信息不完整",
            type: "warning"
          });

          return false;
        }
      });
    },
    login: function() {
      let self = this;
      let loginParams = new URLSearchParams(this.LoginForm);
      axios({
        url: auth_url.login,
        method: "post",
        data: loginParams,
        withCredentials: false
      })
        .then(response => {
          self.$message({
            showClose: true,
            message: "登录成功",
            type: "success"
          });

          // 写入 Cookies
          // Cookies.set(SESSION_ID, response.data.session_key, { expires: SESSION_EXPIRE_DAY });
          // 线上会自动写入 cookie  和 csrf token
          // setCookie(SESSION_ID, response.data.session_key, SESSION_EXPIRE_DAY);
          // localStorage.setItem("sessionid", response.data.session_key);
          // 跳转
          // let redirect = decodeURIComponent(self.$route.query.redirect || '/');
          // self.$router.push({ path: redirect }); //登录成功之后重定向到首页
          this.$router.push("/");
          // auth = true;
        })

        .catch(error => {
          self.$message({
            showClose: true,
            message: error.message,
            type: "error"
          });
        });
    }
  }
};
</script>

<style scored>
.loginForm {
  /* 居中 */
  /* position: absolute;
        top: 20%;
        left: 50%;
        -webkit-transform: translate(-50%, -50%);
        -moz-transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        -o-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%); */
  /* top: 50%;
        left: 25%;
        width: 400px;
        height: 250px; */
  width: 400px;
  height: 300px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;

  /* 背景 */
  padding: 20px 30px 20px 30px;
  background-color: #f7f7f9;
  border-color: #ddd;
  border-width: 20px;
  border-radius: 10px 10px 10px 10px;
}
.input {
  width: 400px;
}

.loginButton {
  margin-top: 20px;
  /* padding-top: 100px; */
  width: 150px;
}
</style>

