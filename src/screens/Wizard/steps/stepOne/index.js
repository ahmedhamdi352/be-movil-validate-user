import React, { useEffect } from 'react'
import Nutural from './natural'
import Juridica from './juridica'
import { useDispatch } from 'react-redux';
import * as ActionTypes from '../../../../store/actions/actionType'
import Popup from '../../../../components/popup'
 const Step1 = ({userType,next}) => {
  const dispatch = useDispatch();

 
 
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
            <Nutural/>  
            </>
          )
      }

}



export default Step1
