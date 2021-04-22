import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import Paginator from 'react-hooks-paginator';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
import { ADD_TASK, DETAILS_TASK } from '../../../constants/paths';
import { TasksContext } from '../../../context/TasksContext';
import { CheckCircleIcon, CheckIcon } from '../../../components/Icons';
import Spinner from '../../../components/Spinner';


const MyTasks = () => {
    
    const { myTasks, loadingTasks } = useContext(TasksContext);

    const pageLimit = 8;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);
    const [filtered, setFiltered] = useState([]);
    const [filter, setFilter] = useState("all");

    useEffect(() => {
        if(filter === "all"){
            setFiltered([...myTasks]);
        } else {
            setFiltered([...myTasks.filter(item => item.completed === (filter == "true"))]);
        }
    }, [myTasks, filter]);

    useEffect(() => {
        setCurrentData(filtered.slice(offset, offset + pageLimit));
    }, [offset, filtered]);

    return ( 
        <Card>
            <Card.Header>My Tasks</Card.Header>
            <Card.Body>

                <select onChange={e => setFilter(e.target.value)} value={filter} disabled={loadingTasks} className="field-control">
                    <option value="all">All tasks</option>
                    <option value="true">Completed</option>
                    <option value="false">Pending</option>
                </select>

                <div className="py-4">
                    <Spinner loading={loadingTasks}/>

                    {
                        !loadingTasks && currentData.map(task => (
                        <Link key={task._id} to={DETAILS_TASK(task._id)} className="block w-full p-2 text-sm text-gray-500 rounded hover:bg-blue-50 focus:outline-none ">
                            <span className="flex items-center w-full overflow-hidden whitespace-nowrap">
                                {
                                    task.completed ? <CheckCircleIcon className="w-6 mr-2 text-blue-500" /> : <CheckIcon  className="w-6 mr-2 text-gray-300 border border-gray-300 rounded-full"/>
                                }
                                {task.title}
                            </span>

                            <span className="pl-8 text-gray-400">Created at {formatDate(task.createdAt, "MMMM, DD")}</span>

                        </Link>))
                    }

                    {
                        !loadingTasks && !filtered.length && (
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


                
                {!loadingTasks && (
                    <Paginator
                            totalRecords={myTasks.length}
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
 
export default MyTasks;