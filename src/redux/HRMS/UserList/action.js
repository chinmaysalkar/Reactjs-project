import {DELETE_USER} from '../UserList/constant'


export const deleteUser = (index) =>{
    return {
        type: DELETE_USER,
        payload: index,
    }
}

