import React, { useContext, useEffect } from 'react';

import { ChevronRightIcon } from '../Icons';
import { TasksContext } from '../../context/TasksContext';

const ProjectList = () => {

    const { getProjects, projects, errorProjects } = useContext(TasksContext);

    useEffect(() => {
        getProjects();
    }, [])

    return ( 
        <>
            <div className="px-10 lg:px-4">
                <p className="mb-6 text-base text-xl font-bold uppercase sm:tracking-wide">Projects</p>
                <ul>
                    {
                        projects.map(p => (
                            <li key={p._id} className="mb-4">
                                <button type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none"><ChevronRightIcon className={`inline w-6 mr-1 ${p.color}`}/> {p.title}</button>
                            </li>
                        ))
                    }
                </ul>
                { errorProjects && ( <div className="alert-danger"> {errorProjects} </div> ) }
            </div>
            <hr className="my-8 border-gray-400"/>
        </>
    );
}
 
export default ProjectList;