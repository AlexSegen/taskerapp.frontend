import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AltHeader from './AltHeader';
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    const { isAuthenticated } = useAuth();
    return (  
        <>
            { isAuthenticated && <AltHeader/>}
            <div className="flex">
                { isAuthenticated && <Sidebar/>}
                <div className="w-full min-h-screen pt-16 bg-white">
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;