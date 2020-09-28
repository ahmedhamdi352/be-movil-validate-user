import React,{useState} from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import Button from '@material-ui/core/Button';
import * as WizardActions from '../../../store/actions/wizard'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import {isEmpty} from 'lodash'
import CameraAltIcon from '@material-ui/icons/CameraAlt';


const ConfirmId = ({next}) => {
    const disptch=useDispatch()
//   const[img1,setImag1]=useState(null)
//   const[img2,setImag2]=useState(null)
//   const[img3,setImag3]=useState(null)


  const img1 = useSelector(state=> state.wizard.photo2)
//   const img2 = useSelector(state=> state.wizard.photo2)
//   const img3 = useSelector(state=> state.wizard.photo3)

  

  const onFileChange = (event) => { 

     disptch(WizardActions.setphoto1(event.target.files[0]))

  };




  return (
    <>
    <div className='ComfirmLogo' style={{width:'65%'}}>

      <div className="id_content" style={{margin:'25px'}}>
        {
            img1 ==null?
        <div className='photoContent'>

            <div className='photo'>
                

            </div>
        </div>
        :<img src={URL.createObjectURL(img1)} style={{width:'300px',height:'350px'}}/>
        }

        {
           img1 ==null?
           <>
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

           </>
          
           :<dev style={{ display:'flex',justifyContent:'center', alignItems:'center'}}>
           <label for="file" className="label_test"
            style={{display:'flex',
            justifyContent:'center',
            alignItems:'center',
            color:'#b4b3b3',
            width: '200px',
            marginRight: '15px'
            }}>
             Tomar Nueva Foto
             </label>
           <input type="file"  id="file" onChange={(e)=>onFileChange(e)}/>
           <Button 
                  className='btn' 
                  style={{marginTop:'6%',width:'15%',fontFamily: "Poppins",fontWeight:500,borderRadius:'4px',marginTop:'5%',backgroundColor:'red',
                width:'200px',color:'#ffff',marginLeft:'15px'
                }}
               variant="outlined" 
               onClick={()=>next()}
                  >
                     Foto Correcta
                </Button>
   
            </dev>

        }
       
      </div>
  
    </div>
   
    </>
  )
}

export default ConfirmId
