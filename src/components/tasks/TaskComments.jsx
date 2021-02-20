import React, { useContext } from 'react';
import Comment from '../global/Comment';
import { ChevronRightIcon} from '../Icons'
import { TasksContext } from '../../context/TasksContext';

const TaskComments = () => {

    const { comments }  = useContext(TasksContext);

    return ( 
        <div>
            <div className="flex items-center">
                <input className="w-full h-20 px-10 py-4 bg-gray-100 focus:outline-none" type="text" placeholder="Write a comment..."/>
                <button type="button" className="button h-20 px-6 py-4 rounded-none bg-blue-500 hover:bg-blue-600"><ChevronRightIcon className="w-10"/> </button>
            </div>
            
            <div className="mt-8">
                {
                    comments && comments.length && comments.map(comment => <Comment key={comment.id} comment={comment}/>)
                }
            </div>

        </div>
     );
}
 
export default TaskComments;