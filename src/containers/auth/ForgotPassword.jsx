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
    
    const handleSubmit = async () => {
        
        setInvalidPayload(null);

        if(!validators.isEmail(email)) {
            setInvalidPayload('Your email is invalid.');
            return;
        }

        submit();
    }
    return ( 
        <div className="max-w-sm mx-auto mt-10 md:mt-20">
            <div className="p-5 bg-white rounded shadow-md">
                <div className="mb-4 text-center">
                    <h1 className="mb-2 text-3xl font-bold text-black">Recover account</h1>
                    <p className="text-gray-500">We will send you a <u>recovery link</u>.</p>
                </div>
                <div className="text-left">
                    <div className="mb-4">
                        <input placeholder="Your email address" className="field-control" type="email" name="email" 
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
                        <button onClick={handleSubmit} type="button" 
                        className={`button is-primary w-full ${loading ? 'flex space-between justify-center':'block '}`}
                        disabled={loading || success}>
                            { loading && <SpinnerI/>}
                            {loading ? 'Loading...':'Recover account'}
                        </button>
                    </div>
                    <div className="mb-4 text-right text-gray-500">
                        <Link className="font-semibold text-indigo-500" to={HOME}>Go back</Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default ForgotPassword;