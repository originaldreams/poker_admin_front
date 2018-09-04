"use strict";

import Vue from 'vue';
import axios from "axios";
import {Message} from "element-ui";
// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

let config = {
    // baseURL: process.env.baseURL || process.env.apiUrl || ""
    // timeout: 60 * 1000, // Timeout
    // withCredentials: true, // Check cross-site Access-Control
};

const _axios = axios.create(config);

_axios.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
_axios.interceptors.response.use(
    function (response) {
        if (response.status == 200) {
            let data = response.data;
            console.log(JSON.stringify(data))
            switch (data.success) {
                case 0:
                    return data.data;
                    break;
                case 1:
                    Message({
                        showClose: true,
                        message: data.message,
                        type: "error"
                    })
                    break;
                default:
                    Message({
                        showClose: true,
                        message: "未知状态",
                        type: "error"
                    });
                    break;
            }
        }

    },
    function (error) {
        if (error.response) {
            let response = error.response
            switch (response.status) {
                case 500:
                    Message({
                        showClose: true,
                        message: '请求异常,请重试',
                        type: "error"
                    })
                    break;
                case 403:
                    Message({
                        showClose: true,
                        message: response.data.message,
                        type: 'error'
                    })
                    break;
                default:
                    Message({
                        showClose: true,
                        message: '未知错误',
                        type: 'error'
                    })
            }

        }
        return Promise.reject(error);
    }
);

Plugin.install = function (Vue, options) {
    Vue.axios = _axios;
    window.axios = _axios;
    Object.defineProperties(Vue.prototype, {
        axios: {
            get() {
                return _axios;
            }
        },
        $axios: {
            get() {
                return _axios;
            }
        },
    });
};

Vue.use(Plugin)

export default Plugin;
