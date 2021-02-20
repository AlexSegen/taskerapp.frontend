import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import TaskForm from './TaskForm';
import Layout from '../../components/Layout';
import TasksList from '../../components/tasks/TasksList';
import { TasksContext } from '../../context/TasksContext';
import TaskDetails from '../../components/tasks/TaskDetails';
import TasksFilter from '../../components/tasks/TasksFilter';

const Tasks = () => {

    let { id } = useParams();

    const { getTask, selected, composing } = useContext(TasksContext);

    useEffect(() => {
        if (id) { getTask(id) }
    }, [id])

    return ( 
        <Layout>
            <div className="flex ">
                <div className="w-3/6">
                    
                    <TasksFilter/>

                    <TasksList/>
                    
                </div>
                <div className="w-full  bg-white">

                    { composing && <TaskForm id={id}/> }

                    {!composing && selected && (
                        <TaskDetails />
                    )}
                    
                    {!composing && !selected && (
                        <div className="flex items-center justify-center" style={{minHeight: "50vh"}}>
                            <p className="text-gray-600">Select one task</p>
                        </div>
                    )}
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Tasks;