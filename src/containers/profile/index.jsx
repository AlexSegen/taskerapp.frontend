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
            <div className="flex justify-between p-2 border-b-2 border-gray-100">
                <div className="p-2">
                    <h1 className="m-0 text-base text-2xl">Profile</h1>
                </div>
                <div className="p-2">
                </div>
            </div>
            <div className="container mx-auto mt-5 md:mt-2" style={{maxWidth: "80%"}}>
                { user && <ProfileForm user={user} onSubmit={handleSubmit} /> }
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
            <div className="overflow-hidden">
                {
                    error && <div className="text-red-500 bg-red-100 alert">{error}</div>
                }

                {
                    uploadingError && <div className="text-red-500 bg-red-100 alert">Hubo un problema actualizar tu avatar. <br/>{error}</div>
                }


                <div className="px-4 py-5 sm:p-6">
                    
                    <ChangeAvatar/>

                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First name</label>
                            { loading ? <InputLoader/> : 
                                (<input onChange={handleChange} value={form.first_name} type="text" name="first_name" id="first_name" autoComplete="given-name" className="field-control"/>)
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last name</label>
                            { loading ? <InputLoader/> : 
                                (<input onChange={handleChange} value={form.last_name} type="text" name="last_name" id="last_name" autoComplete="family-name" className="field-control"/>)
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-6">
                            <label htmlFor="about" className="block text-sm font-medium text-gray-700">About you</label>
                            <div className="mt-1">
                                { loading ? <InputLoader className="h-20"/> : 
                                    <textarea onChange={handleChange} value={form.about} id="about" name="about" rows="3" className="field-control" placeholder=""></textarea>
                                }
                            </div>
                            <p className="mt-2 text-sm text-gray-500">Describe yourself.</p>
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="email_address" className="block text-sm font-medium text-gray-700">Email address</label>
                            { loading ? <InputLoader/> : 
                                (<input readOnly value={form.email} type="text" name="email" id="email_address" autoComplete="email" className="field-control"/>)
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                            { loading ? <InputLoader/> :   
                                <input onChange={handleChange} value={form.phone} type="number" name="phone" id="phone" autoComplete="phone" className="field-control"/>
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="country" className="font-medium text-gray-700 ">Country / Region</label>
                            { loading ? <InputLoader/> : 
                                <select  onChange={handleChange} formgroup="address" value={form.address.country} id="country" name="country" autoComplete="country" className="field-control">
                                    <option value="">--</option>
                                    <option value="AR">Argentina</option>
                                    <option value="CAN">Canada</option>
                                    <option value="COL">Colombia</option>
                                    <option value="CL">Chile</option>
                                    <option value="FR">France</option>
                                    <option value="ES">Spain</option>
                                    <option value="MEX">Mexico</option>
                                    <option value="US">United States</option>
                                    <option value="VE">Venezuela</option>
                                    <option value="OTHER">Other</option>
                                </select>
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <label htmlFor="state" className="block text-sm font-medium text-gray-700">State / Province</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange} formgroup="address"  value={form.address.state} type="text" name="state" id="state" className="field-control"/>
                            }
                        </div>


                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="city" className="block text-sm font-medium text-gray-700">City</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange} formgroup="address" value={form.address.city} type="text" name="city" id="city" className="field-control"/>
                            }
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <label htmlFor="suburb" className="block text-sm font-medium text-gray-700">Suburb</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange} formgroup="address" value={form.address.suburb} type="text" name="suburb" id="suburb" className="field-control"/>
                            }
                        </div>



                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <label htmlFor="postal_code" className="block text-sm font-medium text-gray-700">Zip code</label>
                            { loading ? <InputLoader/> : 
                                <input onChange={handleChange}  formgroup="address"  value={form.address.zipcode} type="number" name="zipcode" id="postal_code" autoComplete="postal-code" className="field-control"/>
                            }
                        </div>

                        
                        <div className="col-span-6">
                            <label htmlFor="street_address" className="block text-sm font-medium text-gray-700">Street</label>
                            { loading ? <InputLoader/> :   
                                <input onChange={handleChange} formgroup="address" value={form.address.street} type="text" name="street" id="street_address" autoComplete="street-address" className="field-control"/>
                            }
                        </div>
                        
                    </div>
                </div>
                <div className="flex items-center justify-end px-4 py-3 bg-gray-50 sm:px-6">
                    <button onClick={handleSubmit} type="button" 
                        className={`button is-primary ${loading ? 'flex space-between justify-center':''}`}
                        disabled={loading}>
                            { loading && <SpinnerI/>}
                            {loading ? 'Saving...':'Save changes'}
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