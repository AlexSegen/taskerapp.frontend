import React, { useContext } from 'react';

import { TasksContext} from '../../context/TasksContext'

import TaskItem from './TaskItem';

const TasksList = () => {

    const { tasks } = useContext(TasksContext)

    return (
        <div className="relative min-h-screen bg-white">
            <div className="w-full max-h-screen overflow-y-auto " >

                {
                    tasks && tasks.map(task => <TaskItem key={task.id} task={task}/>)
                }
 
            </div>
            <div className="p-4 text-center">
                <button className="px-10 py-3 text-white bg-blue-600 rounded-full hover:bg-blue-700">Add task</button>
            </div>
        </div>
     );
}
 
export default TasksList;