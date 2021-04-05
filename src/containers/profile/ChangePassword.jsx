import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';
import validators from '../../helpers/validators';
import { SpinnerI } from '../../components/Icons';
import PageHeader from '../../components/PageHeader';

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
            <div className="container max-w-xl mx-auto">
                <div className="mt-5 md:mt-0">

                    <PageHeader title="Actualizar contraseña" content="Ingresa una contraseña segura."/>

                    <div className="p-4 bg-white rounded shadow">

                        <div className="grid grid-cols-6 gap-6">
                        
                        <form className="col-span-6 sm:col-span-3" onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">Nueva contraseña</label>
                                <input onChange={handleChange} value={password} type="password" name="password" id="password" className="field-control"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="confirmpassword" className="block text-sm font-medium text-gray-700">Confirmar contraseña</label>
                                <input onChange={handleChange} value={confirmpassword} type="password" name="confirmpassword" id="confirmpassword" className="field-control"/>
                            </div>

                            {
                                success && <div className="text-green-500 bg-green-100 alert">¡Tu contraseña fue actualizada!</div>
                            }

                            {
                                error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                            }
                            {
                                invalidPayload && <div className="text-red-500 bg-red-100 alert">{invalidPayload}</div>
                            }

                            <button onClick={handleSubmit} type="button" 
                                className={`btn is-primary ${loading ? 'flex space-between justify-center':''}`}
                                disabled={loading}>
                                    { loading && <SpinnerI/> }
                                    {loading ? 'Cargando...':'Cambiar contraseña'}
                            </button>
                        </form>

                        <div className="col-span-6 sm:col-span-3">
                            <p className="mb-4 font-semibold text-black">Requerimientos mínimos</p>
                            <ul className="pl-5 text-sm text-gray-500">
                                <li>Al menos 8 caractéres.</li>
                                <li>Al menos un número.</li>
                                <li>Al menos una letra.</li>
                                <li>Al menos un caracter especial.</li>
                            </ul>
                        </div>

                    </div>

                    </div>

                </div>

            </div>
        </Layout>
     );
}
 
export default ChangePassword;