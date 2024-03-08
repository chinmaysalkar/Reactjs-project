import {ADD_HOLIDAY, DELETE_HOLIDAY} from '../Holiday/constant'

export const deleteHoliday = (index) => ({
    type: DELETE_HOLIDAY,
    payload: index
})


export const addHoliday = (index) => ({
    type: ADD_HOLIDAY,
    payload: index
})