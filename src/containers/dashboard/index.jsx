import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';

import ChartsContainer from './charts';
import Layout from '../../components/Layout';
import NewestTasks from './tables/NewestTasks';
import Spinner from '../../components/Spinner';
import { ADD_TASK } from '../../constants/paths';
import { PlusIcon } from '../../components/Icons';
import NewestMembers from './tables/NewestMembers';
import MyTasks from '../../components/global/UserTasks';

import { TasksContext } from '../../context/TasksContext';

const Dashboard = () => {

    const { myTasks, loadingTasks, loadingUsers, setSelected, TaskInitialState } = useContext(TasksContext)
    
    const history = useHistory()

    const handleAddTask = () => {
        setSelected(TaskInitialState);
        history.push(ADD_TASK)
    }

    return ( 
        <Layout className="bg-gradient-to-b from-blue-500 lg:from-blue-400 to-blue-500">

            <div className="flex justify-between p-2 mb-4 border-b border-gray-50 border-opacity-30 lg:border-opacity-50">
                <div className="p-2">
                    <h1 className="m-0 text-2xl font-bold text-white">Dashboard</h1>
                </div>
                <div className="p-2">
                </div>
            </div>
            
            <div className="px-4 lg:hidden">
                <div className="flex items-center justify-between p-4 text-gray-400 border border-gray-100 border-dashed rounded bg-gray-50">
                    <p><PlusIcon className="inline w-6 mr-2 text-green-500"/> Start creating content</p>
                    <button onClick={handleAddTask} type="button" className="bg-blue-600 button focus:outline-none hover:bg-blue-700 whitespace-nowrap">New task</button>
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
                        <MyTasks tasks={myTasks} loading={loadingTasks} />
                    </div>

                </div>

            </div>
            
        </Layout>
     );
}
 
export default Dashboard;