import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { TasksContext } from '../context/TasksContext';


const Header = () => {

    const { Logout } = useAuth();
    
    const history = useHistory();

    const { setComposing, setSelected } = useContext(TasksContext);

    const handleAddTask = () => {
        setSelected(null);
        setComposing(true);
        history.push("/")
    }

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
                <button onClick={() => handleAddTask()} type="button" className="button focus:outline-none bg-blue-600 text-sm py-2 hover:bg-blue-700 mr-2">Add task</button>
                <Link className="nav-item focus:outline-none hover:text-gray-600" to="/">Tasks</Link>
                <Link className="nav-item focus:outline-none hover:text-gray-600" to="/">Projects</Link>
                <button onClick={() => Logout()} type="button" className="nav-item  focus:outline-none hover:text-gray-600">Sign off</button>
            </div>
        </div>
     );
}
 
export default Header;