import React, { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth';
import { TasksContext } from '../context/TasksContext';


const Header = () => {

    const { Logout } = useAuth();
    
    const history = useHistory();

    const { setComposing, setSelected, filter, setFilter } = useContext(TasksContext);

    const handleAddTask = () => {
        setSelected(null);
        setComposing(true);
        history.push("/task/new")
    }

    return ( 
        <div className="fixed top-0 z-10 flex items-center w-full px-3 py-4 bg-white border-b-2 border-gray-300 justify-streetch">
            <div className="w-2/3 px-10 border-r-2">
                <Link to="/" className="block font-bold tracking-wider text-gray-500 uppercase hover:text-gray-600">Task Manager</Link>
            </div>
            <div className="w-2/3 px-8">
                <div className="flex items-center">
                    <span className="block mr-4">
                        <i className="text-lg font-bold text-gray-500 icons icon-magnifier"></i>
                    </span>
                    <input className="w-full px-3 py-2 text-gray-500 focus:outline-none" type="text" placeholder="Search..."/>
                </div>
            </div>
            <div className="px-8 ">
                <select value={filter} 
                onChange={e => setFilter(e.target.value)}
                className="px-3 py-2 text-lg font-bold border-2 border-white cursor-pointer focus:outline-none">
                    <option value="">All tasks</option>
                    <option value="completed=false">Pending</option>
                    <option value="completed=true">Completed</option>
                </select>
            </div>
            <div className="w-full px-8 text-right">
                <button onClick={() => handleAddTask()} type="button" className="py-2 mr-2 text-sm bg-blue-600 button focus:outline-none hover:bg-blue-700">Add task</button>
                <Link className="nav-item focus:outline-none hover:text-gray-600" to="/">Tasks</Link>
                <Link className="nav-item focus:outline-none hover:text-gray-600" to="/">Projects</Link>
                <button onClick={() => Logout()} type="button" className="nav-item focus:outline-none hover:text-gray-600">Sign off</button>
            </div>
        </div>
     );
}
 
export default Header;