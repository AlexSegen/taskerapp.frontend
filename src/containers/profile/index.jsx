import React, {  useEffect } from 'react';

import { User } from '../../models/User';

import { useAuth } from '../../hooks/useAuth';
import { useForm } from '../../hooks/useForm';

import Layout from '../../components/Layout';
import { SpinnerI } from '../../components/Icons'
import ChangeAvatar from '../../components/profile/ChangeAvatar';

const Profile = () => {

    const { user, GetProfile, UpdateProfile } = useAuth();

    const handleSubmit = (payload) => {
        UpdateProfile(payload);
    }

    useEffect(() => {
        GetProfile();
    }, [])

    return ( 
        <Layout>
            <div className="container max-w-xl mx-auto">
                <div className="mt-5 md:mt-0">

                    { user && <ProfileForm user={user} onSubmit={handleSubmit} /> }

                </div>

            </div>
        </Layout>
     );
}
 
export default Profile;


function ProfileForm({user, onSubmit}) {
    const { error, loading, uploadingError } = useAuth();
    const { form, handleChange } = useForm(new User(user));

    const handleSubmit = e => {
        e.preventDefault();
        onSubmit(form);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="overflow-hidden shadow sm:rounded-md">
                {
                    error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                }

                {
                    uploadingError && <div className="text-red-500 bg-red-100 alert">Hubo un problema actualizar tu avatar. <br/>{error}</div>
                }


                <div className="px-4 py-5 bg-white rounded sm:p-6">
                    
                    <ChangeAvatar/>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">Nombre</label>
                            { loading ? <InputLoader/> : 
                                (<input onChange={handleChange} value={form.first_name} type="text" name="first_name" id="first_name" autoComplete="given-name" className="field-control"/>)
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Apellido</label>
                            { loading ? <InputLoader/> : 
                                (<input onChange={handleChange} value={form.last_name} type="text" name="last_name" id="last_name" autoComplete="family-name" className="field-control"/>)
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">Acerca de ti</label>
                            <div className="mt-1">
                                { loading ? <InputLoader className="h-20"/> : 
                                    <textarea onChange={handleChange} value={form.about} id="about" name="about" rows="3" className="field-control" placeholder=""></textarea>
                                }
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Descríbete brevemente.</p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Correo electrónico</label>
                            { loading ? <InputLoader/> : 
                                (<input readOnly value={form.email} type="text" name="email" id="email_address" autoComplete="email" className="field-control"/>)
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Teléfono</label>
                            { loading ? <InputLoader/> :   
                                <input onChange={handleChange} value={form.phone} type="number" name="phone" id="phone" autoComplete="phone" className="field-control"/>
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="block text-sm font-medium text-gray-700">País / Región</label>
                            { loading ? <InputLoader/> : 
                                <select  onChange={handleChange} formgroup="address" value={form.address.country} id="country" name="country" autoComplete="country" className="block w-full px-3 py-2 mt-1 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                    <option value="">--</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CAN">Canada</option>
                                    <option value="CL">Chile</option>
                                    <option value="FR">France</option>
                                    <option value="ES">Spain</option>
                                    <option value="MEX">Mexico</option>
                                    <option value="US">United States</option>
                                </select>
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">Estado / Provincia</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange} formgroup="address"  value={form.address.state} type="text" name="state" id="state" className="field-control"/>
                            }
                        </div>


                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">Ciudad</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange} formgroup="address" value={form.address.city} type="text" name="city" id="city" className="field-control"/>
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="suburb" className="block text-sm font-medium text-gray-700">Suburbio</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange} formgroup="address" value={form.address.suburb} type="text" name="suburb" id="suburb" className="field-control"/>
                            }
                        </div>



                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">Código postal</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange}  formgroup="address"  value={form.address.zipcode} type="number" name="zipcode" id="postal_code" autoComplete="postal-code" className="field-control"/>
                            }
                        </div>

                        
                        <div className="col-span-6">
                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Calle y número</label>
                            { loading ? <InputLoader/> :   
                                <input onChange={handleChange} formgroup="address" value={form.address.street} type="text" name="street" id="street_address" autoComplete="street-address" className="field-control"/>
                            }
                        </div>
                        
                    </div>
                </div>
                <div className="flex items-center justify-end px-4 py-3 bg-gray-50 sm:px-6">
                    <button onClick={handleSubmit} type="button" 
                        className={`btn is-primary ${loading ? 'flex space-between justify-center':''}`}
                        disabled={loading}>
                            { loading && <SpinnerI/>}
                            {loading ? 'Cargando...':'Guardar cambios'}
                    </button>
                </div>
            </div>
        </form>
    )
}

function InputLoader({ className }) {
    return (
        <div className={`animate-pulse rounded-sm bg-gray-200 h-10 w-full ${className}`}></div>
    )
}