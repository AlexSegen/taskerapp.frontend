import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
import { DETAILS_TASK } from '../../../constants/paths';
import { TasksContext } from '../../../context/TasksContext';
import { CheckCircleIcon, CheckIcon } from '../../../components/Icons';

const NewestTasks = () => {

    const { tasks } = useContext(TasksContext)

    const [filtered, setFiltered] = useState([]);

    const getNewest = () => {
        
        let tmp = [];

        tmp = tasks.sort((a, b) =>  {
            if ( moment(a.createdAt) < moment(b.createdAt) )
              return 1;
            if ( moment(a.createdAt) > moment(b.createdAt) )
              return -1;
            
            return 0;
        });

        setFiltered([...tmp].splice(0,5));
    }

    useEffect(() => {
       getNewest()
    }, [tasks])

    return (
        <Card>
            <Card.Header>Recent tasks</Card.Header>
            <Card.Body>
                <div>
                {
                    filtered.map(task => (
                        <Link to={DETAILS_TASK(task._id)} className="flex items-center justify-between text-sm text-gray-500 rounded hover:bg-blue-50 focus:outline-none ">
                            <div key={task._id}  className="flex items-center w-full p-2 ">
                                {
                                    task.completed ? <CheckCircleIcon className="w-6 mr-2 text-blue-500" /> : <CheckIcon  className="w-6 mr-2 text-gray-300 border border-gray-300 rounded-full"/>
                                }
                                <div className="w-full pr-4 overflow-hidden whitespace-nowrap">
                                    {task.title}
                                    <div className="text-gray-400 ">{formatDate(task.createdAt, "MMMM DD, hh:mm a")}</div>
                                </div>
                            </div>
                            <div className="items-center justify-start hidden w-3/6 p-2 md:flex">
                                {task.project ? task.project.title : ""}
                            </div>
                            <div className="items-center justify-start hidden w-3/6 p-2 md:flex">
                                <img src={task.assigned ? task.assigned.avatar : "/avatar.jpg"} className="w-5 h-5 mr-2 rounded-full" alt=""/>
                                <div className="w-full">
                                    <span className="flex items-center mb-0 font-normal whitespace-nowrap">
                                        {
                                            task.assigned ? `${task.assigned.first_name} ${task.assigned.last_name}` : "Unassigned"
                                        }
                                    </span>
                                </div>
                            </div>
                        </Link>
                    ))
                }
                </div>

            </Card.Body>
        </Card>
    )
}
 
export default NewestTasks;