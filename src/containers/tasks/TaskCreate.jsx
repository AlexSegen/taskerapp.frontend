import React,  { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Tasks from './Tasks'
import TaskForm from './TaskForm';
import Spinner from '../../components/Spinner'
import { TasksContext } from '../../context/TasksContext';
import { DETAILS_TASK, TASKS } from '../../constants/paths';

const TaskCreate = () => {
    
    let history = useHistory();
    
    const { TaskInitialState, setSelected, selected, loadingTask } = useContext(TasksContext);

    const handleOnClose = () => history.push(TASKS);

    useEffect(() => {
        setSelected(TaskInitialState)
        if(selected._id !== 0)
            history.push(DETAILS_TASK(selected._id))
    }, [selected])

    return ( 
        <Tasks>
            {
                loadingTask ? (
                    <Spinner loading={true}/>
                ) : (
                    <TaskForm onClose={handleOnClose}/>
                )
            }
            
        </Tasks>
     );
}
 
export default TaskCreate;