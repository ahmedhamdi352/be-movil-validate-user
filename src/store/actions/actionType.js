
export const SET_POPUP ='SET_POPUP';
export const SET_USER_TYPE='SET_USER_TYPE';


export const setPopup = (popup) => {
  return dispatch => {
    dispatch({ type: SET_POPUP, popup:popup });
  };
};

export const setUser = (user) => {
  return dispatch => {
    dispatch({ type: SET_USER_TYPE, user: user,});
  };
};


