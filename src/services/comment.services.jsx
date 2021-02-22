import ApiService from './api.service';
import { RequestError } from './api.service';

export const getAll = async () => {
    try {
        const response = await ApiService.get("/comments?sort=-createdAt");
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)

    }
}

export const getAllByArticle = async (articleId) => {
    try {
        const response = await ApiService.get(`/comments/article/${articleId}`);
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)
    }
}

export const getSingle = async (id) => {
    try {
        const response = await ApiService.get("/comments/" + id);
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)
    }
}

export const removeComment = async (id) => {
    try {
        const response = await ApiService.delete("/comments/" + id);
        const data = await response.data
        return { id, ...data };
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)
    }
}

export const updateComment = async (comment) => {
    try {
        const response = await ApiService.put("/comments/" + comment._id, { content: comment.content });
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)
    }
}

export const createComment = async ({content, articleId}) => {
    try {
        
        const response = await ApiService.post("/comments", {content, articleId});
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)
    }
}