import React, { useContext } from 'react';

import { TasksContext} from '../../context/TasksContext'

import TaskItem from './TaskItem';

const TasksList = () => {

    const { tasks, setComposing } = useContext(TasksContext)

    return (
        <div className="relative bg-white">
  
            <div className="w-full overflow-y-auto " style={{maxHeight: "70vh"}}>

                {
                    tasks && tasks.map(task => <TaskItem key={task.id} task={task}/>)
                }
 
            </div>
            <div className="p-4 text-center">
                <button onClick={() => setComposing(true)} type="button" className="button focus:outline-none bg-blue-600  hover:bg-blue-700">Add task</button>
            </div>
        </div>
     );
}
 
export default TasksList;