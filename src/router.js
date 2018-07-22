import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/Home.vue'
// import About from './views/About.vue'
import UserInformation from './views/userCenter/UserInformation.vue'
import ResetPassword from './views/userCenter/ResetPassword.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/userInformation'
    },
    {
      path: '/userInformation',
      component: UserInformation,
    },
    {
      path: '/resetPassword',
      component: ResetPassword
    }

    // {
    //   path: '/about',
    //   name: 'about',
    //   component: About
    // }
  ]
})
