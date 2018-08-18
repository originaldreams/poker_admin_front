import { apiBase } from "./apiBase";

export const AUTH_URL = apiBase() + '/';

export default {
    "loginWithUserName": AUTH_URL + "logonWithUserName",
    "logonWithPhone": AUTH_URL + "logonWithPhone",
    "logonWithEmail": AUTH_URL + "logonWithEmail",
    "login":+"./api/logon"
    // "logout": AUTH_URL + '/logout'
}