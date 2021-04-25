import React, { useContext } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { formatDate } from '../../helpers/utils'
import { TrashIcon, ThumbUpIcon } from '../Icons';
import { CommentsContext } from '../../context/CommentsContext';
import { Link } from 'react-router-dom';
import { DETAILS_MEMBER } from '../../constants/paths';

const Comment = ({comment}) => {

    const { user } = useAuth();

    const { editComment, editMode, setEditMode, deleteComment, loadingComment, loadingComments, likeComment } = useContext(CommentsContext);

    const handleUpdateComment = (e) => {
        if (e.key === 'Enter') {
            editComment(editMode)
        }
        if (e.key === "Escape" || e.key === "ESC" || e.key === "Esc") {
            setEditMode(false)
        }
    }

    const handleEditMode = (comment) => {
        if(user._id === comment.author._id)
            setEditMode(comment)
    }
    
    return ( 
        <div className="flex items-start mb-6">
            <div className="w-full">
                <div className="grid grid-cols-12">
                    <Link className="col-span-8 flex items-center justify-start p-2" to={DETAILS_MEMBER(comment.author._id)}>
                        <img className="w-8 mr-2 rounded-full" src={comment.author.avatar} alt=""/>
                        <div className="text-base font-semibold">
                            {comment.author.first_name} {comment.author.last_name} 
                        </div>
                        <span className="p-2 text-sm font-normal text-gray-400">{formatDate(comment.createdAt, 'MMMM Do, h:mm:ss a')}</span>
                    </Link>
                    <div className="col-span-4 flex items-center justify-end p-2">

                        {
                            user._id === comment.author._id &&
                                <button
                                onClick={() => deleteComment(comment._id)}
                                 className="px-2 text-gray-500 focus:outline-none hover:text-gray-700" type="button"><TrashIcon className="w-4"/></button>
                        }

                        <button 
                        onClick={()=> likeComment(comment._id)}
                        type="button" className="flex items-center justify-center px-2 text-gray-400 hover:text-gray-700 focus:outline-none">
                            <ThumbUpIcon className="w-5 "/> <span className="ml-1 text-xs">{comment.likes}</span>
                        </button>
                        
                    </div>
                </div>

                {
                    !editMode || editMode._id !== comment._id ? (
                        <div onClick={() => handleEditMode(comment)} className="mt-2 text-gray-500">
                            {comment.content}
                        </div>
                    ) : (<></>)
                }

                {
                    editMode && editMode._id === comment._id && (
                        <div className="relative">
                            <span className="absolute top-0 right-0 p-1 text-xs text-blue-600 bg-blue-100">ENTER to save / ESC to cancel</span>
                            <textarea 
                            value={editMode.content}
                            onKeyDown={handleUpdateComment}
                            disabled={loadingComment || loadingComments}
                            onChange={(e) => setEditMode({...editMode, content: e.target.value})}
                            className="w-full h-20 px-10 py-6 bg-white border-2 border-gray-100 focus:outline-none" 
                            type="text" 
                            placeholder="Write a comment..."/>
                        </div>
                    )
                }


            </div>
        </div>
     );
}
 
export default Comment;