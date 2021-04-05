import React from 'react'
import { AvatarI, SpinnerI } from '../../components/Icons'
import { useAuth } from '../../hooks/useAuth'


const ChangeAvatar = () => {

    const { UpdateAvatar, uploading, user } = useAuth();

    const handleChange = (e) => {
        const selectedFile = e.target.files[0];
        const formData = new FormData();
        formData.append("image", selectedFile, selectedFile.name);

        UpdateAvatar(formData);

    }
    
    return (
        
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Photo</label>
            <div className="flex items-center mt-1">
                <span className="inline-block w-12 h-12 overflow-hidden bg-gray-100 rounded-full">
                    { user.avatar ? (<img src={user.avatar} className="rounded-full w-30 h-30" alt=""/>) : ( <AvatarI/> ) }
                </span>
                <div className="relative w-64 mt-4 mb-4 overflow-hidden">
                    <button  disabled={uploading} type="button" className="relative inline-flex items-center px-3 py-2 ml-5 overflow-hidden text-sm font-medium leading-4 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        { uploading ? <><SpinnerI className="mr-2 text-gray-500"/> Uploading... </> : 'Change' }
                            <input disabled={uploading} className="absolute z-10 block opacity-0 cursor-pointer pin-r pin-t" type="file" name="vacancyImageFiles" onChange={handleChange}/>
                    </button>
                </div>
            </div>
        </div>
            
     );
}
 
export default ChangeAvatar;