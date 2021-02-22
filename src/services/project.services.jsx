import ApiService from './api.service';
import { RequestError } from './api.service';

export const getAll = async () => {

    try {
        const response = await ApiService.get("/projects?sort=+title");
        const data = await response.data
        return data;
        
    } catch (error) {
        if (error.response) 
            throw new RequestError(error.response.status, error.response.data.message, error.response.data)
    
        throw new Error(error.message)
    }
    
}