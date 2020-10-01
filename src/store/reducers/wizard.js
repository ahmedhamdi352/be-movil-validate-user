
import {
  SET_STEP_ONE_NATURAL, SET_STEP_TWO, SET_FILE_ONE, SET_FILE_TWO, SET_INFO_DATA,
  SET_PHOTO, SET_PHOTO1, SET_PHOTO2, SET_ACTIVE_STEP, SET_ERROR, SET_ID_BACK, SET_ID_FRONT

} from '../actions/wizard';

const initialState = {
  error: false,
  activeStep: 3,
  step1_natural: {
    firstname: "f",
    lastname: "f",
    bemovil_id: "e",
    mobile_phone: 'f',
    personal_id: 'e',
    number: 'e',
    expedition_data: 'f',
    expedition_place: 'e',
    email: 'e',
    address: 'r',
    city: 'w',
    valley: 'e'

  },
  step1_juridica: {},
  step2: {
    company_name: '',
    actividad_economica: '',
    direccion: '',
    barrio: '',
    ciudad: '',
    departamento: '',
    mobile_phone_fin: '',
    telefono_fijo: '',
    email_fin: '',
    ingresos: '',
    total_activos: '',
    egresos: '',
    total_pasivos: ''



  },
  step3: {},
  fileone: null,
  filetwo: null,
  info: {
    name_info: '',
    email_info: '',
    lastname_info: '',
    number_info: ''
  },
  id_front: null,
  id_back: null,
  photo1: null,
  photo2: null,
  photo3: null
};

export default (state = initialState, action) => {
  console.log(action)
  switch (action.type) {
    case SET_STEP_ONE_NATURAL:
      return {
        ...state,
        step1_natural: action.data,
      };
    case SET_STEP_TWO:
      return {
        ...state,
        step2: action.data,
      };

    case SET_FILE_ONE:
      return {
        ...state,
        fileone: action.formData,
      };

    case SET_FILE_TWO:
      return {
        ...state,
        filetwo: action.formData,
      };
    case SET_INFO_DATA:
      return {
        ...state,
        info: action.data,
      };
    case SET_PHOTO:
      return {
        ...state,
        photo1: action.data,
      };
    case SET_PHOTO1:
      return {
        ...state,
        photo2: action.data,
      };

    case SET_PHOTO2:
      return {
        ...state,
        photo3: action.data,
      };
    case SET_ACTIVE_STEP:
      return {
        ...state,
        activeStep: action.data,

      };

    case SET_ERROR:
      return {
        ...state,
        error: action.data,

      };

    case SET_ID_FRONT:
      return {
        ...state,
        id_front: action.data,

      };

    case SET_ID_BACK:
      return {
        ...state,
        id_back: action.data,

      };


    default:
      return state;
  }
};


