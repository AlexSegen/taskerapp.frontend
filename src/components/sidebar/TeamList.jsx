import React, { useContext, useEffect } from 'react';

import Spinner from '../Spinner';
import { TasksContext } from '../../context/TasksContext';

const TeamList = () => {

    const { getUsers, users, loadingUsers, errorUsers } = useContext(TasksContext);

    useEffect(() => {
        getUsers();
    }, [])

    return ( 
        <>

            <div className="px-8">
                <p className="mb-6 text-base text-xl font-bold uppercase sm:tracking-wide">Team</p>

                <Spinner loading={loadingUsers} />

                <div className="text-center">
                {
                    users.map(user => (
                        <div key={user._id} className="inline-block p-3 w-16 h-16" title={`${user.first_name} ${user.last_name}`}>
                            <img className="block mx-auto rounded-full w-full" src={user.avatar} alt={`${user.first_name} ${user.last_name}`}/>
                        </div>
                    ))
                }
                </div>

                { errorUsers && ( <div className="alert-danger"> {errorUsers} </div> ) }

            </div>

            <hr className="my-8 border-gray-400"/>

        </>
    );
}
 
export default TeamList;