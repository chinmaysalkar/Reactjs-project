import {ADD_TICKET_LIST, DELETE_TICKET_LIST, UPDATE_TICKET_LIST} from './constant';


export const addTicketList = (index) =>({
    type : ADD_TICKET_LIST,
    payload : index
});


export const deleteTicketList = (index) =>({
    type: DELETE_TICKET_LIST,
    payload: index,
});

export const updateTicketList = (index, newData) => ({
    type: UPDATE_TICKET_LIST,
    payload: { index, newData }
});

