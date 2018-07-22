<!-- -->
<template>
  <div>
    <h2>用户资料</h2>
    <div>
      <img src="../../assets/logo.png" class="round_icon" alt="">
    </div>
    <!-- 表单 -->
    <div>
      <user-information-form></user-information-form>
    </div>
  </div>
</template>

<style>

</style>

<script>
// @ is an alias to /src
import UserInformationForm from '@/components/userCenter/UserInformationForm.vue'

export default {
  name: '',
  components: {
    UserInformationForm
  }
}
</script>

<style scoped>

.round_icon{
  width: 64px;
  height: 64px;
  display: flex;
  border-radius: 50%;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

</style>
