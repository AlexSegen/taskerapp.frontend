import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { shuffle } from '../../helpers/utils';
import { TasksContext } from '../../context/TasksContext';

const TeamList = () => {
    const userCount = 6;
    
    const [tmp, setTmp] = useState([]);

    const { getUsers, users,  errorUsers } = useContext(TasksContext);
    useEffect(() => {
        getUsers();
    }, [])

    useEffect(() => {
        const randomize = shuffle([...users]);
        const firstTen = randomize
        setTmp([...firstTen].splice(0, userCount));
    }, [users])

    return ( 
        <>
            <div className="px-10 lg:px-4">
                <p className="mb-6 text-base font-bold uppercase sm:tracking-wide">Team</p>

                <div className="flex flex-row-reverse justify-center mt-10">
                    <div className="relative flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 m-1 mr-2 -ml-3 text-sm text-white bg-blue-500 border-r-2 border-white rounded-full">
                        +{users.length - userCount}
                    </div>
                    {
                        tmp.map(user => (
                            <div key={user._id} className="relative flex items-center justify-center w-10 h-10 lg:w-14 lg:h-14 m-1 mr-2 -ml-3 border-r-2 border-white rounded-full">
                                <img className="rounded-full" src={user.avatar} alt={`${user.first_name} ${user.last_name}`} title={`${user.first_name} ${user.last_name}`}/>
                            </div>
                        ))
                    }
                </div>
                { errorUsers && ( <div className="alert-danger"> {errorUsers} </div> ) }
            </div>
            <div className="my-4 text-right">
                <Link to="/team" className="text-gray-400 underline btn">See all</Link>
            </div>
            <hr className="my-8 border-gray-100 hidden"/>
        </>
    );
}
 
export default TeamList;