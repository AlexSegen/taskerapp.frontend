export const initialState = {
    user: null,
    isAuthenticated: false,
    token: null,
    loading: false,
    error: null,
    uploading: false,
    uploadingError: null
}

export const authReducer = (state, action) => {

    switch (action.type) {
        case "SUCCESS_REQUEST":
            return {
                ...state,
                error: null,
                loading: false
            }
        case "AUTH_REQUEST":
            return {
                ...state,
                error: null,
                loading: true
            }
        case "UPLOAD_REQUEST":
            return {
                ...state,
                error: null,
                uploading: true,
                uploadingError: null
            }
        case "UPLOAD_FAILED":
            return {
                ...state,
                uploading: false,
                uploadingError: action.payload
            }
        case "AUTH_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case "LOGIN_SUCCESS":
            return {
                ...state,
                loading: false,
                ...action.payload
            }

        case "LOGOUT":
            return {
                ...state,
                user: null,
                isAuthenticated: false,
                token: null,
                loading: false
            }

        case "REGISTER_SUCCESS":
            return {
                ...state,
                loading: false,
                ...action.payload
            }

        case "SET_PROFILE":
            return {
                ...state,
                loading: false,
                user: action.payload,
                uploading: false,
                uploadingError: null
            }

        case "SET_PROFILE_FAIL":
            return {
                ...state,
                loading: false,
                error: action.payload
            }
    
        default:
            return state;
    }
}