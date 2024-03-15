import { ADD_HOLIDAY, DELETE_HOLIDAY, EDIT_HOLIDAY } from '../Holiday/constant';

export const deleteHoliday = (index) => ({
    type: DELETE_HOLIDAY,
    payload: index
});

export const addHoliday = (holidayData) => ({
    type: ADD_HOLIDAY,
    payload: holidayData
});

export const editHoliday = (index, holidayData) => ({
    type: EDIT_HOLIDAY,
    payload: { index, holidayData },
});
