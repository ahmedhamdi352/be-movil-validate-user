import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ReactCodeInput from 'react-verification-code-input';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import {API_URL} from '../../config';
import axios from 'axios';
import { useSelector } from 'react-redux';

 const ValidateNumber = ({history}) => {

    
    const [number,setNumber]=React.useState('');
    const [serverNumber,setServerNumber]=React.useState(null);
    const general_info = useSelector(state=> state.wizard.step1_natural)


    useEffect(() => {

        
    //  fetch();
         
       }, []);  

    const handelComplete = (event) =>{
        console.log(event)
        setNumber(event)

    }
    const handelClick =()=>{
        //check number
        history.push('/final')


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
