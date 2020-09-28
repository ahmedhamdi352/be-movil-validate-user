
export const SET_STEP_ONE_NATURAL='SET_STEP_ONE_NATURAL';

export const SET_STEP_TWO='SET_STEP_TWO';

export const SET_FILE_ONE='SET_FILE_ONE';
export const SET_FILE_TWO='SET_FILE_TWO';
export const SET_INFO_DATA='SET_INFO_DATA';
export const SET_PHOTO='SET_PHOTO';
export const SET_PHOTO1='SET_PHOTO1';
export const SET_PHOTO2='SET_PHOTO2';
export const SET_ACTIVE_STEP='SET_ACTIVE_STEP'
export const SET_ERROR= 'SET_ERROR'
export const SET_ID_FRONT='SET_ID_FRONT'
export const SET_ID_BACK= 'SET_ID_BACK'

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

  export const setinfo = (formData) => {
    return dispatch => {
      dispatch({ type: SET_INFO_DATA, data: formData,});
    };
  };

  export const setphoto = (formData) => {
    return dispatch => {
      dispatch({ type: SET_PHOTO, data: formData,});
    };
  };

  export const setphoto1 = (formData) => {
    return dispatch => {
      dispatch({ type: SET_PHOTO1, data: formData,});
    };
  };

  export const setphoto2 = (formData) => {
    return dispatch => {
      dispatch({ type: SET_PHOTO2, data: formData,});
    };
  };

  export const setActiveStep = (formData) => {
    return dispatch => {
      dispatch({ type: SET_ACTIVE_STEP, data: formData,});
    };

    
  };

  export const setError = (formData) => {
    return dispatch => {
      dispatch({ type: SET_ERROR, data: formData});
    };
  };

  export const setIdFront = (formData) => {
    return dispatch => {
      dispatch({ type: SET_ID_FRONT, data: formData});
    };
  };

  export const setIdBack = (formData) => {
    return dispatch => {
      dispatch({ type: SET_ID_BACK, data: formData});
    };
  };