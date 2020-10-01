import React, { Component } from 'react'
import { connect } from 'react-redux'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../components/form/formControl';
import './style.scss'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as WizardActions from '../../store/actions/wizard'
import Popup from '../../components/popup'


 const Info = ({history}) => {
   const dispatch=useDispatch();

  const initialValues = useSelector(state => state.wizard.info);
  const error = useSelector(state => state.wizard.error);


  console.log("init",initialValues)
    
    
      const validationSchema = Yup.object({
     
        name_info: Yup.string().required('Required')
      })
    
      const onSubmit = async values => {
        console.log('Form data', values)

        const action =  WizardActions.setinfo(values)
        dispatch(action);
        //handel send sms APi

        history.push('/valide-sms')

      }
    return (
        <div style={{marginTop:'5px'}}>
        <div className='titleAction'> 
          <p className= 'textAction'>FIRMA DEL CONTRATO</p> 
        </div>
        <div className='confirmContent'>
            <div className='back' onClick={()=>history.goBack()}>
                <KeyboardBackspaceIcon/>
            </div>

        <div className='confirmContiner'>
            <p className='confirm_bold'>
            DATOS PERSONALES DEL FIRMANTE
            </p>
            <p className='confirm_normal'>
            La información tiene que ser la misma del inicio del registro
            </p>
        </div>
        <div style={{flexGrow:1}}></div>

        </div>
        <div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          validateOnChange={false}
          validateOnBlur={false}
         >
          {formik => {
              return (
              <Form className='formConfirm'>
                  <div className='formContnent'>
                <FormikControl
                  control='input'
                  type='text'
                  label='Nombres:'
                  name='name_info'
                  width='300px'
                />
                <FormikControl
                  control='input'
                  type='text'
                  label='Apellidos'
                 name='lastname_info'
                 width='300px'

               />
               <FormikControl
                  control='input'
                  type='text'
                  label='Correo Electrónico'
                  name='email_info'
                  width='300px'

               />
                <FormikControl
                  control='input'
                  type='number'
                  label='Número Celular'
                  name='number_info'
                  width='300px'
               /> 
         
               </div>
               <Button 
                  className='btn' 
                  style={{marginTop:'6%',width:'15%'}}
                  type='submit'
                  variant="outlined" 
                //   color="#000000"
                  >
                     Continue
                </Button>
                {error&&<Popup reset={formik.setErrors}/>}

                
              </Form>
            )
          }}
        </Formik> 
        </div>

        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Info)
