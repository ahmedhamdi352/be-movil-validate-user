import React,{useEffect} from 'react'
import * as wizardActions from '../../../store/actions/wizard';
import { useDispatch } from 'react-redux';

const TextError = (props)=> {
  const dispatch= useDispatch();
  useEffect(() => {

    const setError= async ()=>{

     const action =  wizardActions.setError(true);
   
     try {
      await dispatch(action);
    }
     catch (err) {
       console.log(err)
     
    }
 }
 
 
 setError();
     
   }, []);
  return <></>
}

export default TextError

