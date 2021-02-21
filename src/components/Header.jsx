import React from 'react';
import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom'


const Header = () => {

    const { Logout } = useAuth();

    return ( 
        <div className="fixed top-0 z-10 flex items-center w-full px-3 py-4 bg-white border-b-2 border-gray-300 justify-strech">
            <div className="w-2/3 px-10 border-r-2">
                <Link to="/" className="block font-bold tracking-wider text-gray-500 uppercase hover:text-gray-600">Task Manager</Link>
            </div>
            <div className="w-full px-8">
                <div className="flex items-center">
                    <span className="block mr-4">
                        <i className="text-lg font-bold text-gray-500 icons icon-magnifier"></i>
                    </span>
                    <input className="w-full px-3 py-2 text-gray-500 focus:outline-none" type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="w-full px-8">
                <select className="px-3 py-2 text-lg font-bold cursor-pointer border-2 border-white">
                    <option value="">All tasks</option>
                    <option value="">Pending</option>
                    <option value="">Completed</option>
                </select>
            </div>
            <div className="w-full px-8 text-right">
                <button onClick={() => Logout()} type="button" className="px-3 py-2 text-gray-500 focus:outline-none hover:text-gray-600">
                    <i className="text-2xl icons icon-options "></i>
                </button>
            </div>
        </div>
     );
}
 
export default Header;