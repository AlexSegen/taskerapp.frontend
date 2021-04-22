import React, { useContext, useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';
import { AppContext } from '../context/AppContext';
import { TasksContext } from '../context/TasksContext';

import TeamList from './sidebar/TeamList';
import TaskStats from './sidebar/TaskStats';
import ProjectList from './sidebar/ProjectList';
import { BellIcon, SettingsIcon, EnvelopeIcon } from './Icons';

const Sidebar = () => {

    const { user } = useAuth();
    
    const { getTasks } = useContext(TasksContext);
    const { openSidebar } = useContext(AppContext);

    const { first_name, last_name, email, avatar } = user;

    useEffect(() => {
        getTasks();
    }, [])


    const css = "col-span-3 w-full  px-10 py-5 bg-white border-r-2 border-gray-100 lg:px-4 z-10 transform absolute lg:relative";

    return ( 
        <aside className={`${css} ${openSidebar ? 'transform -translate-x-0':'transform -translate-x-full'}`}>

            <div className="mt-2">
                <img src={avatar} className="block w-20 mx-auto mb-4 rounded-full" alt=""/>
                <span className="block text-xl font-bold text-center">{first_name} {last_name}</span>
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
        </aside>
     );
}
 
export default Sidebar;