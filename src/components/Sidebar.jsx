import React from 'react';

import { useAuth } from '../hooks/useAuth';
import { BellIcon, SettingsIcon, EnvelopeIcon } from './Icons';
import ProjectList from './sidebar/ProjectList';
import TeamList from './sidebar/TeamList';

const Sidebar = () => {

    const { user } = useAuth()

    const { first_name, last_name, email, avatar } = user;


    return ( 
        <div className="w-1/4 min-h-screen pt-16 px-10 py-10 bg-white border-r-2 border-gray-200">

            <div className="mt-10">
                <img src={avatar} className="block w-20 mx-auto mb-4 rounded-full" alt=""/>
                <span className="block text-base text-xl font-bold text-center">{first_name} {last_name}</span>
                <span className="block text-sm text-center text-gray-600">{email}</span>

                <div className="flex items-center justify-center mt-4">
                    <button type="button" className="button-sidebar hover:bg-gray-200 focus:outline-none">
                        <SettingsIcon className="w-6 text-blue-600"/>
                    </button>
                    <button type="button" className="button-sidebar hover:bg-gray-200 focus:outline-none">
                        <span className="absolute top-0 right-0 block w-5 h-5 text-sm text-white bg-red-600 rounded-full">2</span>
                        <EnvelopeIcon className="w-6 text-blue-600"/>
                    </button>
                    <button type="button" className="button-sidebar hover:bg-gray-200 focus:outline-none">
                        <span className="absolute top-0 right-0 block w-5 h-5 text-sm text-white bg-red-600 rounded-full">5</span>
                        <BellIcon className="w-6 text-blue-600"/>
                    </button>
                </div>

                <div className="my-4">
                    <span className="block mb-1 text-sm text-right text-gray-600">12/34</span>
                    <div className="relative block h-2">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded"></div>
                        <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded" style={{width: "65%"}}></div>
                    </div>
                    <div className="flex justify-between text-center">
                        <div className="p-3">
                            <div className="mb-1 text-2xl font-bold text-gray-900">12</div>
                            <div className="font-bold text-gray-600">Completed</div>
                            <div className="text-gray-500">tasks</div>
                        </div>
                        <div className="p-3">
                            <div className="mb-1 text-2xl font-bold text-gray-900">12</div>
                            <div className="font-bold text-gray-600">To do</div>
                            <div className="text-gray-500">tasks</div>
                        </div>
                        <div className="p-3">
                            <div className="mb-1 text-2xl font-bold text-gray-900">12</div>
                            <div className="font-bold text-gray-600">All</div>
                            <div className="text-gray-500">Completed</div>
                        </div>
                    </div>
                </div>

                <hr className="my-8 border-gray-400"/>

                <ProjectList/>

                <TeamList/>

            </div>
        </div>
     );
}
 
export default Sidebar;