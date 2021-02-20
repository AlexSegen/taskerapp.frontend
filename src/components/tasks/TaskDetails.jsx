import React from 'react';
import TaskToolbar, { Tool } from './TaskToolbar';
import { formatDate } from '../../helpers/utils'
import { TrashOutlineIcon, CheckIcon, ClockOutlineIcon, CheckCircleIcon, PencilOutlineIcon } from '../Icons';
import TaskComments from './TaskComments';

const TaskDetails = ({task}) => {
    return ( 
        <div className="max-h-screen min-h-screen overflow-y-auto bg-white">
          <TaskToolbar task={task}>
                <Tool><CheckIcon className="w-8"/></Tool>
                <Tool><PencilOutlineIcon className="w-8"/></Tool>
                <Tool><TrashOutlineIcon className="w-8"/></Tool>
          </TaskToolbar>
          <div className="w-full px-10 py-10" >
              <h1 className="text-3xl font-bold text-gray-900">{task.title}</h1>
              <p className="flex items-center mb-10 text-gray-600"><ClockOutlineIcon className="inline w-5 mr-2 "/> {formatDate(task.createdAt, 'MMMM Do, h:mm:ss a')}</p>

              <div className="mb-20 text-lg leading-9 text-gray-700">
                {task.content}
              </div>

              {
                task.done && (
                
                  <div className="flex items-center py-8 my-5 border-t-2 border-b-2 border-gray-300">
                      <CheckCircleIcon className="w-10 text-blue-500"/>
                      <span className="mx-4 font-bold text-blue-500">Natalie completed this task</span>
                      <span className="text-gray-600">26 Feb, 2020</span>
                  </div>

                )
              }

              <TaskComments/>

          </div>
        </div>
     );
}
 
export default TaskDetails;