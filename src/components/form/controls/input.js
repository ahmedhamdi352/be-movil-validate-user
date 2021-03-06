import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import TextField from '@material-ui/core/TextField';
import './style.scss'
export const Input = (props) => {
  const { label, name, type, ...rest } = props;
  return (
    <div className='form-control'>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field name={name}>
             {({field }) => (
               <div>
                 <TextField type="text"
                  id={name} name={name} 
                   {...rest}
                   {...field}
                   variant="outlined"
                   label={label}
                   type={type}
                   size="small"
                   InputLabelProps={{ style: { fontFamily: "Poppins"  } }}
                   />
               </div>
             )}
           </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

 
