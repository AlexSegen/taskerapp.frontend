import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import Comment from '../global/Comment';
import { ChevronRightIcon} from '../Icons'
import { CommentsContext } from '../../context/CommentsContext';

const TaskComments = () => {

    const { id } = useParams();

    const {content, editMode, setContent, getComments, comments, postComment, loadingComments, loadingComment, errorComment, errorComments }  = useContext(CommentsContext);

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
        <>
            <div className="flex items-center">
                
                <input 
                disabled={loadingComment || loadingComments || editMode}
                onChange={e => setContent(e.target.value)}
                value={content}
                className="w-full h-20 px-10 py-4 bg-gray-100 focus:outline-none" 
                type="text" 
                placeholder="Write a comment..."/>
                
                <button 
                onClick={() => handlePostComment()}
                disabled={loadingComment || loadingComments || editMode}
                type="button"  className="h-20 px-6 py-4 bg-blue-500 rounded-none button focus:outline-none hover:bg-blue-600">
                    <ChevronRightIcon className="w-10"/>
                
                </button>
            </div>

            { errorComment && <div className="alert-danger">{errorComment}</div> }
            
            <div className="mt-8">
                <Spinner loading={loadingComments} />

                { errorComments && <div className="alert-danger">{errorComments}</div> }

                {
                    comments && comments.length > 0 && comments.map(comment => <Comment key={comment._id} comment={comment}/>)
                }
            </div>

        </>
     );
}
 
export default TaskComments;