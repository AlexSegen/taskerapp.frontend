import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
import { TasksContext } from '../../../context/TasksContext';

const NewestMembers = () => {

    const { users } = useContext(TasksContext)

    const [filtered, setFiltered] = useState([]);

    const getNewest = () => {
        
        let tmp = [];

        tmp = users.sort((a, b) =>  {
            if ( moment(a.createdAt) < moment(b.createdAt) )
              return 1;
            if ( moment(a.createdAt) > moment(b.createdAt) )
              return -1;
            
            return 0;
        });

        setFiltered([...tmp].splice(0,4));
    }

    useEffect(() => {
       getNewest()
    }, [users])

    return ( 
        <Card>
            <Card.Header>Newest members</Card.Header>
            <Card.Body>
                <div className="">
                    <table className="w-full text-sm">
                        <tbody>
                            {
                                filtered.map(user => (
                                    <tr key={user._id}>
                                         <td className="px-8 py-4">
                                            <div className="flex items-center justify-start">
                                                <img src={user.avatar} className="w-8 h-8 mr-2 rounded-full" alt=""/>
                                                <div className="w-full">
                                                    <p className="flex items-center mb-0 text-base font-semibold">{user.first_name} {user.last_name}</p>
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
                                            <span className="block mb-1 text-sm text-gray-400">Joined</span>
                                            <span className="text-sm whitespace-nowrap">{formatDate(user.createdAt, "MMMM, DD")}</span>
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
 
export default NewestMembers;