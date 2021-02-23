import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../context/TasksContext';

const TaskStats = () => {

    const {completed, myTasks, done, tasks } = useContext(TasksContext);

    const [percent, setPercent] = useState(0)


    const calculate = () => {
        
        const result = (done.length / myTasks.length) * 100
        return result + "%";
    }

    useEffect(() => {
        setPercent(calculate())
    }, [myTasks, done])

    return ( 
        <>
            <div className="my-4">
                <span className="block mb-1 text-sm text-right text-gray-600">{done.length}/{myTasks.length}</span>
                <div className="relative block h-2">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded"></div>
                    <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded" style={{width: percent}}></div>
                </div>
                <div className="flex justify-between text-center">
                    <div className="p-3">
                        <div className="mb-1 text-2xl font-bold text-gray-900">{completed.length}</div>
                        <div className="font-bold text-gray-600">Completed</div>
                        <div className="text-gray-500">tasks</div>
                    </div>
                    <div className="p-3">
                        <div className="mb-1 text-2xl font-bold text-gray-900">{tasks.length - completed.length}</div>
                        <div className="font-bold text-gray-600">Todo</div>
                        <div className="text-gray-500">tasks</div>
                    </div>
                    <div className="p-3">
                        <div className="mb-1 text-2xl font-bold text-gray-900">{tasks.length }</div>
                        <div className="font-bold text-gray-600">Total</div>
                        <div className="text-gray-500">tasks</div>
                    </div>
                </div>
            </div>

            <hr className="my-8 border-gray-400"/>
        </>
     );
}
 
export default TaskStats;