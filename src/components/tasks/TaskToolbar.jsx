import React from 'react';
import UserPicker from '../global/UserPicker';

export const Tool = ({children, onClick}) => {
    return (
        <button type="button" className="p-2 mr-3 text-blue-500 bg-blue-100 rounded-full hover:bg-blue-200 focus:outline-none" onClick={onClick} >{children}</button>
    )
}

const TaskToolbar = ({task, children, onSelect}) => {

    return ( 
        <div className="flex items-center justify-between px-5 py-4 bg-white border-b-2 border-gray-300">
            <UserPicker onSelect={onSelect} selected={task.assigned} />
            <div className="flex items-center justify-end p-2 px-4">
                {children}
            </div>
        </div>
     );
}
 
export default TaskToolbar;