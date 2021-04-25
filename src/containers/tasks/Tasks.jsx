import React, { useContext } from 'react';
import Layout from '../../components/Layout';
import TasksList from '../../components/tasks/TasksList';
import { TasksContext } from '../../context/TasksContext';
import ProjectFilter from '../../components/tasks/ProjectFilter';

const Tasks = ({children}) => {

    const { selected } = useContext(TasksContext);

    return ( 
        <Layout >
            <div className="grid-cols-12 md:grid">  
                <div className={`col-span-4 lg:block ${selected === null ? '':'hidden'}`}>
                    <ProjectFilter/>
                    <TasksList/>
                </div>
                <div className={`col-span-8 lg:block ${selected === null ? 'hidden':''} `}>
                    {children}
                </div>
            </div>
        </Layout>
     );
}
 
export default Tasks;