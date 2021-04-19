import React, { useState, useEffect, useContext } from 'react';
import Paginator from 'react-hooks-paginator';

import Layout from '../../components/Layout';
import Spinner from '../../components/Spinner';
import { SearchIcon } from "../../components/Icons";
import { TasksContext } from '../../context/TasksContext';
import { formatDate, searchOption } from '../../helpers/utils'

const Team = () => {

    const pageLimit = 8;
 
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    const [filtered, setFiltered] = useState([]);
    const { users, loadingUsers, tasks } = useContext(TasksContext);
    

    const calculate = (done, todo) => {
        const result = (done / todo) * 100
        return result + "%";
    }

    const searchItem = (e) => {
        const { value } = e.target;
        setFiltered([...searchOption(users.map(u => ({ ...u, name: `${u.first_name} ${u.last_name}` })), value, "name")])
    }

    const getStats = (userId) => {
        const all = tasks.filter(task => task.assigned && task.assigned._id === userId);

        const done = all.filter(task => task.completed).length;
        
        const todo = all.filter(task => !task.completed).length;
        
        const progress = calculate(done, all.length);
        
        return {
            all: all.length,
            done,
            todo,
            progress
        }

    }

    useEffect(() => {
        setFiltered(users);
    }, [users])

    useEffect(() => {
        setCurrentData(filtered.slice(offset, offset + pageLimit));
      }, [offset, filtered]);

    return ( 
        <Layout>
            
            <div className="flex justify-between p-2 border-b-2 border-gray-100">
                <div className="p-2">
                    <h1 className="m-0 text-base text-2xl">Team</h1>
                </div>
                <div className="p-2">
                    <div className="flex items-center justify-start">
                        <SearchIcon className="w-10 mr-2 text-gray-100 h-11 "/>
                        <input onChange={searchItem} type="text" className="field-control" placeholder="Search member"/>
                    </div>
                </div>
            </div>

            <div className="p-4">
                <div className="flex justify-between px-8 mb-6">
                    <div className="w-full">
                        <p className="text-base text-xl font-semibold">Team Progress</p>
                        {
                            !loadingUsers && <span className="text-sm text-gray-600">There are {users.length} members</span>
                        }
                        
                    </div>
                    <div className="w-1/4 text-right">
                    </div>
                </div>

                <Spinner loading={loadingUsers}/>
                        
                {
                    !loadingUsers && (
                        <div>

                            <table className="w-full bg-white">
                                <tbody>

                                    {
                                        currentData.map(user => (
                                            <tr key={user._id} className="hover:bg-blue-50">
                                                <td className="w-64 px-8 py-4">
                                                    <div className="flex items-center justify-start">
                                                        <img src={user.avatar} className="w-10 h-10 mr-2 rounded-full" alt=""/>
                                                        <div className="w-full">
                                                            <p className="text-base font-semibold">{user.first_name} {user.last_name}</p>
                                                            <span className="text-sm text-gray-400">{user.email}</span>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-4 text-center">
                                                    <span className={`${user.role ==='admin' ? 'text-yellow-600 bg-yellow-200': 'text-blue-600 bg-blue-200'} px-4 py-1 text-sm font-semibold  rounded`}>
                                                        {user.role}
                                                    </span>
                                                </td>
                                                <td className="px-8 py-4">
                                                    <div>
                                                        <div className="flex items-center justify-between">
                                                            <span className="block mb-1 mr-3 text-sm text-left text-gray-400">Progress</span>
                                                            <span className="block mb-1 text-sm text-right text-gray-500">{getStats(user._id).done}/{getStats(user._id).all}</span>
                                                        </div>
                                                        <div className="relative block h-2">
                                                            <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded"></div>
                                                            <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded" style={{width: getStats(user._id).progress}}></div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-8 py-4 text-center">
                                                    <span className={`${user.status ? 'text-green-600 bg-green-200':'text-red-600 bg-red-200'} px-4 py-1 text-sm font-semibold rounded`}>
                                                        {user.status ? 'active':'blocked'}
                                                    </span>
                                                </td>
                                                <td className="text-gray-600">
                                                    <span className="block text-sm text-gray-400">Joined</span>
                                                    {formatDate(user.createdAt, "MMM Do YY")}
                                                </td>
                                            </tr>
                                        ))
                                    }
                                </tbody>
                            </table>


                        </div>

                    )
                }

                {!loadingUsers && (
                    <Paginator
                        totalRecords={filtered.length}
                        pageLimit={pageLimit}
                        pageNeighbours={2}
                        setOffset={setOffset}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                )}

            </div>

        </Layout>
     );
}
 
export default Team;