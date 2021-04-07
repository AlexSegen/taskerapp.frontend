import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { ADD_TASK } from '../../constants/paths';
import { TasksContext } from '../../context/TasksContext'
import { TaskItemLoader } from '../loaders/TaskLoaders';

import TaskItem from './TaskItem';

const TasksList = () => {

    const { TaskInitialState, tasks, filtered, loadingTasks, setSelected, errorTasks } = useContext(TasksContext)

    const history = useHistory()

    const handleAddTask = () => {
        setSelected(TaskInitialState);
        history.push(ADD_TASK)
    }

    return (
        <div className="relative bg-white">

            { errorTasks && (<div className="m-5 alert-danger">{errorTasks}</div>) }
  
            <div className="w-full max-h-screen overflow-y-auto">

                {
                    loadingTasks && (
                        <>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                            <TaskItemLoader/>
                        </>
                    )
                }


                {
                    filtered && filtered.map(task => <TaskItem key={task._id} task={task}/>)
                }
 
            </div>
            <div className="p-4 text-center">
                <button onClick={() => handleAddTask()} type="button" className="bg-blue-600 button focus:outline-none hover:bg-blue-700">Add task</button>
            </div>
        </div>
     );
}
 
export default TasksList;