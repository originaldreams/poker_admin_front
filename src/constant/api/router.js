import {apiBase} from './apiBase';

export const ROLE_URL = apiBase() + '/api';

export default {
    //获取角色信息列表

    userPanagerPermissionGetAllRouters: ROLE_URL + "?methodName=USER_MANAGER_PERMISSION_GET_ALL_ROUTERS",
}