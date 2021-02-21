import ApiService from './api.service';

export const getAll = async () => {

    try {
        const response = await ApiService.get("/tasks?sort=-createdAt");
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
    
}

export const getSingle = async (id) => {
    try {
        const response = await ApiService.get("/tasks/" + id);
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
}

export const removeTask = async (id) => {
    try {
        const response = await ApiService.delete("/tasks/" + id);
        const data = await response.data
        return { id, ...data };
        
    } catch (error) {
        throw new Error(error)
    }
}

export const updateTask = async (task) => {
    try {
        console.log('task', task)
        task.project = task.project._id;
        task.asignated = task.asignated ? task.asignated._id : null;

        console.log(task)

        const response = await ApiService.put("/tasks/" + task._id, task);
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
}

export const toggleTask = async ({ _id }) => {
    try {
        const response = await ApiService.post("/tasks/toggle/" + _id);
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
}

export const createTask = async (task) => {
    try {
        
        task.project = task.project.id;

        const response = await ApiService.post("/tasks", task);
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
}