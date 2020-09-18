import React from 'react'
import * as fieldControl from './controls'
import {get} from 'lodash'


function FormikControl (props) {
  const { control,width, ...rest } = props;
  const FiledComponent = get(fieldControl,control,fieldControl.Input);
  return <FiledComponent style={{margin:"10px",width:width}} {...rest} />

}

export default FormikControl
