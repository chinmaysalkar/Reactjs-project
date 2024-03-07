import { DELETE_EMPLOYEE } from '../Emplyoee/constant';
import { employeelist } from '../../../common/data/employeelist';


const initialState ={
    employeeList: employeelist,
}


const employeelistReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_EMPLOYEE:
        const updatedemployeeList = state.employeeList.filter((employee, index) => index !== action.payload);
        return {
          ...state,
          employeeList: updatedemployeeList,
        };
      default:
        return state;
    }
  };

  export default employeelistReducer;