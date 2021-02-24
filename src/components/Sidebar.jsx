import React from 'react';

import { useAuth } from '../hooks/useAuth';
import { BellIcon, SettingsIcon, EnvelopeIcon } from './Icons';
import ProjectList from './sidebar/ProjectList';
import TaskStats from './sidebar/TaskStats';
import TeamList from './sidebar/TeamList';

const Sidebar = () => {

    const { user } = useAuth()

    const { first_name, last_name, email, avatar } = user;


    return ( 
        <div className="w-1/4 min-h-screen px-10 py-10 pt-16 bg-white border-r-2 border-gray-200 lg:px-4">

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


                <TaskStats/>

                <ProjectList/>

                <TeamList/>

            </div>
        </div>
     );
}
 
export default Sidebar;