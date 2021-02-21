import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Comment from '../global/Comment';
import { ChevronRightIcon} from '../Icons'
import { CommentsContext } from '../../context/CommentsContext';

const TaskComments = () => {

    const { id } = useParams();

    const { getComments, comments, postComment, setContent, content }  = useContext(CommentsContext);

    const handlePostComment = () => {
        if (content && !content.trim().length)
            return;
        postComment({ content, articleId: id})
    }

    useEffect(() => {
        if(id){ getComments(id) }
        setContent("")
    }, [id])

    return ( 
        <div>
            <div className="flex items-center">
                <input 
                onChange={e => setContent(e.target.value)}
                value={content}
                className="w-full h-20 px-10 py-4 bg-gray-100 focus:outline-none" 
                type="text" 
                placeholder="Write a comment..."/>
                <button 
                onClick={() => handlePostComment()}
                type="button" 
                className="button h-20 px-6 py-4 focus:outline-none rounded-none bg-blue-500 hover:bg-blue-600">
                    <ChevronRightIcon className="w-10"/>
                </button>
            </div>
            
            <div className="mt-8">
                {
                    comments && comments.length > 0 && comments.map(comment => <Comment key={comment._id} comment={comment}/>)
                }
            </div>

        </div>
     );
}
 
export default TaskComments;