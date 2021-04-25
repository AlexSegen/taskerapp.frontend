import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import Paginator from 'react-hooks-paginator';

import Card from '../Card';
import Spinner from '../Spinner';
import { formatDate } from '../../helpers/utils';
import { ADD_TASK, DETAILS_TASK } from '../../constants/paths';
import { CheckCircleIcon, CheckIcon } from '../Icons';

const UserTasks = ({tasks, loading}) => {
    
    const pageLimit = 8;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        if(filter === "all"){
            setFiltered([...tasks]);
        } else {
            setFiltered([...tasks.filter(item => item.completed === (filter == "true"))]);
        }
    }, [tasks, filter]);

    useEffect(() => {
        setCurrentData(filtered.slice(offset, offset + pageLimit));
    }, [offset, filtered]);

    return ( 
        <Card>
            <Card.Header>My Tasks</Card.Header>
            <Card.Body>

                <select value={filter} onChange={e => setFilter(e.target.value)} value={filter} disabled={loading} className="field-control">
                    <option value="all">All tasks</option>
                    <option value="true">Completed</option>
                    <option value="false">Pending</option>
                </select>

                <div className="py-4">
                    <Spinner loading={loading}/>

                    {
                        !loading && currentData.map(task => (
                        <Link key={task._id} to={DETAILS_TASK(task._id)} className="block w-full p-2 text-sm text-gray-500 rounded hover:bg-blue-50 focus:outline-none ">
                            <span className="flex items-center w-full overflow-hidden whitespace-nowrap font-semibold text-black">
                                {
                                    task.completed ? <CheckCircleIcon className="w-6 mr-2 text-blue-500" /> : <CheckIcon  className="w-6 mr-2 text-gray-300 border border-gray-300 rounded-full"/>
                                }
                                {task.title}
                            </span>

                            <span className="pl-8 text-gray-400">{formatDate(task.createdAt, "MMMM DD, h:mm:ss a")}</span>

                        </Link>))
                    }

                    {
                        !loading && !filtered.length && (
                            <div className="flex items-center justify-center border border-gray-300 border-opacity-50 border-dashed rounded">
                                <div className="w-full p-4 text-sm text-center text-gray-400">
                                    <div >There are no tasks</div>
                                    {
                                        filter === "all" && <div className="my-2"><Link className="button is-primary" to={ADD_TASK}>Add new</Link></div>
                                    }
                                </div>
                            </div>
                        )
                    }

                </div>


                
                {!loading && (
                    <Paginator
                            totalRecords={tasks.length}
                            pageLimit={pageLimit}
                            pageNeighbours={2}
                            setOffset={setOffset}
                            currentPage={currentPage}
                            setCurrentPage={setCurrentPage}
                        />
                )}

            </Card.Body>
        </Card>
     );
}
 
export default UserTasks;