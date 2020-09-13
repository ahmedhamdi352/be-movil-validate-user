import React, { Component } from 'react'
import Nutural from './natural'
import Juridica from './juridica'
 const Step2 = ({userType,next}) => {

      if (userType==="PERSONA JURÍDICA"){
          return(
            <Juridica/>

          )
      }
      else {
          return(
            <Nutural/>
              
          )
      }

}



export default Step2
