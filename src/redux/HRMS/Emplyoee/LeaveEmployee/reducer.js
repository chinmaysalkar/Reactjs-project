import { ADD_EMPLOYEE, DELETE_EMPLOYEE } from '../LeaveEmployee/constant';
import { leaveemployeelist } from '../../../../common/data/employeelist';

const initialState = {
  leaveemployeeList: leaveemployeelist,
};

const leaveemployeelistReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_EMPLOYEE:
      const updatedLeaveEmployeeList = state.leaveemployeeList.filter(
        (_, index) => index !== action.payload
      );
      return {
        ...state,
        leaveemployeeList: updatedLeaveEmployeeList,
      };
    case ADD_EMPLOYEE:
      return {
        ...state,
        leaveemployeeList: [...state.leaveemployeeList, action.payload],
      };
    default:
      return state;
  }
};

export default leaveemployeelistReducer;
