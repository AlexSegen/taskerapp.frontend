import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';

const TasksFilter = () => {

    const { projects } = useContext(TasksContext)

    return (
        <div className="px-5 bg-white border-l-4 border-blue-500">
            {
                projects.length > 0 && (
                    <select className="block w-full px-8 py-8 font-bold tracking-wide uppercase border-2 border-white cursor-pointer text-1xl focus:outline-none">
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