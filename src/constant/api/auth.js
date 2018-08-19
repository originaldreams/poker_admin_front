import { apiBase } from "./apiBase";

export const AUTH_URL = apiBase() + '/api';

export default {
    "loginWithUserName": AUTH_URL + "/logon",
    "logonWithPhone": AUTH_URL + "?logonWithPhone",
    "logonWithEmail": AUTH_URL + "?logonWithEmail",

    // "logout": AUTH_URL + '/logout'
}