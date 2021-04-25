import ApiService from './api.service';

export const getAll = async () => {

    try {
        const response = await ApiService.get("/admin/users/public?sort=+first_name");
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
    
}

export const getOne = async (Id) => {

    try {
        const response = await ApiService.get("/admin/users/public/" + Id);
        const data = await response.data
        return data;
        
    } catch (error) {
        throw new Error(error)
    }
    
}