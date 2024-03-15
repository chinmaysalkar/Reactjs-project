import { ADD_CLIENT, DELETE_CLIENT } from "./constant";

export const deleteClientlist = (index) => ({
  type: DELETE_CLIENT,
  payload: index,
});

export const AddClient = (clientData) => ({
  type: ADD_CLIENT,
  payload: clientData,
});
