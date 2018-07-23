<!-- -->
<template>
  <div class="resetPassword">
      <h2>重置密码</h2>
      <reset-password-route></reset-password-route>
  </div>
</template>

<style scoped>

.resetPassword {
  margin: -20px 20px 20px 40px;
}

</style>


<script>
// @ is an alias to /src
import ResetPasswordRoute from '@/components/userCenter/ResetPasswordRoute.vue'

export default {
  name: '',
  components: {
    ResetPasswordRoute
  }
}
</script>