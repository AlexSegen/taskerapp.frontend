import axios from 'axios'

import { LOGIN } from '../constants/paths';
import { authService } from './auth.service';
import { TokenService } from './storage.service'
export class RequestError extends Error {
    constructor(errorCode, message, data) {
        super(message)
        this.name = this.constructor.name
        this.data = data;
        this.message = message
        this.errorCode = errorCode
    }
}

axios.interceptors.response.use(undefined, function axiosRetryInterceptor(err) {
    if (err.response && err.response.status === 401 && err.response.data.code === "TOKEN_EXPIRED") {
        authService.logout();
        window.location.href = `//${window.location.host}${LOGIN}?redirect=expired`;
    }
    return Promise.reject(err);
})


const ApiService = {

    init(baseURL) {
        axios.defaults.baseURL = baseURL;
    },

    setHeader() {
        axios.defaults.headers.common["Authorization"] = `Bearer ${TokenService.getToken()}`
    },

    removeHeader() {
        axios.defaults.headers.common = {}
    },

    get(resource) {
        return axios.get(resource)
    },

    post(resource, data) {
        return axios.post(resource, data)
    },

    put(resource, data) {
        return axios.put(resource, data)
    },

    delete(resource) {
        return axios.delete(resource)
    },

    /**
     * Perform a custom Axios request.
     *
     * data is an object containing the following properties:
     *  - method
     *  - url
     *  - data ... request payload
     *  - auth (optional)
     *    - username
     *    - password
    **/
    customRequest(data) {
        return axios(data)
    }
}

export default ApiService