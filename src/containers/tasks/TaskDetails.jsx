import React, { useContext, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import renderHTML from 'react-render-html';

import Tasks from  "./Tasks"
import Spinner from '../../components/Spinner';
import { formatDate } from '../../helpers/utils'
import TaskComments from '../../components/tasks/TaskComments';
import { TasksContext } from '../../context/TasksContext';
import TaskToolbar, { Tool } from '../../components/tasks/TaskToolbar';
import { TrashOutlineIcon, CheckIcon, ClockOutlineIcon, CheckCircleIcon, PencilOutlineIcon } from '../../components/Icons';

const TaskDetails = () => {
    let { id } = useParams();
    let history = useHistory();

    const { getTask, selected, composing, editTask, toggleTaskStatus, deleteTask, loadingTask } = useContext(TasksContext);

    const onSelect = (data) => {
      selected.assigned = data;
      editTask(selected);
    }

    useEffect(() => {
      if (id) { 
        getTask(id)
      }
    }, [id])

    useEffect(() => {
      if (selected === null && !composing) {
          history.push("/tasks")
      }
    },[composing, selected])


    if(loadingTask)
      return <Tasks><Spinner height="400" loading={true}/></Tasks>

    return selected && (
      <Tasks>
        <div className="min-h-screen bg-white">
          <TaskToolbar task={selected} onSelect={onSelect} disabled={selected.completed}>
                <Tool onClick={() => toggleTaskStatus(selected, true)} ><CheckIcon className="w-8"/></Tool>
                <Tool disabled={selected.completed} onClick={() => history.push(`/tasks/${selected._id}/edit`)} ><PencilOutlineIcon className="w-8"/></Tool>
                <Tool onClick={() => deleteTask(selected._id)} ><TrashOutlineIcon className="w-8"/></Tool>
          </TaskToolbar>
          <div className="w-full px-10 py-10" >
              <h1 className="text-3xl font-bold text-gray-900">{selected.title}</h1>
              
              <p className="flex items-center mb-5 text-gray-600">
                  <ClockOutlineIcon className="inline w-5 mr-2 "/> {formatDate(selected.createdAt, 'MMMM Do, h:mm:ss a')}
              </p>
                
              <p className="mb-10 text-gray-600">
                {
                  selected.author && (<><span className="text-gray-500">Author:</span> {selected.author.first_name} {selected.author.last_name} / </>)
                }
                {
                  selected.project && (<><span className="ml-2 text-gray-500">Project:</span> {selected.project.title}</>)
                }
              </p>

              <div className="mb-20 text-lg leading-9 text-gray-700 __content">
                {renderHTML(selected.content)}
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
      </Tasks> 
     );
}
 
export default TaskDetails;