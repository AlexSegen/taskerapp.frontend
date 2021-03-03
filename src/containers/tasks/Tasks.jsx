import React from 'react';
import Layout from '../../components/Layout';
import TasksList from '../../components/tasks/TasksList';
import TasksFilter from '../../components/tasks/TasksFilter';

const SelectTask = () => {
    return (
        <div className="flex items-center justify-center" style={{minHeight: "50vh"}}>
            <p className="text-gray-600">Select one task</p>
        </div>
    )
}

const Tasks = ({children}) => {

    return ( 
        <Layout>
            <div className="flex">  
                <div className={`w-full lg:w-3/6 lg:block`}>
                    <TasksFilter/>
                    <TasksList/>
                </div>
                <div className={`w-full bg-white lg:w-full`}>

                    {children}
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Tasks;