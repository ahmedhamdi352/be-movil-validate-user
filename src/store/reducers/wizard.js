
import {  SET_STEP_ONE_NATURAL,SET_STEP_TWO,SET_FILE_ONE,SET_FILE_TWO,SET_INFO_DATA,
    SET_PHOTO,SET_PHOTO1,SET_PHOTO2

} from '../actions/wizard';

const initialState = {
  step1_natural:{
      firstname:"",
      lastname:"",
      bemovil_id:"",
      mobile_phone:'',
      personal_id:'',
      number:'',
      expedition_data:'',
      expedition_place:'',
      email:'',
      address:'',
      city:'',
      valley:''

  },
  step1_juridica:{},
  step2:{
      company_name:'',
      actividad_economica :'',
      direccion :'',
      barrio :'',
      ciudad :'',
      departamento :'',
      mobile_phone_fin:'',
      telefono_fijo :'',
      email_fin:'',
      ingresos :'',
      total_activos :'',
      egresos :'',
      total_pasivos :''



  },
  step3:{},
  fileone:{},
  filetwo:{},
  info:{
    name_info :'',
    email_info :'',
    lastname_info :'',
    number_info:''
  },
  photo1:null,
  photo2:{},
  photo3:{}
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
      
    default:
      return state;
  }
};


