<template>
    <div>
        <div>
            <el-button type="primary" @click="showRoleAddForm">添加角色</el-button>
            <el-button type="primary" @click="showRoleUpdateForm">修改信息</el-button>
            <el-button type="primary" @click="showRoleRoutersTrans">修改权限</el-button>
        </div>

        <el-table :data="roles" stripe border highlight-current-row @current-change="selectedRow">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="角色名"></el-table-column>

            <el-table-column prop="description" label="描述"></el-table-column>

            <el-table-column prop="createTime" label="注册时间"></el-table-column>
        </el-table>
        <el-pagination layout="total,sizes,prev,pager,next,jumper" background :page-sizes="[10,20,30,50,100]"
                       :page-size="20" :total="50">
        </el-pagination>

        <!--角色权限修改-->
        <el-dialog :visible.sync="page.roleRoutersData.showDialog" close-on-click-modal open="open">
            <role-rotuers-trans :role="page.selected"
                                @close-dialog="page.roleRoutersData.showDialog=false"
            ></role-rotuers-trans>
        </el-dialog>
        <!--角色新增-->
        <el-dialog :visible.sync="page.roleAddFormData.showDialog" close-on-click-modal open="open">
            <role-add-form  @close-dialog="page.roleAddFormData.showDialog=false"></role-add-form>
        </el-dialog>
        <!--角色修改-->
        <el-dialog :visible.sync="page.roleUpdateFormData.showDialog" close-on-click-modal open="open">
            <role-update-form :role="page.selected"
                              @close-dialog="page.roleUpdateFormData.showDialog=false"></role-update-form>
        </el-dialog>

    </div>
</template>
<script>
    import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";
    import RoleRotuersTrans from "../../../components/roleManage/role/RoleRouterTrans.vue";
    import RoleUpdateForm from "../../../components/roleManage/role/RoleUpdateForm.vue";
    import RoleAddForm from "../../../components/roleManage/role/RoleAddForm.vue";
    import roleApi from "../../../constant/api/role";
    import ElDialog from "../../../../../examweb/node_modules/element-ui/packages/dialog/src/component.vue";

    export default {
        components: {
            ElDialog,
            ElButton, RoleRotuersTrans, RoleAddForm, RoleUpdateForm
        },
        data() {
            return {
                page: {
                    selected: "",

                    roleRoutersData: {
                        showDialog: false,
                    },
                    roleAddFormData: {
                        showDialog: false,

                    },
                    roleUpdateFormData: {
                        showDialog: false,

                    }
                },
                roles: []
            };
        },
        created() {
            this.initPage();
        },

        methods: {
            //初始化页面
            initPage() {
                var vm = this;
                axios.get(roleApi.userManagerPermissionGetAllRoles,
                ).then(function (data) {
                    vm.roles = data;
                })
            },
            //显示权限选择框
            showRoleRoutersTrans() {
                if (!this.page.selected) {
                    this.$message.error("请选择一个角色")
                    return;
                }
                this.page.roleRoutersData.showDialog = true;

            },
            //显示添加页面
            showRoleAddForm() {
                this.page.roleAddFormData.showDialog = true;
            },
            //显示添加页面
            showRoleUpdateForm() {
                if (!this.page.selected) {
                    this.$message.error("请选择一个角色")
                    return;
                }
                this.page.roleUpdateFormData.showDialog = true;

            },
            //选中行
            selectedRow(currentRow) {
                let vm = this;
                vm.page.selected = currentRow;
            },

        }
    };
</script>
<style>


</style>



