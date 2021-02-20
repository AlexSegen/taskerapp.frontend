import ApiService from './api.service';

export const getAll = async () => {

    try {
        const response = await ApiService.get("/admin/users/public");
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
    
}