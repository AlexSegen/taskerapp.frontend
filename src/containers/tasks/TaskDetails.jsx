import React, { useContext, useEffect } from 'react';
import { useHistory, useParams, Link } from 'react-router-dom';
import renderHTML from 'react-render-html';

import Tasks from './Tasks'
import Spinner from '../../components/Spinner'
import { formatDate } from '../../helpers/utils'
import TaskComments from '../../components/tasks/TaskComments';
import { TasksContext } from '../../context/TasksContext';
import TaskToolbar, { Tool } from '../../components/tasks/TaskToolbar';
import { TrashOutlineIcon, CheckIcon, ClockOutlineIcon, CheckCircleIcon, PencilOutlineIcon, XOutlineIcon } from '../../components/Icons';

const TaskDetails = () => {
    let { id } = useParams();
    let history = useHistory();

    const { selected, setSelected, getTask, editTask, toggleTaskStatus, deleteTask, loadingTask } = useContext(TasksContext);

    const onSelect = (data) => {
      selected.assigned = data;
      editTask(selected);
    }
    
    const handleClose = () => {
      history.push("/tasks")
    }

    useEffect(() => {
      if (id) { 
        getTask(id)
      }
    }, [id])

    useEffect(() => {
      if (selected && selected.redirect) {
        setSelected({...selected, redirect: false})
        history.push("/tasks")
      }
  }, [selected])


    if(!loadingTask && !selected)
      return (
        <Tasks>
        <div className="min-h-screen text-center bg-white">
          <p>Task not found</p>
          <Link to="/tasks">Return</Link>
        </div>
        </Tasks>
      )

    return (
      <Tasks>
        {
          loadingTask ? (
            <Spinner loading={true} height="400"/>
          ) : (
              <div className="min-h-screen bg-white">
                <TaskToolbar task={selected} onSelect={onSelect} disabled={selected.completed}>
                      <Tool onClick={() => toggleTaskStatus(selected, true)} ><CheckIcon className="w-8"/></Tool>
                      <Tool disabled={selected.completed} onClick={() => history.push(`/tasks/${selected._id}/edit`)} ><PencilOutlineIcon className="w-8"/></Tool>
                      <Tool onClick={() => deleteTask(selected._id)} ><TrashOutlineIcon className="w-8"/></Tool>
                      <Tool disabled={loadingTask} onClick={handleClose}><XOutlineIcon className="w-8"/></Tool>
                </TaskToolbar>
                <div className="w-full px-10 py-10" >
                    <h1 className="text-gray-900 sm:font-semibold lg:font-bold md:text-2xl sm:text-lg lg:text-3xl">{selected.title}</h1>
                    
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

                    <div className="mb-20 leading-9 text-gray-700 sm:text-base lg:text-lg __content">
                      {renderHTML(selected.content)}
                    </div>

                    {
                      selected.completed && (
                      
                        <div className="flex items-center py-8 my-5 border-t-2 border-b-2 border-gray-300">
                            <CheckCircleIcon className="w-10 text-blue-500"/>
                            <span className="mx-4 font-semibold text-blue-500">{selected.completedBy.first_name} completed this task</span>
                            <span className="text-gray-600">{formatDate(selected.completedAt, 'MMMM Do, h:mm:ss a')}</span>
                        </div>

                      )
                    }

                    <TaskComments/>

                </div>
              </div>
          )
        }
      </Tasks>
     );
}
 
export default TaskDetails;