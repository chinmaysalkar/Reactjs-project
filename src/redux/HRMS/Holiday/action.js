import {DELETE_HOLIDAY} from '../Holiday/constant'

export const deleteHoliday = (index) => ({
    type: DELETE_HOLIDAY,
    payload: index
})