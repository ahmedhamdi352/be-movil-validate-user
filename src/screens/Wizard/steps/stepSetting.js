import * as Yup from 'yup'

export const steps =[
    'Datos Generales',
    'Información Financiera', 
    'Términos y Condiciones', 
    'Lavado de Activos (LA/FT)',
    'Documentación De Soporte'
]

export const stepData ={
    "PERSONA JURÍDICA":{
  group1: { 
       controls:[
            {
            control:'input',
            type:'email',
            label:'Email',
            name:'email',
           },
           {
            control:'input',
            type:'email',
            label:'Email',
            name:'email',
           }
      ],
      errors:{
        email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
       },
     init:{
        email: '',
        password: ''
     },
     label:'DATOS GENERALES DEL DISTRIBUIDOR Y/O PUNTO DE VENTA'
    },
 group2:{
    controls:[
        {
        control:'input',
        type:'email',
        label:'Email',
        name:'email',
       },
       {
        control:'input',
        type:'email',
        label:'Email',
        name:'email',
       }
  ],
  errors:{
    email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
   },
 init:{
    email: '',
    password: ''
 },
  label:'DATOS GENERALES DEL DISTRIBUIDOR Y/O PUNTO DE VENTA'

 }
},
    "PERSONA NATURAL":{
        controls:[
            {
            control:'input',
            type:'email',
            label:'Email',
            name:'email',
           },
           {
            control:'input',
            type:'password',
            label:'pass',
            name:'password',
           }
    ],
    errors:{
        email: Yup.string()
        .email('Invalid email format')
        .required('Required'),
        password: Yup.string().required('Required')
    },
    init:{
        email: '',
        password: ''
    }
}
}