import React, { useEffect } from 'react'
import Nutural from './natural'
import Juridica from './juridica'
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../../../../store/actions/actionType'
import Popup from '../../../../components/popup'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {steps} from '../../steps/stepSetting'




const Step1 = ({userType,activeStep,handleNext,handleBack}) => {

  console.log(userType)

 
 
      if (userType==="PERSONA JURÍDICA"){
          return(
            <>
            <Popup/>
            <Juridica/>
            </>
          )
      }
      else {
          return(
            <>
            {/* <Popup/> */}
            <Nutural handleBack={handleBack} handleNext={handleNext} activeStep={activeStep}/>  

           
            </>
          )
      }

}



export default Step1
