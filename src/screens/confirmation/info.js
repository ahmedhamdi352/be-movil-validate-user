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



 const Info = ({history}) => {
   const dispatch=useDispatch();
   const general_info = useSelector(state=> state.wizard.step1_natural)

  const initialValues = useSelector(state => state.wizard.info);
  

  console.log("init",initialValues)
    
    
      const validationSchema = Yup.object({
        // email: Yup.string()
        //   .email('Invalid email format')
        //   .required('Required'),
        // password: Yup.string().required('Required')
      })
    
      const onSubmit = async values => {
        console.log('Form data', values)

        const action =  WizardActions.setinfo(values)
        dispatch(action);
        //handel send sms APi

    
   

         
          // let response = () => {
          //     return new Promise(function(resolve, reject) {
          //       fetch('http://192.168.56.1:8000/api/verify/', {
          //         params: {
          //             phone:general_info.mobile_phone
          //         }
          //       }).then(response => {
          //         resolve(response);
          //       });
          //     });
          //   };
          //   let responseData = await response();
          //   console.log(responseData.data);
            
        

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
