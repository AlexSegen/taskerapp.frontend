import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';

import validators from '../../helpers/validators';

const initialState = {email: "", password: ""};

const LoginPage = () => {

    const { Login, loading, error } = useAuth();

    const { form, handleChange } = useForm(initialState);

    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setInvalidPayload(null);

        if(!validators.isEmail(form.email)) {
            setInvalidPayload('Your email is not valid.');
            return;
        }

        if(validators.isEmpty(form.password)) {
            setInvalidPayload('Your password is empty.');
            return;
        }

        
        Login(form);

    }

    return ( 
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">

                <h1 className="text-base text-2xl text-center">Login</h1>

                <p className="mb-5 text-center text-gray-600">Login to start creating content</p>

                <div className="relative mb-4">
                    <input disabled={loading} onChange={handleChange} type="email" name="email" placeholder="Email" className="w-full px-5 py-2 text-base bg-gray-200"/>
                    <span className="text-sm text-red-300"></span>
                </div>

                <div className="relative mb-4">
                    <input disabled={loading} onChange={handleChange} type="password" name="password" placeholder="Password" className="w-full px-5 py-2 text-base bg-gray-200"/>
                </div>

                {
                    error && <div className="alert-danger">{error}</div>
                }
                {
                    invalidPayload && <div className="alert-danger">{invalidPayload}</div>
                }
                        
                <div className="text-center">
                    <button disabled={loading} type="submit" className="py-2 bg-blue-600 button hover:bg-blue-700 focus:outline-none">{loading ?'Loading...' : 'Login'}</button>
                </div>

                <div className="mt-2 text-center">
                    <Link className="underline" to="/register">Register</Link>
                </div>

            </form>
        </div>
     );
}
 
export default LoginPage;