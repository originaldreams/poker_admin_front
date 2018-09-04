<template>

    <div>
        <el-form ref="role" :model="role" label-width="80px" :rules="roleFormRules" :label-position="'right'">
            <el-form-item label="角色名:" prop="name">
                <el-input type="text" v-model="role.name" placeholder="请输入角色名" style="width: 160px"/>
            </el-form-item>
            <el-form-item label="描述:">
                <el-input type="text" v-model="role.description" prop="description" placeholder="描述信息"
                          style="width: 200px"/>
            </el-form-item>

        </el-form>
        <div style="text-align: center">
            <el-button type="pirmary" @click="roleAddFormSubmit">提交</el-button>

        </div>
    </div>
</template>
<script>
    import ElForm from "../../../../../examweb/node_modules/element-ui/packages/form/src/form.vue";
    import ElFormItem from "../../../../../examweb/node_modules/element-ui/packages/form/src/form-item.vue";
    import ElButton from "../../../../../examweb/node_modules/element-ui/packages/button/src/button.vue";
    import role_url from "../../../constant/api/role"

    export default {
        components: {
            ElButton,
            ElFormItem,
            ElForm
        },

        data() {
            return {
                role: {
                    name: '',
                    description: ''
                },
                roleFormRules: {
                    name: [
                        {required: true, message: "请输入角色名", trigger: "blur"}
                    ],
                    description: [
                        {max: 200, message: "描述不能太长", trigger: "blur"}
                    ]
                }
            }
        },
        methods: {
            roleAddFormSubmit: function () {
                let self = this;
                this.$refs.role.validate(valid => {
                    if (valid) {
                        let param = "name:" + Base64.encode(self.role.name) + ";description:" + Base64.encode(self.role.description);
                        axios.post(role_url.userManagerPermissionManagerAddRole + "&parameters=" + param).then(response => {
                            self.$emit('close-dialog');
                        }).catch(function () {
                            self.$emit('close-dialog');
                        })

                    } else {
                        self.$message({
                            showClose: true,
                            message: "输入信息不完整",
                            type: "warning"
                        });
                        return false;
                    }
                });
            },

        }
    }

</script>