import { DELETE_DEPARTMENT, UPDATE_DEPARTMENT, ADD_DEPARTMENT } from "./constant";
import { departmentlistview } from "../../../common/data/departmentlist";

const initialState = {
  departmentList: departmentlistview,
};

const departmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_DEPARTMENT:
      const updatedDepartmentList = state.departmentList.filter(
        (department, index) => index !== action.payload
      );
      return {
        ...state,
        departmentList: updatedDepartmentList,
      };
    case UPDATE_DEPARTMENT:
      const { index, updatedDepartment } = action.payload;
      const updatedList = state.departmentList.map((department, i) =>
        i === index ? updatedDepartment : department
      );
      return {
        ...state,
        departmentList: updatedList,
      };
    case ADD_DEPARTMENT:
      return {
        ...state,
        departmentList: [...state.departmentList, action.payload],
      };
    default:
      return state;
  }
};

export default departmentReducer;
