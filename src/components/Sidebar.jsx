import React, { useContext, useEffect } from 'react';

import { useAuth } from '../hooks/useAuth';
import { AppContext } from '../context/AppContext';
import { TasksContext } from '../context/TasksContext';

import TeamList from './sidebar/TeamList';
import TaskStats from './sidebar/TaskStats';
import ProjectList from './sidebar/ProjectList';
import { BellIcon, SettingsIcon, EnvelopeIcon, ChevronRightIcon } from './Icons';
import { HOME, PROJECTS, TASKS, TEAM } from '../constants/paths';
import { Link } from 'react-router-dom';

const Sidebar = () => {

    const { user } = useAuth();
    
    const { getTasks } = useContext(TasksContext);
    const { openSidebar } = useContext(AppContext);

    const { first_name, last_name, email, avatar } = user;

    useEffect(() => {
        getTasks();
    }, [])


    const css = "col-span-3 w-full px-10 py-5 bg-white border-r border-gray-100 lg:px-4 z-10 transform fixed top-16 bottom-0 lg:static min-h-screen lg:min-h-auto lg:overflow-y-auto overflow-y-scroll transform lg:transform-none";

    return ( 
        <aside className={`${css} ${openSidebar ? '-translate-x-0':'-translate-x-full'}`}>

            <div className="mt-2">
                <div className="flex items-center justify-center mb-6 lg:block">
                    <img src={avatar} className="block mx-3 rounded-full lg:mx-auto w-14 lg:w-20 lg:mb-4" alt=""/>
                    <div>
                        <span className="block text-lg font-bold text-center lg:text-xl">{first_name} {last_name}</span>
                        <span className="block text-sm text-center text-gray-400">{email}</span>
                    </div>
                </div>

                <div className="flex items-center justify-center mb-4">
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

                <div className="px-10 lg:hidden">
                    <p className="mb-6 text-xl font-bold uppercase sm:tracking-wide">Menu</p>
                    <ul>
                        <li className="mb-4">
                            <Link to={HOME} className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className={`inline w-6 mr-1`}/> Home</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={TASKS} className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className={`inline w-6 mr-1`}/> Task</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={PROJECTS} className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className={`inline w-6 mr-1`}/> Projects</Link>
                        </li>
                        <li className="mb-4">
                            <Link to={TEAM} className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className={`inline w-6 mr-1`}/> Team</Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-4 border-gray-100 lg:hidden"/>

                <ProjectList/>

                <TeamList/>

            </div>
        </aside>
     );
}
 
export default Sidebar;