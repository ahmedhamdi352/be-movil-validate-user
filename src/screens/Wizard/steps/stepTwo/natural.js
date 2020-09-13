import React, { Component } from 'react'
import { connect } from 'react-redux'
import {get, isEmpty} from 'lodash'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import FormikControl from '../../../../components/form/formControl';
import './style.scss'
export const juridica = () => {
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
              <Form className='form'>
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
                {/* <button type='submit' disabled={!formik.isValid} className='form-btn'>Login</button> */}
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

export default connect(mapStateToProps, mapDispatchToProps)(juridica)
