import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { shuffle } from '../../helpers/utils';
import { TasksContext } from '../../context/TasksContext';

const TeamList = () => {
    const [tmp, setTmp] = useState([]);

    const { getUsers, users,  errorUsers } = useContext(TasksContext);
    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const randomize = shuffle(users);
        const firstTen = randomize.splice(0, 10)
        setTmp([...firstTen]);
    }, [users])

    return ( 
        <>
            <div className="px-10 lg:px-4">
                <p className="mb-6 text-base text-xl font-bold uppercase sm:tracking-wide">Team</p>
                <div className="text-center">
                {
                    tmp.map(user => (
                        <div key={user._id} className="inline-block w-16 h-16 p-3 lg:p-2" title={`${user.first_name} ${user.last_name}`}>
                            <img className="block w-full mx-auto rounded-full" src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
                        </div>
                    ))
                }
                </div>
                { errorUsers && ( <div className="alert-danger"> {errorUsers} </div> ) }
            </div>
            <div className="my-4 text-right">
                <Link to="/team" className="btn">See all</Link>
            </div>
            <hr className="my-8 border-gray-100"/>
        </>
    );
}
 
export default TeamList;