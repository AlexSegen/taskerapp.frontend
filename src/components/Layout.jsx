import React from 'react';
import AltHeader from './AltHeader';
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    return (  
        <>
            <AltHeader/>
            <div className="flex">
                <Sidebar/>
                <div className="w-full min-h-screen pt-16 bg-white">
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;