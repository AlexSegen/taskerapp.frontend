import React, { useContext } from 'react';

import ChartsContainer from './charts';
import Layout from '../../components/Layout';
import NewestTasks from './tables/NewestTasks';
import Spinner from '../../components/Spinner';
import NewestMembers from './tables/NewestMembers';

import { TasksContext } from '../../context/TasksContext';
import MyTasks from './mytasks';

const Dashboard = () => {

    const { loadingTasks, loadingUsers } = useContext(TasksContext)
    return ( 
        <Layout className="bg-gradient-to-b from-green-400 to-blue-500">

            <div className="flex justify-between p-2 border-b border-gray-100 border-opacity-50">
                <div className="p-2">
                    <h1 className="m-0 text-2xl font-bold text-white">Dashboard</h1>
                </div>
                <div className="p-2">
                </div>
            </div>

            <div className="p-4">
                <div className="grid-cols-12 gap-6 lg:grid">
                    <div className="col-span-9">
                        <ChartsContainer/>

                        <div className="grid-cols-10 gap-6 mb-4 lg:grid">
                            <div className="col-span-4">
                            { loadingUsers ? <Spinner height="200" loading={true} /> :  <NewestMembers/> }

                            </div>
                            <div className="col-span-6">
                                { loadingTasks ? <Spinner height="200" loading={true} /> :  <NewestTasks/> }
                            </div>
                        </div>
                    </div>

                    <div className="col-span-3">
                        <MyTasks/>
                    </div>

                </div>


            </div>
            
        </Layout>
     );
}
 
export default Dashboard;