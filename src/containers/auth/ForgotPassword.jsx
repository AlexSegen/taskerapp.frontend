import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {  HOME } from '../../constants/paths';
import { SpinnerI } from '../../components/Icons';
import validators from '../../helpers/validators';
import authService from '../../services/auth.service';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const submit = () => {
        setLoading(true);
        authService.sendRecoveryEmail({email}).then(() => {
            setLoading(false);
            setSuccess(true);
            setEmail("");
        }).catch(e => {
            setLoading(false);
            setError(e.message);
        });
    }
    
    const handleSubmit = async (e) => {

        e.preventDefault();
        
        setInvalidPayload(null);

        if(!validators.isEmail(email)) {
            setInvalidPayload('Your email is invalid.');
            return;
        }

        submit();
    }
    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="w-full max-w-sm p-5 mx-auto bg-white rounded shadow-md">
                <div className="mb-4 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-black">Recover account</h1>
                    <p className="text-gray-500">We will send you a <u>recovery link</u>.</p>
                </div>
                <form onSubmit={handleSubmit} className="text-left">
                    <div className="mb-4">
                        <input value={email} placeholder="Your email address" className="field-control" type="email" name="email" 
                        onChange={e => setEmail(e.target.value)}
                        disabled={loading}/>
                    </div>
                    
                    {
                        success && <div className="text-green-500 bg-green-100 alert">Done! Please, check your inbox.</div>
                    }
                    {
                        error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                    }
                    {
                        invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                    }
                    <div className="mb-4">
                        <button type="submit" 
                        className={`button is-primary w-full ${loading ? 'flex space-between justify-center':'block '}`}
                        disabled={loading || success}>
                            { loading && <SpinnerI/>}
                            {loading ? 'Loading...':'Recover account'}
                        </button>
                    </div>
                    <div className="mb-4 text-right text-gray-500">
                        <Link className="font-normal text-indigo-500" to={HOME}>Go back</Link>
                    </div>
                </form>
            </div>
        </div>
     );
}

export default ForgotPassword;