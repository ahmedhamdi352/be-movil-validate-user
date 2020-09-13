import {  SET_FORM, } from '../actions/forms';

const initialState = {
  step1:{}
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
      case SET_FORM:
        return {
          ...state,
          step1: action.data,
        };
      
    default:
      return state;
  }
};
