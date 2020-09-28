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
import Popup from '../../../../components/popup'

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
  const error = useSelector(state => state.wizard.error);

  
    
    
      const validationSchema = Yup.object({
        total_pasivos: Yup.string().required()
        
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
          validateOnChange={false}
          validateOnBlur={false}
         >
          {formik => {
              return (
            <div >
              <Form className='form' style={{flexDirection:'column'}}>
                <section className='formC' style={{width:'90%'}}>
                <FormikControl
                  control='input'
                  type='text'
                  label='Nombre del Establecimiento'
                  name='company_name'
                />
               <FormikControl
                  control='input'
                  type='text'
                  label='Actividad Economica'
                 name='actividad_economica'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Dirección'
                 name='direccion'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Barrio:'
                 name='barrio'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Ciudad:'
                 name='ciudad'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Departamento:'
                 name='departamento'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Celular:'
                 name='mobile_phone_fin'
               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Teléfono fijo:'
                 name='telefono_fijo'
               />
                <FormikControl
                  control='input'
                  type='text'
                  label='Correo Electrónico:'
                 name='email_fin'
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
                  name='ingresos'
                />
                 <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Total Activos:'
                  name='total_activos'
                />
                 <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Egresos:'
                  name='egresos'
                />
                  <FormikControl
                  control='InputPrfix'
                  type='number'
                  prfix='COP'
                  label='Total Pasivos:'
                  name='total_pasivos'
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

          {error&&<Popup reset={formik.setErrors}/>}

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
