import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
import { DETAILS_TASK } from '../../../constants/paths';
import { TasksContext } from '../../../context/TasksContext';

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

        const undone = tmp.filter(t => !t.completed);

        setFiltered([...undone].splice(0,4));
    }

    useEffect(() => {
       getNewest()
    }, [tasks])

    return ( 
        <Card>
            <Card.Header>Recent tasks</Card.Header>
            <Card.Body>
                <div className="">
                    <table className="w-full text-sm">
                        <thead>
                            <tr>
                                <td className="px-8 py-4">Task</td>
                                <td className="px-8 py-4">Author</td>
                                <td className="px-8 py-4">Created</td>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                filtered.map(task => (
                                    <tr key={task._id} >
                                         <td className="w-64 px-8 py-4">
                                             <Link className="text-black hover:underline" to={DETAILS_TASK(task._id)}>{task.title}</Link>
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <div className="flex items-center justify-start">
                                                <img src={task.author.avatar} className="w-8 h-8 mr-2 rounded-full" alt=""/>
                                                <div className="w-full">
                                                    <p className="flex items-center mb-0 text-base font-normal whitespace-nowrap">{task.author.first_name} {task.author.last_name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4 whitespace-nowrap">
                                            <span className="text-sm">{formatDate(task.createdAt, "MMMM, DD")}</span>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>

                </div>
            </Card.Body>
        </Card>
     );
}
 
export default NewestTasks;