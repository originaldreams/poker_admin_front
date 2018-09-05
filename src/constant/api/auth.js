import { apiBase } from "./apiBase";

export const AUTH_URL = apiBase() + '/api';

export default {
    "login": AUTH_URL + "/logon",
    "register":AUTH_URL+"/register",
    // "logout": AUTH_URL + '/logout'
}