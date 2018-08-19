<template>
    <div v-show="showTrans">
            <el-transfer v-model="roleRouters" :data="routers"></el-transfer>
        <el-button type="pirmary" @click="submit">确认</el-button>
    </div>
</template>
<script>
    import ElDialog from "../../../../node_modules/element-ui/packages/dialog/src/component.vue";
    import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";

    export default {
        components: {
            ElButton,
            ElDialog},
        props: {routers: Array,
            role:{
             default:{}
            },
            //是否显示
            showTrans:{default:false},
        },
        data() {
            return {
                roleRouters: [1,2]
            }
        },
        methods:{
            //提交数据
            submit(){
                console.log(JSON.stringify(this.role));
            }
        }
    }
</script>
<style>

</style>