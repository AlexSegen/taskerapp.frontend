import React from 'react';
import Header from './Header';
import AltHeader from './AltHeader';
import Sidebar from './Sidebar';


const Layout = ({children}) => {
    return (  
        <>
            {/* <Header/> */}
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