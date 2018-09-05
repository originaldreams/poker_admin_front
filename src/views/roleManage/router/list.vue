<template>
    <div>
        <el-table :data="routers"  stripe border>
                <el-table-column prop="id" label="ID" width="100px"></el-table-column>
            <el-table-column prop="methodName" label="功能名" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="serviceName" label="组件名" :show-overflow-tooltip="true"></el-table-column>

            <el-table-column prop="controllerName" label="Controller" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="routerUrl" label="URL"  :show-overflow-tooltip="true" ></el-table-column>
            <el-table-column prop="requestMethod" label="请求方式" :show-overflow-tooltip="true" width="80px"></el-table-column>

        </el-table>
        <el-pagination layout="total,sizes,prev,pager,next,jumper" :background="true" :pager-count="7"
                       :page-sizes="[10,20,30,50,100]" :page-size="20" :total="50">
        </el-pagination>
    </div>
</template>
<script>
    import routerApi from  "../../../constant/api/router"
    export default {
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

                routers: []
            };
        },
        created() {
            this.initPage();
        },
        methods: {
            //初始化页面
            initPage() {
                var vm = this;
                axios.get(routerApi.userManagerPermissionGetAllRouters).then(function (data) {
                    vm.routers = data;
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
    .table-expand {
        font-size: 0;
    }

    .table-expand label {
        width: 90px;
        color: #99a9bf;
    }

    .table-expand .el-form-item {
        margin: 0;
        margin-bottom: 0;
        width: 50%;
    }
</style>



