import React from 'react';
import { BellIcon, SettingsIcon, EnvelopeIcon, ChevronRightIcon} from './Icons';

const Sidebar = () => {
    return ( 
        <div className="w-full min-h-screen px-10 py-10 bg-white border-r-2 border-gray-200">

            <div>
                <img src="https://randomuser.me/api/portraits/women/9.jpg" className="block w-20 mx-auto mb-4 rounded-full" alt=""/>
                <span className="block text-base text-xl font-bold text-center">Natalie Smith</span>
                <span className="block text-sm text-center text-gray-600">natalie.smith@gmail.com</span>

                <div className="flex items-center justify-center mt-4">
                    <button type="button" className="relative px-2 py-2 mx-2 bg-gray-300 rounded-full hover:bg-gray-200">
                        <SettingsIcon className="w-6 text-blue-600"/>
                    </button>
                    <button type="button" className="relative px-2 py-2 mx-2 bg-gray-300 rounded-full hover:bg-gray-200">
                        <span className="absolute top-0 right-0 block w-5 h-5 text-sm text-white bg-red-600 rounded-full">2</span>
                        <EnvelopeIcon className="w-6 text-blue-600"/>
                    </button>
                    <button type="button" className="relative px-2 py-2 mx-2 bg-gray-300 rounded-full hover:bg-gray-200">
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

                <div className="px-10">
                    <p className="mb-6 text-base text-xl font-bold uppercase sm:tracking-wide">Projects</p>
                    <ul>
                        <li className="mb-4">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className="inline w-6 mr-1 text-blue-500"/> Marketing</button>
                        </li>
                        <li className="mb-4">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className="inline w-6 mr-1 text-green-500"/> Design</button>
                        </li>
                        <li className="mb-4">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className="inline w-6 mr-1 text-yellow-500"/> Development</button>
                        </li>
                        <li className="mb-4">
                            <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className="inline w-6 mr-1 text-red-500"/> Management</button>
                        </li>
                    </ul>
                </div>

                <hr className="my-8 border-gray-400"/>

                <div className="px-10">
                    <p className="mb-6 text-base text-xl font-bold uppercase sm:tracking-wide">Team</p>
                    <div className="flex items-center justify-center">
                        <div className="w-1/3 p-3">
                            <img className="block mx-auto rounded-full w-15 h-13" src="https://randomuser.me/api/portraits/men/89.jpg" alt=""/>
                        </div>
                        <div className="w-1/3 p-3">
                            <img className="block mx-auto rounded-full w-15 h-13" src="https://randomuser.me/api/portraits/women/89.jpg" alt=""/>
                        </div>
                        <div className="w-1/3 p-3">
                            <img className="block mx-auto rounded-full w-15 h-13" src="https://randomuser.me/api/portraits/men/8.jpg" alt=""/>
                        </div>
                        <div className="w-1/3 p-3">
                            <img className="block mx-auto rounded-full w-15 h-13" src="https://randomuser.me/api/portraits/women/9.jpg" alt=""/>
                        </div>
                    </div>
                </div>

                

            </div>
        </div>
     );
}
 
export default Sidebar;