import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { useAuth } from '../../hooks/useAuth';

import validators from '../../helpers/validators';

const initialState = {email: "", password: ""};

const RegisterPage = () => {

    const { Register, loading, error } = useAuth();

    const { form, handleChange } = useForm(initialState);

    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setInvalidPayload(null);

        if(!validators.isEmail(form.email)) {
            setInvalidPayload('Your email is not valid.');
            return;
        }

        if(!validators.password.Length(form.password)) {
            setInvalidPayload('Your password must be at least 8 character length.');
            return;
        }

        
        Register(form);

    }

    return ( 
        <div className="flex items-center justify-center min-h-screen">
            <form onSubmit={handleSubmit} className="max-w-sm mx-auto">

                <h1 className="text-base text-2xl text-center">Register</h1>

                <p className="mb-5 text-center text-gray-600">Join now and start creating content</p>

                <div className="relative mb-4">
                    <input disabled={loading} onChange={handleChange} type="text" name="avatar" placeholder="Avatar URL" className="w-full px-5 py-2 text-base bg-gray-200"/>
                    <span className="text-sm text-red-300"></span>
                </div>

                <div className="relative mb-4">
                    <input disabled={loading} onChange={handleChange} type="text" name="first_name" placeholder="First Name" className="w-full px-5 py-2 text-base bg-gray-200"/>
                    <span className="text-sm text-red-300"></span>
                </div>

                <div className="relative mb-4">
                    <input disabled={loading} onChange={handleChange} type="text" name="last_name" placeholder="Last Name" className="w-full px-5 py-2 text-base bg-gray-200"/>
                    <span className="text-sm text-red-300"></span>
                </div>

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
                    <button disabled={loading} type="submit" className="py-2 bg-blue-600 button hover:bg-blue-700 focus:outline-none">{loading ?'Loading...' : 'Register'}</button>
                </div>

            </form>
        </div>
     );
}
 
export default RegisterPage;