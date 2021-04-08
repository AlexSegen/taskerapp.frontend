import React, { createContext, useState, useReducer } from 'react';

import { getAllByArticle as getAll, createComment, updateComment, removeComment, hitLikeComment } from '../services/comment.services';

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

    const [editMode, setEditMode] = useState(false);

    const getComments = (articleId) => {
        dispatch({ type: "SET_COMMENTS", payload: []})
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

    
    const editComment = comment => {
        updateComment(comment).then(data => {
            setEditMode(false);
            dispatch({ type: "UPDATE_COMMENT", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_COMMENT_FAILURE", payload: error.message })
        })
    }

    const deleteComment = id => {
        removeComment(id).then(() => {
            dispatch({ type: "DELETE_COMMENT", payload: id})
        }).catch(error => {
            dispatch({ type: "REQUEST_COMMENT_FAILURE", payload: error.message})
        })
    }

    const likeComment = id => {
        dispatch({ type: "REQUEST_COMMENT"})
        hitLikeComment(id).then(data => {
            dispatch({ type: "UPDATE_COMMENT", payload: data })
        }).catch(error => {
            dispatch({ type: "REQUEST_COMMENT_FAILURE", payload: error.message })
        });
    }

    const values = { 
        comments,
        loadingComments,
        errorComments,
        loadingComment,
        errorComment,
        content,
        editMode,
        
        // methods
        setContent,
        getComments, 
        postComment,
        editComment,
        deleteComment,
        setEditMode,
        likeComment
    }

    return (
        <CommentsContext.Provider value={values}>
            {children}
        </CommentsContext.Provider>
    )
}

export default CommentsContextProvider;