import React from 'react';
import { Link } from 'react-router-dom';
import {HOME, LOGIN, REGISTER} from '../../constants/paths'

const Header = () => {
    return ( 
        <header className="max-w-screen-xl mx-auto px-6 lg:px-8 xl:px-4 py-4 lg:py-6 flex justify-between">
        <Link to={HOME} className="flex items-center justify-start">
          <img src="/logo/default.png" className="h-12" alt="Tasker"/>
        </Link>
        <nav className="flex items-center space-x-4">
          <Link to={LOGIN} className="flex space-x-1 items-center hover:text-gray-500"> 
            <svg className="hidden sm:inline w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
            <span>Sign in</span>
          </Link>
          <Link to={REGISTER} className="inline-block bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-700 font-semibold rounded-lg py-2 px-5 text-white ">Sign up</Link>
        </nav>
      </header>
     );
}
 
export default Header;