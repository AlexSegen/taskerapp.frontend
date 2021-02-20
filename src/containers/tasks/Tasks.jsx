import React, { useContext } from 'react';

import Layout from '../../components/Layout';
import TaskDetails from '../../components/tasks/TaskDetails';
import TasksFilter from '../../components/tasks/TasksFilter';
import TasksList from '../../components/tasks/TasksList';
import { TasksContext } from '../../context/TasksContext';
import TaskForm from './TaskForm';

const Tasks = () => {
    const { selected, composing } = useContext(TasksContext);

    return ( 
        <Layout>
            <div className="flex ">
                <div className="w-3/6">
                    
                    <TasksFilter/>

                    <TasksList/>
                    
                </div>
                <div className="w-full  bg-white">

                    { composing && <TaskForm/> }

                    

                    {!composing && selected && (
                        <TaskDetails task={selected} />
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