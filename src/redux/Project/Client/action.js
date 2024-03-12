import {DELETE_CLIENT} from './constant'

export  const deleteClientlist = (index) =>(
    {
        type: DELETE_CLIENT,
        payload: index,
    }
)


