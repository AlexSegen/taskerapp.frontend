import React from 'react';

const TasksFilter = () => {
    return (
        <div className="px-5 bg-white border-l-4 border-blue-500">
            <select className="block w-full px-8 py-8 font-bold tracking-wide uppercase cursor-pointer text-1xl focus:outline-none">
                <option value="">Marketing</option>
                <option value="">Design</option>
                <option value="">Development</option>
                <option value="">Management</option>
            </select>
        </div>
      );
}
 
export default TasksFilter;