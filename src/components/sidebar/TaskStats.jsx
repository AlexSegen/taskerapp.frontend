import React, { useContext, useEffect, useState } from 'react';
import { TasksContext } from '../../context/TasksContext';


const TaskStats = () => {

    const {completed, myTasks, done, tasks, loadingTasks } = useContext(TasksContext);

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
            <div className="mb-4">
                <span className="block mb-1 text-sm text-right text-gray-600">{done.length}/{myTasks.length}</span>
                <div className="relative block h-2">
                    <div className="absolute top-0 left-0 w-full h-2 bg-gray-300 rounded"></div>
                    <div className="absolute top-0 left-0 h-2 bg-blue-500 rounded" style={{width: percent}}></div>
                </div>
                <div className="flex justify-center w-full text-center">
                    <div className="w-full p-3">
                        <div className={`mb-1 text-2xl font-bold text-gray-900 ${loadingTasks ? 'w-10 animate-pulse h-8 rounded bg-blue-200  mx-auto text-blue-200':''}`}>{completed.length}</div>
                        <div className="font-semibold text-gray-600">Done</div>
                    </div>
                    <div className="w-full p-3">
                        <div className={`mb-1 text-2xl font-bold text-gray-900 ${loadingTasks ? 'w-10 animate-pulse h-8 rounded bg-blue-200  mx-auto text-blue-200':''}`}>{tasks.filter(t => !t.completed).length}</div>
                        <div className="font-semibold text-gray-600">To do</div>
                    </div>
                    <div className="w-full p-3">
                        <div className={`mb-1 text-2xl font-bold text-gray-900 ${loadingTasks ? 'w-10 animate-pulse h-8 rounded bg-blue-200  mx-auto text-blue-200':''}`}>{tasks.length }</div>
                        <div className="font-semibold text-gray-600">Total</div>
                    </div>
                </div>
            </div>

            <hr className="my-4 border-gray-100"/>
        </>
     );
}
 
export default TaskStats;