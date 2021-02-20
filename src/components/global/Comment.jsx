import React from 'react';
import { formatDate } from '../../helpers/utils'

const Comment = ({comment}) => {
    return ( 
        <div className="flex items-start mb-8">
            <img className="w-8 mr-5 rounded-full" src={comment.author.avatar} alt=""/>
            <div>
                <div className="text-base font-bold">{comment.author.first_name} {comment.author.last_name} 
                <span className="ml-2 text-sm font-normal text-gray-600">{formatDate(comment.createdAt, 'MMMM Do, h:mm:ss a')}</span></div>
                <div className="mt-4 text-gray-700">
                    {comment.content}
                </div>
            </div>
        </div>
     );
}
 
export default Comment;