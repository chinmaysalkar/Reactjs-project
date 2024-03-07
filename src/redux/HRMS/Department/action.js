import { DELETE_DEPARTMENT } from "./constant";

export const deleteDepartment = (index) => {
    return{
        type: DELETE_DEPARTMENT,
        payload: index,
    }
}
    
