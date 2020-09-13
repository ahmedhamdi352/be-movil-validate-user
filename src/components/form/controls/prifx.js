import React from 'react'
import { Field, ErrorMessage } from 'formik'
import TextError from './TextError'
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
      width:222
    },
    
  });
export const InputPrfix = (props) => {
    const classes = useStyles();
  const { label, name, type,prfix, ...rest } = props;
  return (
    <div className='form-control'>
      {/* <label htmlFor={name}>{label}</label> */}
      <Field name={name}>
             {({field }) => (
             
                 <TextField type="text"
                  id={name} name={name} 
                   {...rest}
                   {...field}
                   variant="outlined"
                   label={label}
                   type={type}
                   size="small"
                   classes={{
                    root: classes.root, // class name, e.g. `classes-nesting-root-x`
                  }}
                   InputProps={{
                   startAdornment: <InputAdornment position="start">{prfix}</InputAdornment>,
                  }}
                   />
             )}
           </Field>
      <ErrorMessage component={TextError} name={name} />
    </div>
  )
}

 
