import React, { useContext, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

import Layout from '../../components/Layout';
import TasksList from '../../components/tasks/TasksList';
import { TasksContext } from '../../context/TasksContext';
import TasksFilter from '../../components/tasks/TasksFilter';

const SelectTask = () => {
    return (
        <div className="flex items-center justify-center" style={{minHeight: "50vh"}}>
            <p className="text-gray-600">Select one task</p>
        </div>
    )
}

const Tasks = ({children}) => {

    let { id } = useParams();

    const { selected } = useContext(TasksContext);

    return ( 
        <Layout>
            <div className="flex ">
                <div className="w-3/6">
                    
                    <TasksFilter/>

                    <TasksList/>
                    
                </div>
                <div className="w-full bg-white">
                    

                    { !id && selected  && selected._id !== 0 &&( <SelectTask/>) }

                    {/* {loadingTask ? (<Spinner loading={true && !composing} height="500"/>) : (<>{ children }</>)} */}

                    {children}
                    
                </div>
            </div>
        </Layout>
     );
}
 
export default Tasks;