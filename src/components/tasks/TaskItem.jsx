import React, { useContext } from 'react';
import { TasksContext } from '../../context/TasksContext';
import { formatDate } from '../../helpers/utils'

import { CheckIcon } from '../Icons';


const TaskItem = ({task}) => {

    const {selected, setSelected } = useContext(TasksContext);

    const baseButton = "p-2 border-2 rounded-full w-full";
    const baseItem = "flex items-center px-2 py-4 justify-stretch"
    return ( 
        <div className={`${baseItem} ${selected && selected.id === task.id ? 'bg-gray-200' : 'bg-white'}`}>
            <div className="w-auto p-2">
                <button className={`${baseButton} ${task.done ? 'bg-blue-600 border-blue-600 text-white hover:bg-blue-700  hover:border-blue-700' : 'border-gray-500 text-gray-500 hover:text-blue-500 hover:border-blue-500'}`}>
                    <CheckIcon className="w-6"/>
                </button>
            </div>
            <div className="w-full p-2 ">
                <button onClick={() => setSelected(task)} type="button" className="block w-full font-bold text-left text-gray-700 hover:text-gray-600 focus:outline-none">
                    {task.title}
                    <span className="block text-sm font-normal text-gray-500">{formatDate(task.createdAt)}</span>
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