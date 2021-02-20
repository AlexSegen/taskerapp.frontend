import React from 'react';
import UserPicker from '../global/UserPicker';

export const Tool = ({children, onClick, disabled}) => {

    const css = "p-2 mr-3 rounded-full focus:outline-none";
    return (
        <button type="button"
         disabled={disabled}
         className={`${css} ${disabled ? 'bg-gray-100 text-gray-500 hover:bg-gray-100':'text-blue-500 bg-blue-100 hover:bg-blue-200'}`}
         onClick={onClick} >{children}</button>
    )
}

const TaskToolbar = ({task, children, onSelect, disabled}) => {

    return ( 
        <div className="flex items-center justify-between px-5 py-4 bg-white border-b-2 border-gray-300">
            <UserPicker onSelect={onSelect} selected={task.assigned} disabled={disabled} />
            <div className="flex items-center justify-end p-2 px-4">
                {children}
            </div>
        </div>
     );
}
 
export default TaskToolbar;