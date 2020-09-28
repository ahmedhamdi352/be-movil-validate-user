import React,{useState} from 'react'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import PhotoOne from './photoOne'
import PhotoTwo from './photoTwo'
import PhotoThree from './phtoThree'
import ShowPhotos from './show'
import { useSelector } from 'react-redux';
import { set } from 'lodash';

 const Photo = ({history}) => {
     const [photoNumber,setPhotoNumber]=useState(1);
     const img1 = useSelector(state=> state.wizard.photo1)
     const img2 = useSelector(state=> state.wizard.photo2)
     const img3 = useSelector(state=> state.wizard.photo3)

     const handelnext = ()=>{
         setPhotoNumber(photoNumber + 1)
     }

     const handelPhoto = ()=>{
         if(photoNumber==1){
             return(
             <PhotoOne next ={handelnext}/>
             )
         }
          if (photoNumber==2){
             return(
                
                   <PhotoTwo next ={handelnext}/>
                
             )
         }
         if(photoNumber == 3) {
             return (
                <PhotoThree next ={handelnext}/>

             )
         }
         if(photoNumber == 4 ){
             return(

                 <ShowPhotos history={history}/>
             )
         }
     }

     const handelTypePhoto = ()=>{
        if(photoNumber==1){
            return(
            <p className='photoType'> Rostro lado derecho</p>
            )
        }
         if (photoNumber ===2){
             console.log("dffge")
            if(img2 == null){
                console.log("dffge")


                return(
                    <p className='photoType'>Rostro lado izquierdo</p>
    
                )
            }
            else{
                return(
                    <p className='photoType'>Rostro lado derecho</p>
    
                )
            }
        }
        if (photoNumber ===3){
            if(img3 == null){

                return(
                    <p className='photoType'>Rostro de frente sonriendo</p>
    
                )
            }
            else{
                return(
                    <p className='photoType'>Rostro lado derecho</p>
    
                )
            }
        }

     }
     const handelback = ()=>{
         if(photoNumber==1){
             history.push('/take-id')
         }
         else{
             setPhotoNumber(photoNumber - 1)
         }
     }
     
    return (
        <div style={{marginTop:'5px'}}>
        <div className='titleAction'> 
          <p className= 'textAction'>SOPORTE FOTOGRÁFICO</p> 
        </div>
        <div className='confirmContent'>
            <div className='back' onClick={handelback}>
                <KeyboardBackspaceIcon/>
            </div>
    
        <div className='confirmContiner'>
            {
                photoNumber === 4 ? <p className='confirm_bold'>TOMAR SEILFIE </p>
            :
            <p className='confirm_bold'>{photoNumber}/3 TOMAR  SEILFIE</p>

            }
            {handelTypePhoto()}
         
        </div>
        <div style={{flexGrow:1}}></div>
    
        </div>
    <div style={{display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column'}}>
        {handelPhoto()}
    </div>
        </div>
    )
}

export default Photo;
