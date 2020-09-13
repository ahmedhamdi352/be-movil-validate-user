import React from 'react'
import * as fieldControl from './controls'
import {get} from 'lodash'


function FormikControl (props) {
  const { control, ...rest } = props;
  const FiledComponent = get(fieldControl,control,fieldControl.Input);
  return <FiledComponent style={{margin:"10px"}} {...rest} />

}

export default FormikControl
