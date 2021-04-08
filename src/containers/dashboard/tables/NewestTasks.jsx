import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
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

        setFiltered([...tmp.splice(0,4)]);
    }

    useEffect(() => {
       getNewest()
    }, [tasks])

    return ( 
        <Card>
            <Card.Header>Newest tasks</Card.Header>
            <Card.Body>
                <div className="">
                    <table className="w-full text-sm">
                        <tbody>
                            {
                                filtered.map(task => (
                                    <tr key={task._id}>
                                         <td className="px-8 py-4">
                                            <p className="font-semibold whitespace-nowrap">{task.title}</p>
                                        </td>
                                        <td className="px-8 py-4 text-center">
                                            <div className="flex items-center justify-start">
                                                <img src={task.author.avatar} className="w-8 h-8 mr-2 rounded-full" alt=""/>
                                                <div className="w-full">
                                                    <p className="flex items-center mb-0 text-base font-semibold whitespace-nowrap">{task.author.first_name} {task.author.last_name}</p>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-8 py-4">
                                            <span className="block mb-1 text-sm text-gray-400">Created</span>
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