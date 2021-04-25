import React from 'react';
import { XOutlineIcon, InformationIcon } from '../../components/Icons';

const Modal = ({children, title, onClose}) => {

    const handleClose = () => {
        return onClose ? onClose() : null;
    }

    return ( 
        <div className="flex flex-col h-screen items-center justify-center z-10 fixed top-0 right-0 bottom-0 left-0">

            <div className="md:w-1/3 sm:w-full rounded-lg shadow-lg bg-white my-3 relative z-30">
                
                <div className="flex justify-between border-b border-gray-100 px-5 py-4 ">
                    <div>
                        <InformationIcon className="w-4  text-blue-500 inline mr-2"/>
                        <span className="font-bold text-gray-700 text-lg">{title}</span>
                    </div>
                <div>
                    <button type="button" onClick={handleClose}>
                        <XOutlineIcon className="w-4 text-red-500 hover:text-red-600 transition duration-150"/>
                    </button>
                </div>
                </div>
            
                <div className="px-10 py-5 text-gray-600">
                    {children}
                </div>
            
                <div className="px-5 py-4 flex justify-end">
                    <button type="button" onClick={handleClose} className="text-sm py-2 px-3 text-gray-500 hover:text-gray-600 transition duration-150">Close</button>
                </div>
            </div>
            
            <div onClick={handleClose} className="bg-black opacity-70 absolute top-0 right-0 bottom-0 left-0"></div>
        </div>
     );
}
 
export default Modal;