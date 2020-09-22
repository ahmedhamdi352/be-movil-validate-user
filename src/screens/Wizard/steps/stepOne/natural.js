import React, { Component } from 'react'
import { connect } from 'react-redux'
import {get, isEmpty} from 'lodash'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../../../components/form/formControl';
import './style.scss'
import { useSelector } from 'react-redux';
import * as WizardActions from '../../../../store/actions/wizard'
import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {steps} from '../../steps/stepSetting'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
  button: {
    marginRight: theme.spacing(1),
    
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));


export const Natural = ({activeStep,handleBack,handleNext}) => {
  const classes = useStyles();
  const dispatch=useDispatch();

  const initialValues = useSelector(state => state.wizard.step1_natural);
  console.log(initialValues)

  
    
    
      const validationSchema = Yup.object({
        
      })
    
      const onSubmit = values => {
        console.log('Form data', values)
        const action =  WizardActions.setStepOneNatural(values)
        dispatch(action);
        handleNext()
      }
    
    return (
        <div className='LogContainer'>
          <div className='titleAction'> 
            <p className= 'textAction' style={{marginBottom:0}}> DATOS GENERALES DEL DISTRIBUIDOR Y/O PUNTO DE VENTA</p> 
          </div>
         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
         >
          {formik => {
              return (
                 <div className='formContent'>
              <Form className='form'>
                  <div className='form'>
                <FormikControl
                  control='input'
                  type='text'
                  label='Nombres:'
                  name='firstname'
                />
               <FormikControl
                  control='input'
                  type='text'
                  label='Apellidos:'
                 name='lastname'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='ID Be Movil:'
                 name='bemovil_id'
               />
                <FormikControl
                  control='input'
                  type='number'
                  label='Celular:'
                 name='mobile_phone'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Tipo de Identificación:'
                 name='personal_id'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Número:'
                 name='number'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Lugar de Expedición:'
                 name='expedition_place'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Fecha de Expedición:'
                 name='expedition_data'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Correo Electrónico:'
                 name='email'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Dirección de Domicilio:'
                 name='address'
               />
                  <FormikControl
                  control='input'
                  type='text'
                  label='Ciudad:'
                 name='city'
               />
                  <FormikControl
                  control='input'
                  type='text'
                  label='Departamento:'
                 name='valley'
               />
               </div>

               <div style={{marginTop:'12%'}}>
            <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:'12%'}}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type='submit'
                // onClick={handleNext}
                className={classes.button}
                size='medium'
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
                
              </Form>
               </div>
            )
          }}
        </Formik> 
        </div>
    )
    
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Natural)
