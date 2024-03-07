import { DELETE_EMPLOYEE } from "../Emplyoee/constant";

export const deleteEmployee =(index)=>{
    return {
        type: DELETE_EMPLOYEE,
        payload: index,
    }
}
