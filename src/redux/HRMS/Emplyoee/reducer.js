import { DELETE_EMPLOYEE, UPDATE_EMPLOYEE } from '../Emplyoee/constant';
import { employeelist } from '../../../common/data/employeelist';

const initialState = {
  employeeList: employeelist,
};

const employeelistReducer = (state = initialState, action) => {
  switch (action.type) {
    
    case DELETE_EMPLOYEE:
      const updatedEmployeeList = state.employeeList.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        employeeList: updatedEmployeeList,
      };

    case UPDATE_EMPLOYEE:
      const updatedList = state.employeeList.map((employee) => {
        if (employee.id === action.payload.id) {
          return action.payload;
        }
        return employee;
      });
      return {
        ...state,
        employeeList: updatedList,
      };

    default:
      return state;
  }
};

export default employeelistReducer;
