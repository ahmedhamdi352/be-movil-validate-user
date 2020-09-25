import React,{useState} from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import id1 from '../../assest/images/id.png'
import id2 from '../../assest/images/Bid.png'
import Button from '@material-ui/core/Button';

const ConfirmId = ({history}) => {
  const[imgF,setImagF]=useState(null)
  const[imgB,setImagB]=useState(null)

  const onFileChange = (event,option) => { 
    console.log(option)
    if(option ==="front"){
      console.log("herrrrrrr")

      setImagF(URL.createObjectURL(event.target.files[0]))
    }
    else {

      setImagB(URL.createObjectURL(event.target.files[0]))
    }
    // Update the state 
      
  };

  const handelnext=()=>{
    history.push('/take-photo')

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
        ESCANEAR CEDULA O DOCUMENTO DE IDENTIFICACIÓN
        </p>
    </div>
    <div style={{flexGrow:1}}></div>

    </div>
<div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
    <div className='ComfirmLogo' style={{marginTop:'6%',width:'65%'}}>
      <div className="id_content">
        {console.log('f',imgF,'b',imgB)}
      <img src={imgF!==null?imgF:id1} alt='img' className='id_f'/>
   
        <label for="file" className="label_test">upload</label>
        <input type="file"  id="file" onChange={(e)=>onFileChange(e,"front")}/>
      </div>
      <div className="id_content">
      <img src={imgB!==null?imgB:id2} alt='img' className='id_b'/>
      <label for="file1" className="label_test">upload</label>
        <input type="file" id="file1"  onChange={(e)=>onFileChange(e,"back")}/>
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
    </div>

   
                
    </div>
  )
}

export default ConfirmId
