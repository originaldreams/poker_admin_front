import {apiBase}  from './apiBase';
export const USER_URL=apiBase()+'/api';

export default {
    //获取角色信息列表
    userManagerPermissionGetAllUsernameAndRolename:USER_URL+"?methodName=USER_MANAGER_PERMISSION_GET_ALL_USERNAME_AND_ROLENAME"
}