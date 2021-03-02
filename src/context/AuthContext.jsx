import React, { useState, useEffect, createContext } from 'react';
import { authService } from "../services/auth.service";
import { TokenService, SetUser } from '../services/storage.service'

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {


    const [user, setUser] = useState({ first_name: "" });
    const [token, setToken] = useState(null)
    const [isAuthenticated, setAuthenticated] = useState(false);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);


    const Login = ({ email, password }) => {

        setLoading(true);
        setError(false);

        authService.login(email, password).then(data => {
            setLoading(false);
            setUser(data.user);
            setToken(data.token);
            setAuthenticated(!!data.token);

        }).catch(error => {
            setLoading(false);

            if (error.data && error.data.name === "ValidationError") {
                const message = error.data.details.body.length > 0 ? error.data.details.body[0].message : "Validation error."
                setError(message);
                return;
            }

            setError(error.message)
        });

    };

    const Register = ({ first_name, last_name, email, password }) => {

        setLoading(true)
        setError(false)

        authService.register({ first_name, last_name, email, password }).then(() => {
            setLoading(false)

        }).catch(error => {
            setLoading(false);

            if (error.data && error.data.name === "ValidationError") {
                const message = error.data.details.body.length > 0 ? error.data.details.body[0].message : "Validation error."
                setError(message);
                return;
            }

            setError(error.message)

        });

    };

   const Logout = () => {
        authService.logout();
        setAuthenticated(false);
    }

    
    const GetProfile = () => {
        setLoading(true);
        setError(false);

        authService.getProfile().then(data => {
            setLoading(false);
            setUser(data);

        }).catch(error => {
            setLoading(false);

            if (error.response) {
                setError(error.response.data.message)
                return;
            }

            setError(error.message)
        });
    }

    useEffect(() => {
        setAuthenticated(!!TokenService.getToken());
        setUser(SetUser.getUser())
        setToken(TokenService.getToken())
    }, [])


    return (
        <AuthContext.Provider value={{ Login, Logout, Register, GetProfile, isAuthenticated, user, token, loading, error }}>
            {children}
        </AuthContext.Provider>
    );

}

export default AuthContextProvider;