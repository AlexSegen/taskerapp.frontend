import React,  { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Tasks from './Tasks'
import TaskForm from './TaskForm';
import Spinner from '../../components/Spinner'
import { TasksContext } from '../../context/TasksContext';

const TaskEdit = () => {
    
    let { id } = useParams();
    let history = useHistory();
    
    const { selected, getTask, loadingTask } = useContext(TasksContext);

    useEffect(() => {
        if (id) {
            getTask(id)
        }
    }, [id])

    useEffect(() => {
        if (selected && selected._id !== 0 && selected.isNew) {
            history.push("/tasks/" + selected._id)
        } else {
            history.push("/task/new")
        }
        
    }, [selected])


    return ( 
        <Tasks>
            {
                loadingTask ? (
                    <Spinner loading={true}/>
                ) : (
                    <TaskForm/>
                )
            }
            
        </Tasks>
     );
}
 
export default TaskEdit;