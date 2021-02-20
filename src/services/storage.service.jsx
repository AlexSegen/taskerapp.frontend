import cookie from "cookie-cutter";

const TOKEN_KEY = 'TASKAPP.TOKEN'
const USER = 'TASKAPP.USER'
const REFRESH_TOKEN_KEY = 'TASKAPP.REFRESH_TOKEN'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        return cookie.get(TOKEN_KEY) //localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        //localStorage.setItem(TOKEN_KEY, accessToken)
        cookie.set(TOKEN_KEY, accessToken, { path: "/", expires: 3600 })
    },

    removeToken() {
       // localStorage.removeItem(TOKEN_KEY)
        cookie.set(TOKEN_KEY, "", { path: "/", expires: 1 })
    },

    getRefreshToken() {
        return cookie.get(REFRESH_TOKEN_KEY) // localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        //localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
        cookie.set(REFRESH_TOKEN_KEY, refreshToken, { path: "/", expires: 7200 })
    },

    removeRefreshToken() {
        //localStorage.removeItem(REFRESH_TOKEN_KEY)
        cookie.set(REFRESH_TOKEN_KEY, "", { path: "/", expires: 1 })
    }

}

const SetUser = {
    getUser() {
        try {
            let user = localStorage.getItem(USER);
            return JSON.parse(user)
        } catch (error) {
            console.error('error', error.message)
            return {
                first_name: ""
            }
        }
    },
    isAdmin(){
        let user = this.getUser();
        return user != null ? user.role === 'admin' : false
    },
    saveUser(user) {
        localStorage.setItem(USER, JSON.stringify(user));
    },

    removeUser() {
        localStorage.removeItem(USER, null)
    },
    getPermissions() {
        const token = TokenService.getToken();
    
        if(!token)
            return [];
        
        const splitted = token.split('.');

        
        const item = splitted.length > 0 ? splitted[1] : null;
        
        if(!item)
        return [];
        
        const decoded = JSON.parse(atob(item));
    
        return decoded;
    
    }
}


export { TokenService, SetUser }