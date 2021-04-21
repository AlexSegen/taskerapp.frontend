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
            <Card.Header>Recent members</Card.Header>
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
                                                    <p className="flex items-center mb-0 text-base font-semibold whitespace-nowrap">{user.first_name} {user.last_name}</p>
                                                </div>
                                            </div>
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