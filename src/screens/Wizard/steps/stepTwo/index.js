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

export const Step2 = ({userType,activeStep,handleNext,handleBack}) => {
  const classes = useStyles();
  const dispatch=useDispatch();

  const initialValues = useSelector(state => state.wizard.step2);
  console.log(initialValues)
  
    
    
      const validationSchema = Yup.object({
        
      })
    
      const onSubmit = values => {
        console.log('Form data', values)
        const action =  WizardActions.setSteptwo(values)
        dispatch(action);
        handleNext()

 
      }
    
    return (
        <div className='LogContainer'>
          <div className='titleAction'> 
            <p className= 'textAction' style={{marginBottom:0}}> NFORMACIÓN FINANCIERA</p> 
            <p className= 'texthandeltitle'>(último año de los estados financieros)</p>
          </div>
         <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
         >
          {formik => {
              return (
            <div >
              <Form className='form' style={{flexDirection:'column'}}>
                <section className='formC' style={{width:'90%'}}>
                <FormikControl
                  control='input'
                  type='text'
                  label='Nombres:'
                  name='Nombres:'
                />
               <FormikControl
                  control='input'
                  type='text'
                  label='Apellidos'
                 name='Apellidos'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='ID Be Movil'
                 name='ID'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Celular'
                 name='Celular'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Tipo de Identificación:'
                 name='Tipo'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Número'
                 name='Número:'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Lugar de Expedición'
                 name='Lugar'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Fecha de Expedición:'
                 name='Fecha'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Correo Electrónico:'
                 name='Correo'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Dirección de Domicilio:'
                 name='Dirección'
               />
                  <FormikControl
                  control='input'
                  type='text'
                  label='Ciudad'
                 name='Ciudad'
               />
                  <FormikControl
                  control='input'
                  type='text'
                  label='Departamento '
                 name='Departamento'
               />
               </section>
               <section style={{width:'100%'}}>
               <div className='titleAction' style={{marginTop:'10px'}} > 
                <p className= 'textAction' style={{marginBottom:0}}> NFORMACIÓN FINANCIERA</p> 
                <p className= 'texthandeltitle'>(último año de los estados financieros)</p>
             </div>
               </section>
               <section className='formC'>
                <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Ingresos:'
                  name='Ingresos'
                />
                 <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Total Activos:'
                  name='Total'
                />
                 <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Egresos:'
                  name='Egresos'
                />
                  <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Total Pasivos:'
                  name='Pasivos'
                />
               </section>
               <section>
                {/* <button type='submit' disabled={!formik.isValid} className='form-btn'>Login</button> */}
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
          </section>


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

export default connect(mapStateToProps, mapDispatchToProps)(Step2)
