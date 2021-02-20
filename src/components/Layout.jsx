import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    return (  
        <>
            <Header/>
            <div className="flex pt-4">
                <Sidebar/>
                <div className="w-full min-h-screen pt-16 bg-white">
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;