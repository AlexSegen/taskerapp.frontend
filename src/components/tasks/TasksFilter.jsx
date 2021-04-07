import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

const TasksFilter = () => {

    const { projects, setFiltered } = useContext(TasksContext)

    return (
        <div className="bg-white border-b-2 border-gray-100">
            {
                projects.length > 0 && (
                    <select onChange={e => setFiltered(e.target.value)} className="block w-full px-8 py-8 font-bold tracking-wide uppercase border-2 border-white cursor-pointer border-b-gray-100 focus:border-white text-1xl focus:outline-none">
                        <option value="all">All projects</option>
                        {
                            projects.map(p => (
                                <option key={p._id} value={p._id} >{p.title}</option>
                            ))
                        }
                    </select>
                )
            }
        </div>
      );
}
 
export default TasksFilter;