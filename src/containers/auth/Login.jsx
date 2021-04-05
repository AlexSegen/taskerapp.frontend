import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import validators from '../../helpers/validators';
import { SpinnerI } from '../../components/Icons';
import { FORGOT_PASSWORD, REGISTER,  } from '../../constants/paths';

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
        <div className="max-w-sm mx-auto mt-10 md:mt-20">
        <div className="p-5 bg-white rounded shadow-md">
            <div className="mb-4 text-center">
                <h1 className="mb-2 text-3xl font-bold text-black">Sign In</h1>
                <p className="text-gray-500">Start creating new content</p>
            </div>
            <div className="text-left">
                <div className="mb-4">
                    <input placeholder="Correo electrónico" className="field-control" type="email" name="email" onChange={handleChange} disabled={loading}/>
                </div>
                <div className="mb-4">
                    <input placeholder="Contraseña" className="field-control" type="password" name="password" onChange={handleChange} disabled={loading}/>
                </div>
                {
                    error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                }
                {
                    invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                }
                <div className="mb-4 text-right">
                    <Link className="font-semibold text-indigo-500" to={FORGOT_PASSWORD}>Forgot your password?</Link>
                </div>
                <div className="mb-4">
                    <button onClick={handleSubmit} type="button" 
                    className={`button is-primary w-full ${loading ? 'flex space-between justify-center':'block '}`}
                    disabled={loading}>
                        { loading && <SpinnerI/>}
                        {loading ? 'Login In...':'Sign In'}
                    </button>
                </div>
                <div className="mb-4 text-center text-gray-500">
                    Not member yet? <Link className="font-semibold text-indigo-500" to={REGISTER}>Join now!</Link>
                </div>
            </div>
        </div>
    </div>
     );
}
 
export default LoginPage;