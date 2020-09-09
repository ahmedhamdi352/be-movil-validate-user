import React, { Component } from 'react'
import './style.scss';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export class Configration extends Component {
    constructor (props){
        super(props)
        this.state={
            Registro:false,
            Actualización:false
        }
    }
     handleChange = (event) => {
         if(event.target.name=="Registro"){
             this.setState({ Registro:true,Actualización:false });
        }
        if(event.target.name == "Actualización"){
            this.setState({ Registro:false,Actualización:true });
        }
      };
    render() {
        return (
        <div className='Textcontainer'>
            <div className='Textcontent'>
              <p className='title'>PROCESO COMERCIAL</p>
               <p className='text'>REGISTRO Y ACTUALIZACIÓN DE DISTRIBUIDORES Y/O PUNTOS DE VENTA 
                COMO CORRESPONSALES BANCARIOS - BE MOVIL S.A.S</p>
            </div>
            <div className='user'>
                <p className='user_text'>Deseo realizar :</p>
                <div className="action">
                    <div style={this.state.Registro?{color:'#eb062a',display:"flex"}:{display:"flex"}}>
                      <Checkbox checked={this.state.Registro} onChange={(e)=>this.handleChange(e)} name="Registro" />
                      <p>Registro</p>
                   </div>

                <div className='border'></div>
                  <div style={this.state.Actualización?{color:'#eb062a',display:"flex"}:{display:"flex"}} >
                      <Checkbox checked={this.state.Actualización} onChange={(e)=>this.handleChange(e)} name="Actualización" />
                      <p>Actualización</p>
                   </div>
                </div>

            </div>

            <div className='user'>
                <p className='user_text'>Me identifico como :</p>
            

            </div>
        </div>
        )
    }
}



export default Configration
