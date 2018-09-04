import {apiBase} from './apiBase';

export const ROLE_URL = apiBase() + '/api';

export default {
    //获取角色信息列表
    userManagerPermissionGetAllRoles: ROLE_URL + "?methodName=USER_MANAGER_PERMISSION_GET_ALL_ROLES",
    userManagerPermissionManagerUpdateRole: ROLE_URL + "?methodName=USER_MANAGER_PERMISSION_MANAGER_UPDATE_ROLE"
}