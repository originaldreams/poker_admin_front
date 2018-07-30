export const localHostApi = 'http://127.0.0.1:8000/api';


export const onlineHostApi = 'http//example.com/api';

export const hostApi = '/api';


const URLS = [localHostApi, onlineHostApi];

const LOCAL = '127.0.0.1';
const ONLINE = 'example';


export function apiBase() {
    let hostname = window.location.hostname;
    let API_BASE_URL = '';
    
    if (hostname === '127.0.0.1') {
        API_BASE_URL = localHostApi;
    } else if (hostname === 'example') {
        API_BASE_URL = hostApi;
    } else if (hostname === 'test.example.com') {
        API_BASE_URL = onlineHostApi;
    }
    
    return API_BASE_URL;
}


