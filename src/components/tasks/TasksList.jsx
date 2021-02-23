import React, { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { TasksContext } from '../../context/TasksContext'

import Spinner from '../Spinner';
import TaskItem from './TaskItem';

const TasksList = () => {

    const { getTasks, tasks, loadingTasks, setComposing, setSelected, errorTasks } = useContext(TasksContext)

    const history = useHistory()

    const handleAddTask = () => {
        setSelected(null);
        setComposing(true);
        history.push("/add/new")
    }

    useEffect(() => {
        // getTasks()
    }, [])

    return (
        <div className="relative bg-white">

            { errorTasks && (<div className="m-5 alert-danger">{errorTasks}</div>) }
  
            <div className="w-full max-h-screen overflow-y-auto">

                <Spinner loading={loadingTasks}/>

                {
                    tasks && tasks.map(task => <TaskItem key={task._id} task={task}/>)
                }
 
            </div>
            <div className="p-4 text-center">
                <button onClick={() => handleAddTask()} type="button" className="bg-blue-600 button focus:outline-none hover:bg-blue-700">Add task</button>
            </div>
        </div>
     );
}
 
export default TasksList;