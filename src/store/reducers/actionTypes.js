import { SET_POPUP, SET_USER_TYPE } from '../actions/actionType';

const initialState = {
    popup:false,
    actionType:''
 
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_POPUP:
      return {
        ...state,
        popup: action.popup,
      };

     
      
    default:
      return state;
  }
};
