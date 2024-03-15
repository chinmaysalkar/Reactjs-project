import { ADD_TICKET_LIST, DELETE_TICKET_LIST, UPDATE_TICKET_LIST } from './constant';

const initialState = {
    ticketList: [] 
};

const ticketReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TICKET_LIST:
            return {
                ...state,
                ticketList: [...state.ticketList, action.payload]
            };
        case DELETE_TICKET_LIST:
            return {
                ...state,
                ticketList: state.ticketList.filter((_, index) => index !== action.payload)
            };
        case UPDATE_TICKET_LIST:
            const { index, newData } = action.payload;
            const updatedTicketList = [...state.ticketList];
            updatedTicketList[index] = newData;
            return {
                ...state,
                ticketList: updatedTicketList
            };
        default:
            return state;
    }
};

export default ticketReducer;
