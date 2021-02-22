import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { TasksContext } from '../../context/TasksContext'

import Spinner from '../Spinner';
import TaskItem from './TaskItem';

const TasksList = () => {

    const { getTasks, tasks, loadingTasks, setComposing, setSelected, error } = useContext(TasksContext)

    const history = useHistory()

    const handleAddTask = () => {
        setSelected(null);
        setComposing(true);
        history.push("/")
    }

    useEffect(() => {
        getTasks()
    }, [])

    return (
        <div className="relative bg-white">

            { error && (<div className="alert-danger m-5">{error}</div>) }
  
            <div className="w-full overflow-y-auto min-h-screen">

                <Spinner loading={loadingTasks}/>

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