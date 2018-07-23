<!-- 重置密码 email和mobile公用组件 -->
<template>
  <div >
    <div class="mobileLabel">
      <div v-if="mobileCheckingSwitch">
        <a >手机号验证</a>
      </div>
      <div v-else>
        <!-- 内容 -->
        <reset-password-form type="MOBILE_TYPE"></reset-password-form>
      </div>
      
      
      
    </div>
    <div class="emailLabel">
      <div v-if="emailCheckingSwitch">
        <a >邮箱验证</a>
      </div>
      <div v-else>
        <reset-password-form type="EMAIL_TYPE"></reset-password-form>
      </div>
      
    </div>
    
  </div>
</template>

<style scoped>

.mobileLabel {
  margin: 30px 0px 20px 0px;
  color: blue;
}

.emailLabel {
  margin: 0px 0px 0px 0px;
  color: blue;
}

</style>

<script>
import ResetPasswordForm from '@/components/userCenter/ResetPasswordForm.vue'

const MOBILE_TYPE = "MOBILE";
const EMAIL_TYPE = "EMAIL";

export default {
  components: {
    ResetPasswordForm
  },
  data() {
    return {
      mobileCheckingSwitch: true,
      emailCheckingSwitch: true,
      MOBILE_TYPE: MOBILE_TYPE,
      EMAIL_TYPE: EMAIL_TYPE
    }
  },

  methods: {

  }
}
</script>
