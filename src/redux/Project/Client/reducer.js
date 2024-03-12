import {DELETE_CLIENT} from './constant';
import {clientdata} from '../../../common/data/Project/clientlist';

const initialState = {
    clientList: clientdata,
};
const clientReducer= (state = initialState, action) =>{
    switch (action.type) {
        case DELETE_CLIENT:
            const updatedClientList = state.clientList.filter((client, index)=> index!== action.payload);
            return {
              ...state,
                clientList: updatedClientList,
            }
        default:
            return state;
    }
};

export default clientReducer;


    