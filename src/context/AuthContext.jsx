import React, { useEffect, createContext, useReducer } from 'react';

import { authService } from "../services/auth.service";
import { useNotification } from '../hooks/useNotification';
import { TokenService, SetUser } from '../services/storage.service'
import { authReducer, initialState } from './reducers/authReducer';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {

    const { toastSuccess, toastError } = useNotification();

    const [state, dispatch] = useReducer(authReducer, initialState);

    const Login = ({ email, password }) => {
        dispatch({ type: "AUTH_REQUEST"});
        return authService.login(email, password).then(data => {
            const { user, token } = data;
            dispatch({ type: "LOGIN_SUCCESS", payload: { user, token, isAuthenticated: true }});
        }).catch(error => {
            if (error.data && error.data.name === "ValidationError") {
                    const message = error.data.details.body.length > 0 ? error.data.details.body[0].message : "Validation error."
                    dispatch({ type: "AUTH_FAILED", payload: message })
                return;
            }
            dispatch({ type: "AUTH_FAILED", payload: error.message });
        });

    };

    const Register = ({ first_name, last_name, email, password }) => {
        dispatch({ type: "AUTH_REQUEST" });
        return authService.register({ first_name, last_name, email, password }).then(() => {
            dispatch({ type: "REGISTER_SUCCESS" });
        }).catch(error => {
            if (error.data && error.data.name === "ValidationError") {
                    const message = error.data.details.body.length > 0 ? error.data.details.body[0].message : "Validation error."
                    dispatch({ type: "AUTH_FAILED", payload: message })
                return;
            }
            dispatch({ type: "AUTH_FAILED", payload: error.message });
        });
    };

   const Logout = () => {
       return new Promise(() => {
           authService.logout();
           dispatch({ type: "LOGOUT" });
       })
    }
    
    const GetProfile = () => {
        dispatch({ type: "AUTH_REQUEST" });
        return authService.getProfile().then(data => {
            dispatch({ type: "SET_PROFILE", payload: data });
        }).catch(error => {
            dispatch({ type: "AUTH_FAILED", payload: error.message });
        });
    }

    const UpdateProfile = (payload) => {
        dispatch({ type: "AUTH_REQUEST" });
        return authService.updateProfile(payload).then(data => {
            dispatch({ type: "SET_PROFILE", payload: data });
            toastSuccess("Perfil actualizado");
        }).catch(error => {
            dispatch({ type: "AUTH_FAILED", payload: error.message });
        });
    }

    const UpdateAvatar = (avatar) => {
        dispatch({ type: "UPLOAD_REQUEST" });
        return authService.updateAvatar(avatar).then(data => {
            dispatch({ type: "SET_PROFILE", payload: data });
            toastSuccess("Avatar actualizado");
        }).catch(error => {
            dispatch({ type: "UPLOAD_FAILED", payload: error.message });
            toastError("Error al actualizar avatar");
        });
    }

    const UpdatePassword = (password) => {
        dispatch({ type: "AUTH_REQUEST" });
        return authService.updateProfilePassword(password).then(() => {
            dispatch({ type: "SUCCESS_REQUEST" });
            toastSuccess("Contraseña actualizada");
        }).catch(error => {
            dispatch({ type: "AUTH_FAILED", payload: error.message });
            toastError("Error al actualizar contraseña");
        });
    }

    useEffect(() => {
        dispatch({ type: "LOGIN_SUCCESS", payload: {
            user: SetUser.getUser(),
            token: TokenService.getToken(),
            isAuthenticated: !!TokenService.getToken()
        }});

    }, [])

    return (
        <AuthContext.Provider value={{ Login, Logout, Register, GetProfile, UpdateProfile, UpdateAvatar, UpdatePassword, ...state }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;