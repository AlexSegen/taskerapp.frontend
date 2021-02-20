import React, { useContext } from 'react';

import TaskComments from './TaskComments';
import { formatDate } from '../../helpers/utils'
import TaskToolbar, { Tool } from './TaskToolbar';
import { TrashOutlineIcon, CheckIcon, ClockOutlineIcon, CheckCircleIcon, PencilOutlineIcon } from '../Icons';
import { TasksContext } from '../../context/TasksContext';

const TaskDetails = () => {

    const { selected, setComposing, editTask, deleteTask } = useContext(TasksContext);

    const onSelect = (data) => {
      selected.assigned = data;
      editTask(selected);
    }

    return ( 
        <div className="max-h-screen min-h-screen overflow-y-auto bg-white">
          <TaskToolbar task={selected} onSelect={onSelect}>
                <Tool><CheckIcon className="w-8"/></Tool>
                <Tool onClick={() => setComposing(true)} ><PencilOutlineIcon className="w-8"/></Tool>
                <Tool onClick={() => deleteTask(selected._id)} ><TrashOutlineIcon className="w-8"/></Tool>
          </TaskToolbar>
          <div className="w-full px-10 py-10" >
              <h1 className="text-3xl font-bold text-gray-900">{selected.title}</h1>
              <p className="flex items-center mb-10 text-gray-600"><ClockOutlineIcon className="inline w-5 mr-2 "/> {formatDate(selected.createdAt, 'MMMM Do, h:mm:ss a')}</p>

              <div className="mb-20 text-lg leading-9 text-gray-700">
                {selected.content}
              </div>

              {
                selected.done && (
                
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