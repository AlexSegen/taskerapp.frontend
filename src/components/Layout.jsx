import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AltHeader from './AltHeader';
import Sidebar from './Sidebar';

const Layout = ({children, className}) => {
    const { isAuthenticated } = useAuth();
    return (  
        <>
            { isAuthenticated && <AltHeader/>}
            <div className="w-full min-h-screen grid-cols-12 pt-16 lg:grid">
                { isAuthenticated && <Sidebar/>}
                <div className={`w-full min-h-screen bg-white col-span-9 ${className}`}>
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;