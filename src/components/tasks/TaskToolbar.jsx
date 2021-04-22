import React from 'react';
import UserPicker from '../global/UserPicker';

export const Tool = ({children, onClick, disabled}) => {

    const css = "p-2 mx-1 rounded-full focus:outline-none";
    return (
        <button type="button"
         disabled={disabled}
         className={`${css} ${disabled ? 'bg-gray-100 text-gray-500 hover:bg-gray-100':'text-blue-500 bg-blue-100 hover:bg-blue-200'}`}
         onClick={onClick} >{children}</button>
    )
}

const TaskToolbar = ({task, children, onSelect, disabled}) => {

    return ( 
        <div className="flex items-center justify-between w-full px-2 py-2 bg-white border-b-2 border-gray-100  md:px-5 md:py-4">
            <UserPicker onSelect={onSelect} selected={task.assigned} disabled={disabled} />
            <div className="flex items-center p-2 px-2 md:px-4 justify-items-start md:justify-end">
                {children}
            </div>
        </div>
     );
}
 
export default TaskToolbar;