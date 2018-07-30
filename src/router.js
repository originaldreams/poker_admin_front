import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import UserInformation from './views/userCenter/UserInformation.vue'
import ResetPassword from './views/userCenter/ResetPassword.vue'
import ResetPasswordForm from './components/userCenter/ResetPasswordForm.vue'
import Login from './views/auth/Login.vue'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      redirect: '/userInformation',
      children: [
        {
          path: 'userInformation',
          component: UserInformation,
        },
        {
          path: 'resetPassword',
          component: ResetPassword,
          children: [
            { name: 'resetPasswordForMobile', path: 'mobile', component: ResetPasswordForm, props: true },
            { name: 'resetPasswordForEmail',path: 'email', component: ResetPasswordForm, props: true }
          ]
        },
      ]
    },


    {
      path: '/login',
      component: Login
    }
  ]
})
