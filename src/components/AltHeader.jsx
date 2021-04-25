import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react';

import { useAuth } from '../hooks/useAuth';
import { MenuIcon, BellOutlineIcon } from './Icons';
import { TasksContext } from '../context/TasksContext';
import { AppContext } from '../context/AppContext';
import { ADD_TASK, CHANGE_PASSWORD, HOME, PROFILE, PROJECTS, TASKS, TEAM } from '../constants/paths';

const Altheader = () => {
  
  const { user, Logout } = useAuth();
  const history = useHistory();
  const [toggled, setToggled] = useState(false);

  const { TaskInitialState, setSelected } = useContext(TasksContext);
  const { setOpenSidebar, openSidebar } = useContext(AppContext);

  const handleAddTask = () => {
      setSelected(TaskInitialState);
      history.push(ADD_TASK)
  }

  const isActiveLink = route => {
    return (route === "home" && window.location.pathname === "/") || window.location.pathname.indexOf(route) > -1 ? "text-gray-700" : ""
  }

  const handleMobileMenu = () => {
    document.addEventListener('click', (e) => {
      if(e.target.classList.contains("mobile-button")) {
        setToggled(s => !s);
      } else {
        setToggled(false);
      }

      if(e.target.classList.contains("mobile-sidebar")) {
        // setOpenSidebar(true);
        setOpenSidebar(s => !s);
      } else {
        setOpenSidebar(false);
      }
    });
  }

    useEffect(() => {
      handleMobileMenu();
    }, [])

    return ( 
  <nav className="fixed top-0 z-20 w-full shadow-sm bg-gray-50">
    <div className="w-full px-4 mx-auto sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
      <div className="flex -mr-2 md:hidden">
          <button type="button"
          id="mobile-sidebar" 
          className={`inline-flex items-center justify-center p-3 text-white ${openSidebar ? 'bg-indigo-500 hover:text-white': 'bg-gray-300 text-gray-500 hover:bg-indigo-700 '} rounded-md mobile-sidebar  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-300 focus:ring-white`} 
          aria-controls="mobile-sidebar" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {
              openSidebar ? (
                <svg className="block w-6 h-6 mobile-sidebar" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block w-6 h-6 mobile-sidebar" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" /></svg>
              )
            }
            
          </button>
        </div>
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <Link to={HOME}>
              <img src="/logo/default.png" className="h-10" alt="Tasker"/>
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              <Link className={`px-3 py-2 text-base font-semibold text-gray-400 rounded-md hover:text-gray-700 ${isActiveLink("home")}`} to={HOME}>Dashboard</Link>
              <Link className={`px-3 py-2 text-base font-semibold text-gray-400 rounded-md hover:text-gray-700 ${isActiveLink("/task")}`} to={TASKS}>Tasks</Link>
              <Link className={`px-3 py-2 text-base font-semibold text-gray-400 rounded-md hover:text-gray-700 ${isActiveLink("/projects")}`} to={PROJECTS}>Projects</Link>
              <Link className={`px-3 py-2 text-base font-semibold text-gray-400 rounded-md hover:text-gray-700 ${isActiveLink("/team")}`} to={TEAM}>Team</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center ml-4 md:ml-6">
             <button onClick={() => handleAddTask()} type="button" className="px-3 py-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded-full whitespace-nowrap hover:bg-blue-700 hover:text-white">
               New task
             </button>
            
            {/* <button className="p-1 mx-2 text-gray-400 rounded-full bg-gray-50 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              <BellOutlineIcon className="w-6 h-6"/>
            </button> */}

            <Menu className="relative ml-3" as="div">
              {({open})=> (
                <>
                  <div>
                    <Menu.Button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full drowpdown-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img className="w-8 h-8 rounded-full drowpdown-button" src={user.avatar} alt={user.first_name}/>
                    </Menu.Button>
                  </div>
                  <Transition 
                      show={open}
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                      >
                  <Menu.Items className={`focus:outline-none block absolute right-0 w-48 py-1 mt-4 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5`}>
                    <Menu.Item>
                      {({active}) => (
                        <Link className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100':'text-gray-700'}`} role="menuitem" to={PROFILE}>Your Profile</Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                        <Link className={`block px-4 py-2 text-sm ${active ? 'bg-gray-100':'text-gray-700'}`} role="menuitem" to={CHANGE_PASSWORD}>Change password</Link>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({active}) => (
                      <button onClick={() => Logout()} type="button" className={`block w-full px-4 py-2 text-sm text-left ${active ? 'bg-gray-100':'text-gray-700'}`} role="menuitem">Sign out</button>
                      )}
                    </Menu.Item>
                  </Menu.Items>
                  </Transition>
                </>
              )}
              


            </Menu>
          </div>
        </div>
        <div className="flex -mr-2 md:hidden">
          <img className={`w-12 h-12 rounded-full mobile-button border ${toggled ? 'border-indigo-300':'border-gray-300'}`} src={user.avatar} alt={user.first_name}/>
        </div>
      </div>
    </div>

    <div  className={` ${toggled ? '':'hidden'} md:hidden mobile-menu`} id="mobile-menu">
      <div className="pt-4 pb-3 border-t border-gray-300">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src={user.avatar} alt={user.first_name}/>
          </div>
          <div className="ml-3">
            <div className="mb-2 text-base font-medium leading-none text-gray-500">{user.first_name}</div>
            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
          </div>
          <button className="flex-shrink-0 p-1 ml-auto text-gray-400 rounded-full bg-gray-50 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="px-2 mt-3 space-y-1">
          <Link className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700" to={PROFILE}>Your Profile</Link>
          <Link className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700" to={CHANGE_PASSWORD}>Change password</Link>
          <button onClick={() => Logout()} className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700" type="button">Sign out</button>
        </div>
      </div>
    </div>
  </nav>

     );
}
 
export default Altheader;