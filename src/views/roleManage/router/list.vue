<template>
    <div>
        <el-table :data="routers" stripe border>
            <el-table-column prop="id" label="ID"></el-table-column>
            <el-table-column prop="methodName" label="功能名"></el-table-column>

            <el-table-column prop="serviceName" label="组件名"></el-table-column>

            <el-table-column prop="controllerName" label="Controller"></el-table-column>
            <el-table-column prop="routerUrl" label="URL"></el-table-column>
            <el-table-column prop="requestMethod" label="请求方式"></el-table-column>

        </el-table>
        <el-pagination layout="total,sizes,prev,pager,next,jumper" :background="true" :pager-count="7" :page-sizes="[10,20,30,50,100]" :page-size="20" :total="50">
        </el-pagination>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                page: {
                },
                routers: [
                    {
                        "id": 10000,
                        "serviceName": "LogCenter",
                        "controllerName": "http",
                        "methodName": "get",
                        "routerUrl": "http://LogCenter/http/get",
                        "firstMask": null,
                        "secondMask": null,
                        "requestMethod": "GET"
                    }
                ]
            };
        },

        methods: {
            //直接查询
            search(type) {
                const h = this.$createElement;

                if (type == 1) {
                    this.$notify({
                        title: "具体搜索",
                        message: h(
                            "i",
                            { style: "color: teal" },
                            this.formData.searchType + "|" + this.formData.search
                        )
                    });
                } else if (type == 2) {
                    this.$message(JSON.stringify(this.formData.searchTime));
                }
            }
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



