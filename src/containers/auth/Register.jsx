import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

import { useAuth } from '../../hooks/useAuth';
import { LOGIN } from '../../constants/paths';
import { useForm } from '../../hooks/useForm';
import { SpinnerI } from '../../components/Icons';
import validators from '../../helpers/validators';

const initialUser = {
    first_name: "",
    last_name: "",
    email: "",
    password: ""
}

const RegisterPage = () => {

    const history = useHistory();

    const { Register, loading, error } = useAuth();

    const { form,first_name, last_name, email, password, handleChange } = useForm(initialUser);

    const [confirm, setConfirm] = useState("");
    
    const [invalidPayload, setInvalidPayload] = useState(null);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        
        setInvalidPayload(null);

        if (!validators.onlyLetters(first_name) || !validators.onlyLetters(last_name)) {
            setInvalidPayload('First and last name are required.');
            return;
        }

        if (!validators.isEmail(email)) {
            setInvalidPayload('Your email is not valid.');
            return;
        }

        if (!validators.password.Length(password)) {
            setInvalidPayload('Your password must have at least 8 characters.');
            return;
        }

        if (confirm !== password) {
            setInvalidPayload("Password and confirmation password doesn't match.");
            return;
        }

        
        Register(form).finally(() => {
            history.push(LOGIN);
        });

    }

    return ( 
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <div className="grid w-full max-w-3xl grid-cols-8 mx-auto overflow-hidden bg-white rounded shadow-md">
                <div className="col-span-4 overflow-hidden">
                    <img className="w-full h-full" src="https://windmill-dashboard-react.vercel.app/static/media/login-office.72742c2e.jpeg" alt=""/>
                </div>

                <form onSubmit={handleSubmit} className="col-span-4 p-5">
                    <div className="mb-4 text-center">
                        <h1 className="mb-2 text-3xl font-bold text-black">Register</h1>
                        <p className="text-gray-500">Start tracking your tasks</p>
                    </div>
                    <div className="text-left">
                        <div className="mb-4">
                            <label htmlFor="first_name">First name</label>
                            <input className="field-control" type="text" name="first_name" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="last_name">Last name</label>
                            <input className="field-control" type="text" name="last_name" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email">Email</label>
                            <input className="field-control" type="email" name="email" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password">Password</label>
                            <input className="field-control" type="password" name="password" onChange={handleChange} disabled={loading}/>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="password">Confirm password</label>
                            <input className="field-control" type="password" name="confirm" onChange={e => setConfirm(e.target.value)} disabled={loading}/>
                        </div>
                        {
                            error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                        }
                        {
                            invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                        }

                        <div className="mb-4">
                            <button type="submit" 
                            className={`button is-primary w-full ${loading ? 'flex space-between justify-center':'block'}`}
                            disabled={loading}>
                                { loading && <SpinnerI/>}
                                {loading ? 'Loading...':'Join now!'}
                            </button>
                        </div>
                        <div className="text-center">
                            <Link className="font-normal text-indigo-500" to={LOGIN}>Already a member?</Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default RegisterPage;