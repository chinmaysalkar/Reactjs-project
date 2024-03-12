import { DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../Emplyoee/constant';

export const deleteEmployee = (index) => ({
  type: DELETE_EMPLOYEE,
  payload: index,
});

export const updateEmployee = (updatedEmployee, index) => ({
  type: UPDATE_EMPLOYEE,
  payload: updatedEmployee,
  index: index,
});
