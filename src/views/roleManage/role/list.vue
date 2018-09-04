<template>
    <div>
        <div>
            <el-button type="primary">修改信息</el-button>
            <el-button type="primary" @click="showRoleRoutersTrans">修改权限</el-button>
        </div>
        <el-dialog :visible.sync="page.showTransDialog" close-on-click-modal open="open">
            <role-rotuers-trans :role="page.roleRoutersData.selected"
                                :showTrans="page.roleRoutersData.showTrans"></role-rotuers-trans>
        </el-dialog>

        <el-table :data="roles" stripe border highlight-current-row @current-change="selectedRow">
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="name" label="角色名"></el-table-column>

            <el-table-column prop="description" label="描述"></el-table-column>

            <el-table-column prop="createTime" label="注册时间"></el-table-column>
        </el-table>
        <el-pagination layout="total,sizes,prev,pager,next,jumper" background :page-sizes="[10,20,30,50,100]"
                       :page-size="20" :total="50">
        </el-pagination>
    </div>
</template>
<script>
    import ElButton from "../../../../node_modules/element-ui/packages/button/src/button.vue";
    import RoleRotuersTrans from "../../../components/roleManage/role/RoleRouterTrans.vue";
    import roleApi from "../../../constant/api/role";

    export default {
        components: {ElButton, RoleRotuersTrans},
        data() {
            return {
                page: {
                    showTransDialog: false,
                    roleRoutersData: {
                        selected: "",
                        showTrans: false,
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
                if (!this.page.roleRoutersData.selected) {
                    this.$message.error("请选择一个角色")
                    return;
                }
                this.page.showTransDialog = true;
                this.page.roleRoutersData.showTrans = true;

            },
            //选中行
            selectedRow(currentRow) {
                this.page.roleRoutersData.selected = currentRow;
            },

        }
    };
</script>
<style>


</style>



