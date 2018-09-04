<template>
    <div class="loginForm">
        <h3>登录</h3>
        <el-form ref="LoginForm" :model="LoginForm" :rules="LoginFormRules" label-width="80px">
            <el-form-item label="登录类型">
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
                <el-input v-model="LoginForm.userName" class="input"></el-input>
            </el-form-item>

            <el-form-item label="密码" prop="password">
                <el-input v-model="LoginForm.password" class="input" type="password"></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" class="loginButton" @click="loginFormSubmit('LoginForm')">登录</el-button>
            </el-form-item>
        </el-form>

    </div>

</template>


<script>
    import {setCookie, getCookie} from "@/utils/cookie";
    import auth_url from "@/constant/api/auth";

    import "url-search-params-polyfill";

    const LOGIN_OPTIONS = [
        {value: "loginWithUserName", label: "用户名登录"},
        {value: "logonWithPhone", label: "手机号登录", disabled: true},
        {value: "logonWithEmail", label: "Email登录", disabled: true}
    ];

    const SESSION_ID = "sessionid";
    const CSRF_TOKEN = "csrftoken";
    const SESSION_EXPIRE_DAY = 14;

    // 暂未使用
    const SESSION_PATH = "";

    export default {
        data() {
            return {
                LoginForm: {
                    userName: "",
                    password: ""
                },

                LoginFormRules: {
                    userName: [
                        {required: true, message: "请输入用户名", trigger: "blur"}
                    ],
                    password: [
                        {required: true, message: "请输入密码", trigger: "blur"},
                        {min: 6, message: "密码至少需要输入6位", trigger: "blur"}
                    ]
                },
                loginType: LOGIN_OPTIONS[0].value,
                loginOptions: LOGIN_OPTIONS
            };
        },

        methods: {
            loginFormSubmit: function (formName) {
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
            login: function () {
                let self = this;
                let loginParams = new URLSearchParams(this.LoginForm);
                axios.post(auth_url.loginWithUserName,
                    loginParams
                ).then(response => {
                    self.$message({
                        showClose: true,
                        message: "登录成功",
                        type: "success"
                    });
                    //写入 Cookies
                   setCookie(SESSION_ID, response.session_key, {
                        expires: SESSION_EXPIRE_DAY
                    });
                   // localStorage.setItem("sessionid", response.session_key);
                   // let redirect = decodeURIComponent(self.$route.query.redirect || "/");
                    //跳转
                    //self.$router.push({path: redirect}); //登录成功之后重定向到首页
                    self.$router.push("/");

                })

            }
        }
    };
</script>

<style scored>
    .loginForm {
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

