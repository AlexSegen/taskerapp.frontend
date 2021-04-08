import React, { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import Spinner from '../Spinner';
import { SpinnerI } from '../Icons'
import Comment from '../global/Comment';
import { CommentsContext } from '../../context/CommentsContext';

const TaskComments = () => {

    const { id } = useParams();

    const {content, editMode, setContent, getComments, comments, postComment, loadingComments, loadingComment, errorComment, errorComments }  = useContext(CommentsContext);

    const handlePostComment = () => {
        if (!content || (content && !content.trim().length))
            return;
        postComment({ content, articleId: id})
        
    }

    useEffect(() => {
        if(id){ getComments(id) }
        setContent("")
    }, [id])

    return ( 
        <>
            <div className="">
                <p className="mb-4 text-base text-gray-400">Comments</p>
                
                <textarea 
                disabled={loadingComment || loadingComments || editMode}
                onChange={e => setContent(e.target.value)}
                value={content}
                className="h-20 px-10 py-4 mb-4 field-control focus:h-40" 
                type="text" 
                placeholder="Leave comments..."/>
                
                <button onClick={() => handlePostComment()} type="button" 
                    className={`px-8 py-2 text-sm font-semibold text-blue-400 bg-white border-2 border-blue-400 rounded rounded-full hover:text-white hover:border-blue-500 focus:outline-none hover:bg-blue-500 ${loadingComment ? 'flex space-between justify-center border-blue-500 bg-blue-500 text-white':'block '}`}
                    disabled={loadingComment || loadingComments || editMode}>
                        { loadingComment && <SpinnerI/>}
                        {loadingComment ? '':'Save'}
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