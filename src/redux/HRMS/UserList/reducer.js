import { DELETE_USER } from "./constant";
import { userList } from "../../../common/data/userdata";

const initialState = {
    userList: userList, 
  };


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_USER:
            const updatedUserList = state.userList.filter((user, index)=> index !== action.payload);
            return {
              ...state,
                userList: updatedUserList
            }
        default:
            return state;
    }
}

export default userReducer;