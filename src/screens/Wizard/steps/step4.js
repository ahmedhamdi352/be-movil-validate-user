import axios from 'axios'; 

import React,{Component} from 'react'; 
import LocalMallIcon from '@material-ui/icons/LocalMall';
import Button from '@material-ui/core/Button';

class App extends Component { 

	state = { 

	// Initially, no file is selected 
    selectedFile: null,
    selectedFile1:null
	}; 
	
	// On file select (from the pop up) 
	onFileChange = event => { 
	
	// Update the state 
	this.setState({ selectedFile: event.target.files[0] }); 
	
    };
    onFile1Change =event =>{
        console.log(event.target.files[0])
        this.setState({ selectedFile1: event.target.files[0]})
    } 
	
	fileData = () => { 
	

		
		return ( 
		<div className='filenames'> 
		{this.state.selectedFile &&	<p> {this.state.selectedFile.name}</p> }
        {this.state.selectedFile1 && <p> {this.state.selectedFile1.name}</p> }
			
		</div> 
		); 
	
	}; 
	
	render() { 
	
	return ( 
	<div> 
          <div className='titleAction'> 
            <p className= 'textAction' style={{marginBottom:0}}> DOCUMENTACIÓN DE SOPORTE *DOCUMENTOS OBLIGATORIOS</p> 
          </div>		
    
                <div className='containers'>
                <div className='uoload_content'>
                    
                <input type="file" id="file" onChange={this.onFileChange} />
                      <label for="file" style={this.state.selectedFile?{borderWidth:'2px',borderColor:'#eb062a'}:null}>
                      <p className='text_bold'>CAMARA DE COMERCIO*</p>
                      <LocalMallIcon/>
                      <p className='text_normal'>Certificado de Existencia y Representación Legal con vigencia no superior a 60 días </p>
                    </label>

                <input type="file" id="file1" onChange={this.onFile1Change} />
                    <label for="file1" style={this.state.selectedFile1?{borderWidth:'2px',borderColor:'#eb062a'}:null}>
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

export default App; 
