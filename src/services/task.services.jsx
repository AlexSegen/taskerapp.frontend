import ApiService from './api.service';
import { RequestError } from './api.service';

export const getAll = async (filter) => {

    const params =  filter ? ('&' + filter) : '';

    try {
        const response = await ApiService.get("/tasks?sort=-createdAt" + params );
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
        const response = await ApiService.get("/tasks/" + id);
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
        
        throw new Error(error.message)
    }
}

export const removeTask = async (id) => {
    try {
        const response = await ApiService.delete("/tasks/" + id);
        const data = await response.data
        return { id, ...data };
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
        
        throw new Error(error.message)
    }
}

export const updateTask = async (task) => {
    try {
        
        task.project = task.project._id;
        task.asignated = task.asignated ? task.asignated._id : null;

        const response = await ApiService.put("/tasks/" + task._id, task);
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
        
        throw new Error(error.message)
    }
}

export const toggleTask = async ({ _id }) => {
    try {
        const response = await ApiService.post("/tasks/toggle/" + _id);
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
        
        throw new Error(error.message)
    }
}

export const createTask = async (task) => {
    try {
        
        task.project = task.project._id;

        const response = await ApiService.post("/tasks", task);
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
        
        throw new Error(error.message)
    }
}