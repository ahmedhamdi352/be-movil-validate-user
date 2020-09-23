
export const SET_STEP_ONE_NATURAL='SET_STEP_ONE_NATURAL';

export const SET_STEP_TWO='SET_STEP_TWO';

export const SET_FILE_ONE='SET_FILE_ONE';
export const SET_FILE_TWO='SET_FILE_TWO';




export const setStepOneNatural = (formData) => {
    return dispatch => {
      dispatch({ type: SET_STEP_ONE_NATURAL, data: formData,});
    };
  };

  export const setSteptwo = (formData) => {
    return dispatch => {
      dispatch({ type: SET_STEP_TWO, data: formData,});
    };
  };

  export const setFileOne = (formData) => {
    return dispatch => {
      dispatch({ type: SET_FILE_ONE, data: formData,});
    };
  };

  export const setFileTwo = (formData) => {
    return dispatch => {
      dispatch({ type: SET_FILE_TWO, data: formData,});
    };
  };