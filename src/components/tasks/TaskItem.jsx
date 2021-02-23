import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { CheckIcon } from '../Icons';
import { formatDate } from '../../helpers/utils'
import { TasksContext } from '../../context/TasksContext';


const TaskItem = ({task}) => {

    let history = useHistory();

    const { selected, toggleTaskStatus } = useContext(TasksContext);

    const baseButton = "button p-2 border-2 w-full focus:outline-none";
    const baseItem = "flex items-center px-2 py-2 justify-stretch"
    return ( 
        <div className={`${baseItem} ${selected && selected._id === task._id ? 'bg-gray-200' : 'bg-white'}`}>
            <div className="w-auto p-2">
                <button 
                    onClick={() => toggleTaskStatus(task)}
                    type="button" 
                    className={`${baseButton} ${task.completed ? 'bg-blue-600 border-blue-600 hover:bg-blue-700  hover:border-blue-700' : 'border-gray-500 text-gray-500 hover:text-blue-500 hover:border-blue-500'}`}>
                    <CheckIcon className="w-6"/>
                </button>
            </div>
            <div className="w-full p-2 ">
                <button onClick={() => history.push("/tasks/" + task._id)} type="button" className="block w-full font-bold text-left text-gray-700 hover:text-gray-600 focus:outline-none">
                    {task.title}
                    <span className="block font-normal text-gray-500">{formatDate(task.createdAt, 'MMMM Do, h:mm:ss a')}</span>
                </button>
            </div>
            <div className="w-1/4 p-2">
                { task.assigned ? 
                    (<img className="block w-12 mx-auto rounded-full" src={task.assigned.avatar} alt=""/>) :
                    (<img className="block w-12 mx-auto rounded-full" src="/avatar.jpg" alt=""/>) 
                }
            </div>
        </div>
     );
}
 
export default TaskItem;