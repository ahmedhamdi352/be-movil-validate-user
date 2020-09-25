import React,{useState} from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import * as WizardActions from '../../store/actions/wizard'
import { useSelector } from 'react-redux';
import {isEmpty} from 'lodash'
import { useDispatch } from 'react-redux';

const ConfirmId = ({history}) => {
    const disptch=useDispatch()
//   const[img1,setImag1]=useState(null)
//   const[img2,setImag2]=useState(null)
//   const[img3,setImag3]=useState(null)


  const img1 = useSelector(state=> state.wizard.photo1)
  console.log(img1)
  const img2 = useSelector(state=> state.wizard.photo2)
  const img3 = useSelector(state=> state.wizard.photo3)

  

  const onFileChange = (event,option) => { 
    console.log(option)
    if(option ==="front"){
      console.log("herrrrrrr")

     disptch(WizardActions.setphoto(event.target.files[0]))
      
    }
    if(option === 'second') {

      WizardActions.setphoto1(event.target.files[0])

    }
    if(option ==='third') {
        // setImag3(URL.createObjectURL(event.target.files[0]))
        WizardActions.setphoto2(event.target.files[0])

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

      <div className="id_content" style={{margin:'25px'}}>
        {
            img1 ==null?
        <div className='photoContent'>

            <div className='photo'>
                

            </div>
        </div>
        :<img src={URL.createObjectURL(img1)}/>
        }
      {/* <img src={imgF!==null?imgF:id1} alt='img' className='id_f'/> */}
   
        <label for="file" className="label_test">upload</label>
        <input type="file"  id="file" onChange={(e)=>onFileChange(e,"front")}/>
      </div>
      <div className="id_content" style={{margin:'25px'}} >
      <div className='photoContent'>

<div className='photo'>
    

</div>
</div>
      <label for="file1" className="label_test">upload</label>
        <input type="file" id="file1"  onChange={(e)=>onFileChange(e,"second")}/>
      </div>
      <div className="id_content" style={{margin:'25px'}}>
        <div className='photoContent'>

            <div className='photo'>
                

            </div>
        </div>
   
        <label for="file" className="label_test">upload</label>
        <input type="file"  id="file" onChange={(e)=>onFileChange(e,"third")}/>
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
