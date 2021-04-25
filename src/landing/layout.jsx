import React from 'react'

import Footer from './components/footer';
import Header from './components/header';

const Layout = ({children, className}) => {
    return (
        <> 
        <Header/>
        <main className={`bg-white text-gray-700 font-medium ${className}`}>
            
            {children}

        </main>
        <Footer/>
        </>
     );
}
 
export default Layout;