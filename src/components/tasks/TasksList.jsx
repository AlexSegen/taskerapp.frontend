import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { TasksContext} from '../../context/TasksContext'

import TaskItem from './TaskItem';

const TasksList = () => {

    const { getTasks, tasks, setComposing } = useContext(TasksContext)

    const history = useHistory()

    const handleAddTask = () => {
        setComposing(true);
        history.push("/")
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div className="relative bg-white">
  
            <div className="w-full overflow-y-auto " style={{maxHeight: "70vh"}}>

                {
                    tasks && tasks.map(task => <TaskItem key={task._id} task={task}/>)
                }
 
            </div>
            <div className="p-4 text-center">
                <button onClick={() => handleAddTask()} type="button" className="button focus:outline-none bg-blue-600  hover:bg-blue-700">Add task</button>
            </div>
        </div>
     );
}
 
export default TasksList;