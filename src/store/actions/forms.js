
export const SET_FORM='SET_FORM';

export const setActiveItem = (formData) => {
    return dispatch => {
      dispatch({ type: SET_FORM, data: formData,});
    };
  };