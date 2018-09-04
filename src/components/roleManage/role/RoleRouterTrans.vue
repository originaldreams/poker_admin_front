<template>
    <div >
        <el-transfer v-model="roleRouters" :data="routers" :props="{
      key: 'id',
      label: 'serviceName'
    }"></el-transfer>
        <el-button type="pirmary" @click="submit">确认</el-button>
    </div>
</template>
<script>
    import ElDialog from "../../../../node_modules/element-ui/packages/dialog/src/component.vue";
    import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";
    import router_url from "../../../constant/api/router"

    export default {
        data() {
            return {
                roleRouters: [1, 2],
                routers: []
            }
        },
        props: {
            role: {
                type: Object,
                default: null
            },
        },
        components: {
            ElButton,
            ElDialog
        },


        mounted() {
            this.init();
        },
        methods: {
            init() {
                let vm = this
                if (vm.role) {
                    axios.get(router_url.userManagerPermissionGetAllRouters).then(function (data) {

                        vm.routers = data

                    })

                }
                if (vm.id) {

                }
            },
            //提交数据
            submit() {
                console.log(JSON.stringify(this.role));
                self.$emit('close-dialog');
            }
        }
    }
</script>
<style>

</style>