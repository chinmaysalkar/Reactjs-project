import { ADD_EMPLOYEE, DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../Emplyoee/constant';


export const addEmployee = (employeeData) => ({
  type: ADD_EMPLOYEE,
  payload: employeeData,
});


export const deleteEmployee = (index) => ({
  type: DELETE_EMPLOYEE,
  payload: index,
});

export const updateEmployee = (updatedEmployee, index) => ({
  type: UPDATE_EMPLOYEE,
  payload: updatedEmployee,
  index: index,
});
