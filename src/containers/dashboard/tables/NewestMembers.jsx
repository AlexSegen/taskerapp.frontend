import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import moment from 'moment';

import Card from '../../../components/Card';
import { formatDate } from '../../../helpers/utils';
import { TasksContext } from '../../../context/TasksContext';
import { DETAILS_MEMBER, HOME } from '../../../constants/paths';

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
            <Card.Header>New members</Card.Header>
            <Card.Body>
                <div>
                {
                    filtered.map(user => (
                        <Link to={DETAILS_MEMBER(user._id)} key={user._id} className="flex items-center justify-between py-2 text-sm text-gray-400 rounded hover:bg-blue-50 focus:outline-none ">
                            <div className="flex items-center justify-start w-full p-2">
                                <img src={user.avatar} className="w-6 h-6 mr-2 rounded-full" alt=""/>
                                <div className="w-full ">
                                    <div className="mb-0 font-normal text-gray-500 whitespace-nowrap ">
                                        {user.first_name} {user.last_name}
                                    </div>
                                    {user.email}
                                </div>
                            </div>
                            <div   className="flex items-center w-3/6 p-2 ">
                                <div>{formatDate(user.createdAt, "MMMM, DD")}</div>
                            </div>
                        </Link>
                    ))
                }
                </div>
                
            </Card.Body>
        </Card>
     );
}
 
export default NewestMembers;