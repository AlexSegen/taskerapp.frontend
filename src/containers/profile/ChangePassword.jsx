import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import validators from '../../helpers/validators';
import { SpinnerI } from '../../components/Icons';

const ChangePassword = () => {

    const { loading, error, UpdatePassword } = useAuth();
    const { password, confirmpassword, handleChange, resetForm } = useForm({password: "", confirmpassword: ""});

    const [invalidPayload, setInvalidPayload] = useState(null);
    const [success, setSuccess] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();

        setInvalidPayload(null);

        if (!validators.validatePassword(password).passed) {
            setInvalidPayload(validators.validatePassword(password).message);
            return;
        }
        
        if (password !== confirmpassword) {
            setInvalidPayload("Your password doesn't match.")
            return;
        }

        UpdatePassword({ password }).then(() => {
            setSuccess(true);
            resetForm();
        });

    }

    return ( 
        <Layout>

            <div className="flex justify-between p-2 border-b-2 border-gray-100">
                <div className="p-2">
                    <h1 className="m-0 text-base text-2xl">Change Password</h1>
                </div>
                <div className="p-2">
                </div>
            </div>

            <div className="container max-w-xl mx-auto mt-5 md:mt-2">
                <div className="p-4 mt-10">

                        <div className="grid grid-cols-6 gap-6">
                        
                        <form className="col-span-6 sm:col-span-3" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">New password</label>
                                <input onChange={handleChange} value={password} type="password" name="password" id="password" className="field-control"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirm password</label>
                                <input onChange={handleChange} value={confirmpassword} type="password" name="confirmpassword" id="confirmpassword" className="field-control"/>
                            </div>

                            {
                                success && <div className="text-green-500 bg-green-100 alert">Your password has been updated!</div>
                            }

                            {
                                error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                            }
                            {
                                invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                            }

                            <button onClick={handleSubmit} type="button" 
                                className={`button is-primary ${loading ? 'flex space-between justify-center':''}`}
                                disabled={loading}>
                                    { loading && <SpinnerI/> }
                                    {loading ? 'Loading...':'Change password'}
                            </button>
                        </form>

                        <div className="col-span-6 sm:col-span-3">
                            <p className="mb-4 font-semibold text-black">Type a secure password</p>
                            <ul className="pl-5 text-sm text-gray-500">
                                <li>At least 8 characters.</li>
                                <li>At least 1 number.</li>
                                <li>At least 1 letter.</li>
                                <li>At least 1 special character.</li>
                            </ul>
                        </div>

                    </div>

                    </div>
            </div>
        </Layout>
     );
}
 
export default ChangePassword;