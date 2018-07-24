<template>
  <div>
    <el-form>
      <el-form-item label="验证码">
      </el-form-item>
    </el-form>
  </div>
</template>

<style scoped>

</style>

<script>
export default {
  props: {
    /**
     * 类型
     * MOBILE EMAIL 
     * 根据传入的类型，判断是根据哪种方式去修改密码
     */
    category: String
  },

  // props: ['type'],
  data() {
    return {
    }
  },

  methods: {

  },

  mounted() {
  }
}
</script>


