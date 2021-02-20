import React from 'react';
import { UserOutlineIcon, TrashOutlineIcon, TagOutlineIcon, CheckIcon } from '../Icons';


const Tool = ({children, onClick}) => {
    return (
        <button type="button" className="p-2 mr-3 text-blue-500 bg-blue-100 rounded-full hover:bg-blue-200 focus:outline-none" onClick={onClick} >{children}</button>
    )
}

const TaskToolbar = ({task}) => {
    return ( 
        <div className="flex items-center justify-between px-5 py-4 bg-white border-b-2 border-gray-300">
            <div className="flex items-center justify-start p-2">
                {
                    task.assigned ? 
                        (
                            <>
                            <img className="block w-10 mr-3 rounded-full" src={task.assigned.avatar} alt=""/> 
                            <span className="font-bold text-gray-700"> {task.assigned.first_name} {task.assigned.last_name} </span>
                            </>
                        ) : (
                            <>
                            <img className="block w-10 mr-3 rounded-full" src="/avatar.jpg" alt=""/>
                            <span className="font-bold text-gray-700">Sin asignar</span>
                            </>
                        )
                }

            </div>
            <div className="flex items-center justify-end p-2 px-4">
                <Tool><UserOutlineIcon className="w-8"/></Tool>
                <Tool><TrashOutlineIcon className="w-8"/></Tool>
                <Tool><TagOutlineIcon className="w-8"/></Tool>
                <Tool><CheckIcon className="w-8"/></Tool>
            </div>
        </div>
     );
}
 
export default TaskToolbar;