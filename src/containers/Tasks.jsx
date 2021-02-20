import React, { useContext } from 'react';

import Layout from '../components/Layout';
import TaskDetails from '../components/tasks/TaskDetails';
import TasksFilter from '../components/tasks/TasksFilter';
import TasksList from '../components/tasks/TasksList';
import { TasksContext } from '../context/TasksContext';

const Tasks = () => {
    const { selected } = useContext(TasksContext);

    return ( 
        <Layout>
            <div className="flex ">
                <div className="w-3/6">
                    
                    <TasksFilter/>

                    <TasksList/>
                    
                </div>
                <div className="w-full min-h-screen bg-white">

                    {selected ? (
                        <TaskDetails task={selected} />
                    ): (
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