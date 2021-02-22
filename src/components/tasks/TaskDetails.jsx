import React, { useContext } from 'react';

import TaskComments from './TaskComments';
import { formatDate } from '../../helpers/utils'
import TaskToolbar, { Tool } from './TaskToolbar';
import { TasksContext } from '../../context/TasksContext';
import { TrashOutlineIcon, CheckIcon, ClockOutlineIcon, CheckCircleIcon, PencilOutlineIcon } from '../Icons';

const TaskDetails = () => {

    const { selected, setComposing, editTask, toggleTaskStatus, deleteTask } = useContext(TasksContext);

    const onSelect = (data) => {
      selected.assigned = data;
      editTask(selected);
    }

    return ( 
        <div className="min-h-screen bg-white">
          <TaskToolbar task={selected} onSelect={onSelect} disabled={selected.completed}>
                <Tool onClick={() => toggleTaskStatus(selected, true)} ><CheckIcon className="w-8"/></Tool>
                <Tool disabled={selected.completed} onClick={() => setComposing(true)} ><PencilOutlineIcon className="w-8"/></Tool>
                <Tool onClick={() => deleteTask(selected._id)} ><TrashOutlineIcon className="w-8"/></Tool>
          </TaskToolbar>
          <div className="w-full px-10 py-10" >
              <h1 className="text-3xl font-bold text-gray-900">{selected.title}</h1>
              
              <p className="flex items-center mb-5 text-gray-600">
                  <ClockOutlineIcon className="inline w-5 mr-2 "/> {formatDate(selected.createdAt, 'MMMM Do, h:mm:ss a')}
              </p>
                
              <p className="mb-10 text-gray-600">
                <span className="text-gray-500">Author:</span> {selected.author.first_name} {selected.author.last_name} / 
                <span className="ml-2 text-gray-500">Project:</span> {selected.project.title}
              </p>


              <div className="mb-20 text-lg leading-9 text-gray-700">
                {selected.content}
              </div>

              {
                selected.completed && (
                
                  <div className="flex items-center py-8 my-5 border-t-2 border-b-2 border-gray-300">
                      <CheckCircleIcon className="w-10 text-blue-500"/>
                      <span className="mx-4 font-bold text-blue-500">{selected.completedBy.first_name} completed this task</span>
                      <span className="text-gray-600">{formatDate(selected.completedAt, 'MMMM Do, h:mm:ss a')}</span>
                  </div>

                )
              }

              <TaskComments/>

          </div>
        </div>
     );
}
 
export default TaskDetails;