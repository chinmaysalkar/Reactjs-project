import { ADD_HOLIDAY, DELETE_HOLIDAY, EDIT_HOLIDAY } from "../Holiday/constant";
import holidaysData from "../../../common/data/holidaylist";

const initialState = {
  holidayList: holidaysData,
};

const holidayReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_HOLIDAY:
      const updatedHolidayList = state.holidayList.filter(
        (holiday, index) => index !== action.payload
      );
      return {
        ...state,
        holidayList: updatedHolidayList,
      };

    case ADD_HOLIDAY:
      return {
        ...state,
        holidayList: [...state.holidayList, action.payload],
      };

    case EDIT_HOLIDAY:
      const { index, holidayData } = action.payload;
      return {
        ...state,
        holidayList: state.holidayList.map((holiday, i) =>
          i === index ? { ...holiday, ...holidayData } : holiday
        ),
      };
    default:
      return state;
  }
};
export default holidayReducer;
