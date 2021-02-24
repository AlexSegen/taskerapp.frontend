import React, { useEffect, useState, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'

import { useAuth } from '../hooks/useAuth';
import { TasksContext } from '../context/TasksContext';
import { MenuIcon, BellOutlineIcon, PlusIcon } from './Icons';

const Altheader = () => {
  const { user, Logout } = useAuth();
  const history = useHistory();
  const [toggled, setToggled] = useState(false);
  const [showDrop, setShowDrop] = useState(false);

  const { TaskInitialState, setComposing, setSelected, filter, setFilter } = useContext(TasksContext);

  const handleAddTask = () => {
      setSelected(TaskInitialState);
      setComposing(true);
      history.push("/task/new")
  }

  const handleMobileMenu = () => {
      document.addEventListener('click', (e) => {
        if(e.target.classList.contains("mobile-button")) {
          setToggled(t => !t);
        } else {
          setToggled(false);
        }

        if(e.target.classList.contains("drowpdown-button")) {
          setShowDrop(d => !d);
        } else {
          setShowDrop(false);
        }

      })
  }

    useEffect(() => {

      handleMobileMenu();

/*       return () => {
        document.removeEventListener('click')
      } */

    }, [])

    return ( 
  <nav className="fixed top-0 z-20 w-full bg-gray-800">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
        <div className="flex items-center">
          <div className="flex-shrink-0">
            <img className="w-8 h-8" src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg" alt="Workflow"/>
          </div>
          <div className="hidden md:block">
            <div className="flex items-baseline ml-10 space-x-4">
              {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}

              <Link className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" to="/">Dashboard</Link>
              <Link className="px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-md" to="/">Tasks</Link>
              <Link className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" to="/projects">Projects</Link>
              <Link className="px-3 py-2 text-sm font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" to="/team">Team</Link>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <div className="flex items-center ml-4 md:ml-6">
             <button onClick={() => handleAddTask()} type="button" className="px-3 py-2 mr-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 hover:text-white">
               Add task
             </button>
            <button className="p-1 text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
              <span className="sr-only">View notifications</span>
              {/* <!-- Heroicon name: outline/bell --> */}

              <BellOutlineIcon className="w-6 h-6"/>
            </button>

            {/* <!-- Profile dropdown --> */}
            <div className="relative ml-3">
              <div>
                <button className="flex items-center max-w-xs text-sm bg-gray-800 rounded-full drowpdown-button focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" id="user-menu" aria-haspopup="true">
                  <span className="sr-only">Open user menu</span>
                  <img className="w-8 h-8 rounded-full drowpdown-button" src={user.avatar} alt={user.first_name}/>
                </button>
              </div>
              {/* <!--
                Profile dropdown panel, show/hide based on dropdown state.

                Entering: "transition ease-out duration-100"
                  From: "transform opacity-0 scale-95"
                  To: "transform opacity-100 scale-100"
                Leaving: "transition ease-in duration-75"
                  From: "transform opacity-100 scale-100"
                  To: "transform opacity-0 scale-95"
              --> */}
              <div className={` ${showDrop ? 'block':'hidden'} absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5`} role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" to="/profile">Your Profile</Link>
                <Link className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem" to="/settings">Settings</Link>
                <button onClick={() => Logout()} type="button" className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100" role="menuitem">Sign out</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex -mr-2 md:hidden">
          {/* <!-- Mobile menu button --> */}
          <button type="button"
          id="mobile-button" 
          className="inline-flex items-center justify-center p-2 text-gray-400 bg-gray-800 rounded-md mobile-button hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white" 
          aria-controls="mobile-menu" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
           {/*  <!--
              Heroicon name: outline/menu

              Menu open: "hidden", Menu closed: "block"
            --> */}
            <MenuIcon className="block w-6 h-6 mobile-button"/>
            {/* <!--
              Heroicon name: outline/x

              Menu open: "block", Menu closed: "hidden"
            --> */}
            <svg className="hidden w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>
    </div>

    {/* <!-- Mobile menu, show/hide based on menu state. --> */}
    <div  className={` ${toggled ? '':'hidden'} md:hidden mobile-menu`} id="mobile-menu">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
       {/*  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
       <Link className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" to="/">Dashboard</Link>

       <Link className="block px-3 py-2 text-base font-medium text-white bg-gray-900 rounded-md" to="/tasks">Tasks</Link>

       <Link className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" to="/projects">Projects</Link>

       <Link className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white" to="/Team">Team</Link>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-700">
        <div className="flex items-center px-5">
          <div className="flex-shrink-0">
            <img className="w-10 h-10 rounded-full" src={user.avatar} alt={user.first_name}/>
          </div>
          <div className="ml-3">
            <div className="text-base font-medium leading-none text-white">{user.first_name}</div>
            <div className="text-sm font-medium leading-none text-gray-400">{user.email}</div>
          </div>
          <button className="flex-shrink-0 p-1 ml-auto text-gray-400 bg-gray-800 rounded-full hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
            <span className="sr-only">View notifications</span>
            {/* <!-- Heroicon name: outline/bell --> */}
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
        </div>
        <div className="px-2 mt-3 space-y-1">
          <Link className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700" to="/profile">Your Profile</Link>
          <Link className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700" to="/settings">Settings</Link>
          <button onClick={() => Logout()} className="block px-3 py-2 text-base font-medium text-gray-400 rounded-md hover:text-white hover:bg-gray-700" type="button">Sign out</button>
        </div>
      </div>
    </div>
  </nav>

     );
}
 
export default Altheader;