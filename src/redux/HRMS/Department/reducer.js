import { DELETE_DEPARTMENT } from "./constant";
import {departmentlistview} from "../../../common/data/departmentlist";

const initialState ={
    departmentList: departmentlistview,
}

const departmentReducer = (state = initialState, action) => {
    switch (action.type) {
      case DELETE_DEPARTMENT:
        const updatedDepartmentList = state.departmentList.filter((department, index) => index !== action.payload);
        return {
          ...state,
          departmentList: updatedDepartmentList,
        };
      default:
        return state;
    }
  };
export default departmentReducer;  
