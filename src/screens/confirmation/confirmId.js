import React,{useState} from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import id1 from '../../assest/images/id.png'
import id2 from '../../assest/images/Bid.png'
import Button from '@material-ui/core/Button';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import * as WizardActions from '../../store/actions/wizard'
import Popup from '../../components/popup'
import CameraAltIcon from '@material-ui/icons/CameraAlt';

const ConfirmId = ({history}) => {
  // const[imgF,setImagF]=useState(null)
  // const[imgB,setImagB]=useState(null)
  const dispatch=useDispatch();

  const imgF = useSelector(state => state.wizard.id_front);
  const imgB = useSelector(state => state.wizard.id_back);
  const error = useSelector(state => state.wizard.error);




  const onFileChange = (event) => { 
      dispatch(WizardActions.setIdFront(event.target.files[0]))   
  };

  const onFileChange1 = (event) =>{
    dispatch(WizardActions.setIdBack(event.target.files[0]))
  }

  const handelnext=()=>{

    

      if( imgF == null || imgB == null){
        dispatch(WizardActions.setError(true))
      }
      else {
        history.push('/take-photo')
       
      }


  }


  return (
    <div style={{marginTop:'5px'}}>
    <div className='titleAction'> 
      <p className= 'textAction'>FIRMA DEL CONTRATO</p> 
    </div>
    <div className='confirmContent'>
        <div className='back'  onClick={()=>history.goBack()}>
            <KeyboardBackspaceIcon/>
        </div>

    <div className='confirmContiner'>
        <p className='confirm_bold'>
        ESCANEAR CEDULA O DOCUMENTO DE IDENTIFICACIÓN
        </p>
    </div>
    <div style={{flexGrow:1}}></div>

    </div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <div className='ComfirmLogo' style={{marginTop:'6%',width:'65%'}}>
      <div className="id_content">
        {console.log('f',imgF,'b',imgB)}


      <img src={imgF!==null?URL.createObjectURL(imgF):id1} alt='img' className='id_f'/>
      <label for="file" className="label_test"
         style={{display:'flex',
         justifyContent:'center',
         justifyItems:'center',
         color:'#b4b3b3',
         width: '200px',
         }}>
          <CameraAltIcon style={{color:'#b4b3b3',marginRight:'5px'}}/>
          Abrir Camara
          </label>
        <input type="file"  id="file" onChange={(e)=>onFileChange(e)}/>
   
        {/* <label for="file" className="label_test">upload</label>
        <input type="file"  id="file" onChange={(e)=>onFileChange(e,"front")}/> */}
      </div>
      <div className="id_content">
      <img src={imgB!==null?URL.createObjectURL(imgB):id2} alt='img' className='id_b'/>

      <label for="file1" className="label_test"
         style={{display:'flex',
         justifyContent:'center',
         justifyItems:'center',
         color:'#b4b3b3',
         width: '200px',
         }}>
          <CameraAltIcon style={{color:'#b4b3b3',marginRight:'5px'}}/>
          Abrir Camara
          </label>
        <input type="file"  id="file1" onChange={(e)=>onFileChange1(e)}/>
   
      {/* <label for="file1" className="label_test">upload</label>
        <input type="file" id="file1"  onChange={(e)=>onFileChange(e,"back")}/> */}
      </div>
    </div>
    <Button 
       className='btn' 
        style={{marginTop:'6%',width:'15%'}}
        type='submit'
         variant="outlined" 
        onClick={handelnext}
        >
         Continue
       </Button>
       {error&&<Popup />}

    </div>

   
                
    </div>
  )
}

export default ConfirmId
