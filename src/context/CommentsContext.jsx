import React, { createContext, useState, useReducer } from 'react';

import { getAllByArticle as getAll, createComment } from '../services/comment.services';

import { CommentsReducer, initialState} from './reducers/CommentsReducer';

export const CommentsContext = createContext()

const CommentsContextProvider = ({children}) => {

    const [{
        comments,
        loadingComments,
        errorComments,
        loadingComment,
        errorComment,
    }, dispatch] = useReducer(CommentsReducer, initialState)

    const [content, setContent] = useState("")

    const getComments = (articleId) => {
        dispatch({ type: "REQUEST_COMMENTS"})
        getAll(articleId).then(data => {
            dispatch({ type: "SET_COMMENTS", payload: data})
        }).catch(error => {
            dispatch({ type: "REQUEST_COMMENTS_FAILURE", payload: error.message})
        })
    }

    const postComment = comment => {
        dispatch({ type: "REQUEST_COMMENT"})
        createComment(comment).then(data => {
            dispatch({ type: "ADD_COMMENT", payload: data})
            setContent("")
        }).catch(error => {
            dispatch({ type: "REQUEST_COMMENT_FAILURE", payload: error.message})
        })
    }

    const values = { 
        comments,
        loadingComments,
        errorComments,
        loadingComment,
        errorComment,
        content,
        
        // methods
        setContent,
        getComments, 
        postComment,
    }

    return (
        <CommentsContext.Provider value={values}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider;