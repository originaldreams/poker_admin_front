<!-- -->
<template>
  <div class="information">
    <h2>用户资料</h2>
    <div>
      <!-- <img src="../../assets/logo.png" class="round_icon" alt=""> -->
      <user-avatar></user-avatar>
    </div>
    <!-- 表单 -->
    <div>
      <user-information-form></user-information-form>
    </div>
  </div>
</template>

<style scoped>
.information {
  margin: -20px 20px 20px 40px;
}

</style>

<script>
// @ is an alias to /src
import UserInformationForm from '@/components/userCenter/UserInformationForm.vue'
import UserAvatar from '@/components/userCenter/UserAvatar.vue'
export default {
  
  components: {
    UserInformationForm,
    UserAvatar
  },

  data() {
    return {
      
    };
  },
  methods: {
    
  }
}
</script>


