<template>
  <div>
    1231232132321
    <div>
      {{ category }}
    </div>
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


