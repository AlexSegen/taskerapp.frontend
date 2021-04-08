import React, { useContext } from 'react';

import ChartsContainer from './charts';
import Layout from '../../components/Layout';
import NewestTasks from './tables/NewestTasks';
import Spinner from '../../components/Spinner';
import NewestMembers from './tables/NewestMembers';

import { TasksContext } from '../../context/TasksContext';

const Dashboard = () => {

    const { loadingTasks, loadingUsers } = useContext(TasksContext)
    return ( 
        <Layout className="bg-blue-50">

            <div className="flex justify-between p-2 border-b-2 border-gray-100">
                <div className="p-2">
                    <h1 className="m-0 text-base text-2xl">Dashboard</h1>
                </div>
                <div className="p-2">
                </div>
            </div>

            <div className="p-4">

                <ChartsContainer/>

                <div className="grid grid-cols-8 gap-6 mb-10">
                    <div className="col-span-4">
                        { loadingUsers ? <Spinner height="200" loading={true} /> :  <NewestMembers/> }
                    </div>
                    <div className="col-span-4">
                        { loadingTasks ? <Spinner height="200" loading={true} /> :  <NewestTasks/> }
                    </div>
                </div>

            </div>
            
        </Layout>
     );
}
 
export default Dashboard;