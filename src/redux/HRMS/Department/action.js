import { DELETE_DEPARTMENT, ADD_DEPARTMENT, UPDATE_DEPARTMENT } from "./constant";

export const deleteDepartment = (index) => {
    return{
        type: DELETE_DEPARTMENT,
        payload: index,
    }
};
   
export const addDepartment = (departmentData) => ({
    type: ADD_DEPARTMENT,
    payload: departmentData,
});

export const updateDepartment = (index, departmentData) => ({
    type: UPDATE_DEPARTMENT,
    payload: { index, departmentData },
});
