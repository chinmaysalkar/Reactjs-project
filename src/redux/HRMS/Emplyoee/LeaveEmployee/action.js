import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../LeaveEmployee/constant';


export const addEmployee = (employeeData) => ({
  type: ADD_EMPLOYEE,
  payload: employeeData,
});


export const deleteEmployee = (index) => ({
  type: DELETE_EMPLOYEE,
  payload: index,
});

