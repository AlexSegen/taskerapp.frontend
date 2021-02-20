import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    return (  
        <>
            <Header/>
            <div className="flex pt-4">
                <div className="w-1/4 min-h-screen pt-16">
                    <Sidebar/>
                </div>
                <div className="w-full min-h-screen pt-16 bg-gray-200">
                    {children}
                </div>
            </div>
        </>
    );
}
 
export default Layout;