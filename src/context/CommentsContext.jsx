import React, { createContext, useState } from 'react';

import { getAllByArticle as getAll, createComment } from '../services/comment.services';

export const CommentsContext = createContext()

const CommentsContextProvider = ({children}) => {

    const [comments, setComments] = useState([]);

    const [content, setContent] = useState("")

    const getComments = (articleId) => {
        getAll(articleId).then(data => {
            setComments(data)
        })
    }

    const postComment = comment => {
        createComment(comment).then(data => {
            setContent("")
            setComments([...comments, data]);
        })
    }

    const values = { getComments, postComment, comments, setContent, content }

    return (
        <CommentsContext.Provider value={values}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider;