import {DELETE_PROJECTLIST, TOGGLE_CARD_COLLAPSE, TOGGLE_DROPDOWN} from '../ProjectOnGoing/constant'

export const deleteProjectlist =(index) => ({
    type: DELETE_PROJECTLIST,
    payload: index
})

export const toggleCardCollapse = (index) => ({
    type: TOGGLE_CARD_COLLAPSE,
    payload: index
  });
  
  export const toggleDropdown = (index) => ({
    type: TOGGLE_DROPDOWN,
    payload: index
  });