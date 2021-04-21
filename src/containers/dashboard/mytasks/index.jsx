import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom'
import Paginator from 'react-hooks-paginator';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
import { DETAILS_TASK } from '../../../constants/paths';
import { TasksContext } from '../../../context/TasksContext';
import { CheckCircleIcon, CheckIcon } from '../../../components/Icons';
import Spinner from '../../../components/Spinner';


const MyTasks = () => {
    
    const { myTasks, loadingTasks } = useContext(TasksContext);

    const pageLimit = 6;
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [currentData, setCurrentData] = useState([]);

    useEffect(() => {
        setCurrentData(myTasks.slice(offset, offset + pageLimit));
    }, [offset, myTasks]);

    return ( 
        <Card>
            <Card.Header>My Tasks</Card.Header>
            <Card.Body>

                <select disabled={loadingTasks} className="field-control">
                    <option value="all">All tasks</option>
                    <option value="1">Completed</option>
                    <option value="0">Pending</option>
                </select>

                <div className="py-4">
                    <Spinner loading={loadingTasks}/>

                    {
                        !loadingTasks && currentData.map(task => (
                        <Link key={task._id} to={DETAILS_TASK(task._id)} className="block w-full p-2 text-sm text-gray-400 rounded hover:bg-blue-50 focus:outline-none ">
                            <span className="flex items-center w-full overflow-hidden whitespace-nowrap">
                                {
                                    task.completed ? <CheckCircleIcon className="w-6 mr-2 text-blue-500" /> : <CheckIcon  className="w-6 mr-2 text-gray-300 border border-gray-300 rounded-full"/>
                                }
                                {task.title}
                            </span>

                            <span className="pl-8 text-gray-300">Created at {formatDate(task.createdAt, "MMMM, DD")}</span>

                        </Link>))
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