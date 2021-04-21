import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { PlusIcon } from '../Icons';
import { ADD_TASK } from '../../constants/paths';
import { TasksContext } from '../../context/TasksContext'
import { TaskItemLoader } from '../loaders/TaskLoaders';

import TaskItem from './TaskItem';

const TasksList = () => {

    const { TaskInitialState, filtered, loadingTasks, setSelected, errorTasks } = useContext(TasksContext)

    const history = useHistory()

    const handleAddTask = () => {
        setSelected(TaskInitialState);
        history.push(ADD_TASK)
    }

    return (
        <div className="relative bg-white">

            { errorTasks && (<div className="m-5 alert-danger">{errorTasks}</div>) }

            <div className="flex items-center justify-between p-4 text-gray-400 border-2 border-gray-100 border-dashed bg-gray-50">
                <p><PlusIcon className="inline w-6 mr-2 text-green-500"/> Start creating content</p>
                <button onClick={() => handleAddTask()} type="button" className="bg-blue-600 button focus:outline-none hover:bg-blue-700 whitespace-nowrap">New task</button>
            </div>
  
            <div className="w-full max-h-screen overflow-y-auto ">

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

        </div>
     );
}
 
export default TasksList;