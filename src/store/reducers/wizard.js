import {  SET_STEP_ONE_NATURAL,SET_STEP_TWO,SET_FILE_ONE } from '../actions/wizard';

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
  step4:{
      fileone:{},
      filetwo:{}
  }
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
            console.log({...state.step4.filetwo})
            console.log(action.formData)
            return {
             ...state,
             step4: {...state.step4,...action.formData},
            };
      
    default:
      return state;
  }
};
