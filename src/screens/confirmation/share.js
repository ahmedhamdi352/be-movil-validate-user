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

import React from 'react'
import { connect } from 'react-redux'
import logo1 from '../../assest/images/Group5216.png'
import logo2 from '../../assest/images/Group5032.png'
import Button from '@material-ui/core/Button';
import DoneIcon from '@material-ui/icons/Done';
import ReplyIcon from '@material-ui/icons/Reply';
import PrintIcon from '@material-ui/icons/Print';
import { BlobProvider,pdf } from "@react-pdf/renderer";
import { handel,Quixote } from "./test";
import { useSelector } from 'react-redux';
import { map } from 'lodash';

 const Share =()=>  {
  
    const [checked,setChecked]=React.useState(false)
    const general_info = useSelector(state=> state.wizard.step1_natural)
    const step2 = useSelector(state=> state.wizard.step2)
    const fileOne = useSelector(state=> state.wizard.fileone)
    const fileTwo = useSelector(state=> state.wizard.filetwo)
    const info = useSelector(state=> state.wizard.info)
    const photo1 = useSelector(state=> state.wizard.photo1)
    const photo2 = useSelector(state=> state.wizard.photo2)
    const photo3 = useSelector(state=> state.wizard.photo3)

    const PdfData={
      step1:general_info,
      step2:step2,
      fileone:fileOne,
      fileTwo:fileTwo,
      info:info,
      photo1:photo1,
      photo2:photo2,
      photo3:photo3
    }

    console.log(PdfData)


    return (
     <div style={{marginTop:'5px',display:'flex',flexDirection:'column'}}>
            <div className='titleAction'> 
              <p className= 'textAction'>FIRMA DEL CONTRATO</p> 
            </div>
            <div className='confirmContent'>
                
            <div className='confirmContiner'>
                <p className='confirm_bold'>
                REGISTRO SATISFACTORIO
                </p>
                
            </div>
            </div>

        <div className='ComfirmLogo'>
           <img className='logo_confirm' src={logo1} alt='logo1'/>
           <img  src={logo2} alt='logo2'/>
        </div>

        <div className='circleDev'>
            <div>

           <DoneIcon fontSize='large' style={{ fontSize: '75px',color:'#ffff'}}/>
            </div>
        </div>

        <div className="btn_continer">
       

        
                  <BlobProvider document={<Quixote data={PdfData}/>}>
         {({ blob, url, loading, error }) => {
           console.log(url)
         return      <a  href={"google.com"} target="_balck"
                  style={{width:'180px',padding: '8px',marginRight:'20px'}}
                  className='btn_print'
                  type='submit'
                  variant="outlined" 
                //   color="#000000"
                  >
                      <PrintIcon/>
                     <p className='text_print'>Imprimir</p>
                </a>
         }}
       </BlobProvider>

                <Button 
                className='test'
                  style={{width:'180px',padding: '8px',marginLeft:'20px'}}
                  type='submit'
                  variant="outlined" 
                //   color="#000000"
                  >
                    <ReplyIcon/>
                    <p className='text_share'>Compartir</p>
                </Button>
        </div>



    </div>
        )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Share)

