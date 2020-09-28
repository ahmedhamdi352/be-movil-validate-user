import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import ReactCodeInput from 'react-verification-code-input';
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import { useSelector } from 'react-redux';
import './style.scss'
 const ShowPhotos = ({history}) => {

    const img1 = useSelector(state=> state.wizard.photo1)
    const img2 = useSelector(state=> state.wizard.photo2)
    const img3 = useSelector(state=> state.wizard.photo3)

 

    const handelClick =()=>{
        //check number
        history.push('/final')
    }
    return (
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>

        <div className= 'showContainer'>
            <div className='showContent'>
                <p className='showText'>Rostro lado derecho</p>
                <img src={URL.createObjectURL(img1)} style={{width:'300px',height:'350px'}}/>
            </div>
            <div className='showContent'>
                <p className='showText'>Rostro lado derecho</p>
                <img src={URL.createObjectURL(img2)} style={{width:'300px',height:'350px'}}/>
            </div>
            <div className='showContent'>
                <p className='showText'>Rostro lado derecho</p>
                <img src={URL.createObjectURL(img3)} style={{width:'300px',height:'350px'}}/>
            </div>
        
        </div>
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

       
    )
}



export default ShowPhotos
