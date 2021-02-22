import React, { useContext, useEffect, useState } from 'react';

import { useAuth } from '../../hooks/useAuth';
import { formatDate } from '../../helpers/utils'
import { CommentsContext } from '../../context/CommentsContext';
import { PencilOutlineIcon, TrashIcon } from '../Icons';

const Comment = ({comment}) => {

    const { user } = useAuth();

    const { editComment, editMode, setEditMode, deleteComment, loadingComment, loadingComments } = useContext(CommentsContext);

    const handleUpdateComment = (e) => {
        if (e.key === 'Enter') {
            editComment(editMode)
        }
        if (e.key === "Escape") {
            setEditMode(false)
        }
    }

    const handleEditMode = (comment) => {
        if(user._id === comment.author._id)
            setEditMode(comment)
    }
    
    return ( 
        <div className="flex items-start mb-6">
            <img className="w-8 mr-5 rounded-full" src={comment.author.avatar} alt=""/>
            <div className="w-full">
                <div className="flex items-center space-between">
                    <div className="w-full p-2 text-base font-bold">{comment.author.first_name} {comment.author.last_name} 
                        <span className="ml-2 text-sm font-normal text-gray-600">{formatDate(comment.createdAt, 'MMMM Do, h:mm:ss a')}</span>
                    </div>
                    <div className="flex items-center justify-end w-1/3 p-2">
                        {
                            user._id === comment.author._id &&
                            <>
                                {/* <button
                                onClick={() => setEditMode(comment)}
                                 className="px-2" type="button"><PencilOutlineIcon className="w-4 mr-1 text-gray-500 hover:text-gray-700"/></button> */}
                                <button
                                onClick={() => deleteComment(comment._id)}
                                 className="px-2" type="button"><TrashIcon className="w-4 text-gray-500 focus:outline-none hover:text-gray-700"/></button>
                            </> 
                        }
                        
                    </div>
                </div>

                {
                    !editMode || editMode._id !== comment._id ? (
                        <div onClick={() => handleEditMode(comment)} className="mt-2 text-gray-700">
                            {comment.content}
                        </div>
                    ) : (<></>)
                }

                {
                    editMode && editMode._id === comment._id && (
                        <div className="">
                            
                            <input 
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