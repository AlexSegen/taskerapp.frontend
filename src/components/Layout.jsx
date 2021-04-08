import React from 'react';
import { useAuth } from '../hooks/useAuth';
import AltHeader from './AltHeader';
import Sidebar from './Sidebar';

const Layout = ({children, className}) => {
    const { isAuthenticated } = useAuth();
    return (  
        <>
            { isAuthenticated && <AltHeader/>}
            <div className="flex">
                { isAuthenticated && <Sidebar/>}
                <div className={`w-full min-h-screen pt-16 bg-white ${className}`}>
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;