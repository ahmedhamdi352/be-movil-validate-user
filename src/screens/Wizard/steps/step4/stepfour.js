import axios from 'axios'; 

import React,{Component} from 'react'; 
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';
import {connect} from 'react-redux'
import {SET_FILE_ONE,SET_FILE_TWO} from '../../../../store/actions/wizard'


class App extends Component { 

	// state = { 

	// // Initially, no file is selected 
    // selectedFile: null,
    // selectedFile1:null
	// }; 
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
	// Update the state 
    this.setState({ selectedFile: event.target.files[0]});
    this.props.setFileOne(event.target.files[0])
	
    };
    onFile1Change =event =>{
        console.log(event.target.files[0])
        this.setState({ selectedFile1: event.target.files[0]})
        this.props.setFileTwo(event.target.files[0])

    } 


	
	fileData = () => { 
        const {fileDataTwo,fileDataOne}=this.props
        fileDataOne !==null && console.log(URL.createObjectURL(fileDataOne))

		return ( 
		<div className='filenames'> 
        {fileDataOne !==null && <a href= {URL.createObjectURL(fileDataOne)}target="_balck"></a>}
        {fileDataOne !==null && <p> {URL.createObjectURL(fileDataOne)}</p> }

        {fileDataTwo !==null && <p> {fileDataTwo.name}</p> }
			
		</div> 
		); 
	
	}; 
	
	render() { 
        const {fileDataTwo,fileDataOne}=this.props

	
	return ( 
	<div> 
          <div className='titleAction'> 
            <p className= 'textAction' style={{marginBottom:0}}> DOCUMENTACIÓN DE SOPORTE *DOCUMENTOS OBLIGATORIOS</p> 
          </div>		
    
                <div className='containers'>
                <div className='uoload_content'>
                    
                <input type="file" id="file" onChange={this.onFileChange} />
                      <label for="file" style={fileDataOne?{borderWidth:'2px',borderColor:'#eb062a'}:null}>
                      <p className='text_bold'>CAMARA DE COMERCIO*</p>
                      <LocalMallIcon/>
                      <p className='text_normal'>Certificado de Existencia y Representación Legal con vigencia no superior a 60 días </p>
                    </label>

                <input type="file" id="file1" onChange={this.onFile1Change} />
                    <label for="file1" style={fileDataTwo?{borderWidth:'2px',borderColor:'#eb062a'}:null}>
                     <p className='text_bold'>RUT*</p>
                     <LocalMallIcon/>
                     <p className='text_normal'>registro único tributario actualizado en la Dian </p>
                    </label>

                </div>
            
            </div>
		{this.fileData()} 

        
		</div> 
	); 
	} 
} 
const dispatchToProps = (dispatch) => ({
    setFileOne:(formData)=>{
      dispatch({
          type:SET_FILE_ONE,
          formData
      })
  },
  setFileTwo:(formData)=>{
    dispatch({
        type:SET_FILE_TWO,
        formData
    })
},
  
});

const mapStateToProps = state => ({ 
    fileDataOne: state.wizard.fileone,
    fileDataTwo: state.wizard.filetwo


})


  
  export default connect(mapStateToProps, dispatchToProps)(App);
