import React, { Component } from 'react'
import { connect } from 'react-redux'
import ReactCodeInput from 'react-verification-code-input';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';

 const ValidateNumber = ({history}) => {
    const [number,setNumber]=React.useState('');

    const handelComplete = (event) =>{
        console.log(event)
        setNumber(event)

    }
    const handelClick =()=>{
        //check number
        history.push('/take-id')


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
        <div className='vaildate'>
            <ReactCodeInput  onComplete={(e)=>handelComplete(e)}/>
        <Button 
                  className='btn' 
                  style={{marginTop:'6%',width:'15%'}}
                  type='submit'
                  variant="outlined" 
                  onClick={handelClick}
              
                  >
                     Continue
        </Button>
        </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(ValidateNumber)
