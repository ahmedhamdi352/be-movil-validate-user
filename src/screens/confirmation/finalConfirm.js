// import React, { useState } from "react";
// import { BlobProvider,pdf } from "@react-pdf/renderer";
// // import { API_KEY } from "./constants";
// import { handel,PdfDocument } from "./test";

// export default function MovieList() {



//   return (
//     <div className="container">
     
//          <BlobProvider document={<PdfDocument/>}>
//          {({ blob, url, loading, error }) => {
//              // Do whatever you need with blob here
//              {console.log(blob)}
//          return <a href={url} target="_balck">link</a>
//          }}
//        </BlobProvider>


  
//     </div>
//   );
// }

import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import KeyboardBackspaceIcon from '@material-ui/icons/KeyboardBackspace';
import logo1 from '../../assest/images/Group5216.png'
import logo2 from '../../assest/images/Group5032.png'
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';

 const FinalConfirm =({history})=>  {

    
    const [checked,setChecked]=React.useState(false)
        return (
     <div style={{marginTop:'5px',display:'flex',flexDirection:'column'}}>
            <div className='titleAction'> 
              <p className= 'textAction'>FIRMA DEL CONTRATO</p> 
            </div>
            <div className='confirmContent'>
                <div className='back' onClick={()=>history.goBack()}>
                    <KeyboardBackspaceIcon/>
                </div>
    
            <div className='confirmContiner'>
                <p className='confirm_bold'>
                FIRMA DEL REGISTRO
                </p>
                
            </div>
            <div style={{flexGrow:1}}></div>
            </div>

        <div className='ComfirmLogo'>
           <img className='logo_confirm' src={logo1} alt='logo1'/>
           <img  src={logo2} alt='logo2'/>
        </div>

        <div className='continerTextConfirm'>
            <p className='TextConfirm'>
            El DISTRIBUIDOR o PUNTO DE VENTA declara y acepta que el diligenciamiento del presente formato o aceptación como corresponsal no genera un vínculo directo con BE MOVIL, toda vez que El DISTRIBUIDOR o PUNTO DE VENTA seguirá conservando su posición y nivel de jerarquía dentro de la red, reconociendo en todos los casos las jerarquías de nivel superior a las que pertenece, así como las condiciones comerciales pactadas por ellas. 
            </p>
        </div>

        <div className='form'>
      <section className='confirm' style={{width:'70%'}}>
      <Checkbox checked={checked} onChange={()=>setChecked(!checked)} name="check" />
      <p className='textCollapse'>Confirmo que he leído y estoy de acuerdo</p>
       </section>
      </div>

             <Button 
                  className='btn' 
                  style={{marginTop:'6%',width:'15%'}}
                  type='submit'
                  variant="outlined" 
                  onClick={()=>{history.push('/share')}}
                  >
                     Firmar
                </Button>


    </div>
        )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(FinalConfirm)

