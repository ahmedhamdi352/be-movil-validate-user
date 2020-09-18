import React, { Component } from 'react'
import { connect } from 'react-redux'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../components/form/formControl';
import './style.scss'
 const Info = ({history}) => {

    const initialValues = {
        email: '',
        password: ''
      }
    
    
      const validationSchema = Yup.object({
        // email: Yup.string()
        //   .email('Invalid email format')
        //   .required('Required'),
        // password: Yup.string().required('Required')
      })
    
      const onSubmit = values => {
        console.log('Form data', values)
        //handel send sms APi

        history.push('/valide-sms')

      }
    return (
        <div style={{marginTop:'5px'}}>
        <div className='titleAction'> 
          <p className= 'textAction'>FIRMA DEL CONTRATO</p> 
        </div>
        <div className='confirmContent'>
            <div className='back'>
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
         >
          {formik => {
              return (
              <Form className='formConfirm'>
                  <div className='formContnent'>
                <FormikControl
                  control='input'
                  type='text'
                  label='Nombres:'
                  name='Nombres:'
                  width='300px'
                />
               <FormikControl
                  control='input'
                  type='text'
                  label='Apellidos'
                 name='Apellidos'
                 width='300px'

               />
               <FormikControl
                  control='input'
                  type='text'
                  label='ID Be Movil'
                 name='ID'
                 width='300px'

               />
                <FormikControl
                  control='input'
                  type='text'
                  label='ID Be Movil'
                 name='ID'
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
