import React, { Component } from 'react'
import './style.scss';
import Checkbox from '@material-ui/core/Checkbox';
import LocalMallIcon from '@material-ui/icons/LocalMall';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import {SET_ACTION,SET_USER_TYPE} from '../../store/actions/actionType'
import {SET_FORM} from '../../store/actions/forms'
import {connect} from 'react-redux'

export class Configration extends Component {
    constructor (props){
        super(props)
        this.state={
            Registro:false,
            Actualización:false,
            clickone:false,
            clicktwo:false
        }
    }
    componentDidMount(){
        this.props.setForm({})
    }

     handleChange = (event) => {
         if(event.target.name=="Registro"){
             this.setState({ Registro:true,Actualización:false, });
        }
        if(event.target.name == "Actualización"){
            this.setState({ Registro:false,Actualización:true, });
        }
        localStorage.setItem("action",event.target.name)

      };
      handelclick =(type)=>{
          if(type=="type1"){
              this.setState({...this.state,clickone:true,clicktwo:false})
              localStorage.setItem("userType",'PERSONA JURÍDICA')

            }
            if(type=="type2"){
                this.setState({...this.state,clickone:false,clicktwo:true})
                localStorage.setItem("userType",'PERSONA NATURAL')

          }

      }
      handelRoute =()=>{
          this.props.history.push('/work-flow')
      }
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
                <div className='action_content'>
                    <div className={!this.state.clicktwo?"action_type":"action_type_active"} style={{marginRight:'10px'}} onClick={()=>this.handelclick("type2")}>
                        <p className={!this.state.clicktwo?"text_bold":"text_bold_active"}>PERSONA NATURAL</p>
                        <PersonIcon fontSize="large" color={this.state.clicktwo?"secondary":"inherit"}/>
                        <p className="text_normal">DATOS GENERALES DEL DISTRIBUIDOR Y/O PUNTO DE VENTA</p>
                    </div>
                    <div className={!this.state.clickone?"action_type":"action_type_active"} onClick={()=>this.handelclick("type1")}>
                        <p className={!this.state.clickone?"text_bold":"text_bold_active"}>PERSONA JURÍDICA</p>
                        <LocalMallIcon fontSize="large" color={this.state.clickone?"secondary":"inherit"} />
                        <p className="text_normal">DATOS GENERALES DEL DISTRIBUIDOR Y/O PUNTO DE VENTA</p>
                    </div>
                    
                </div>
                <Button 
                  className='btn' 
                  style={{marginTop:'30px'}}
                  variant="outlined" 
                //   color="#000000"
                  onClick={()=>this.handelRoute()}
                  >
                     Continue
                </Button>
            

            </div>
        </div>
        )
    }
}

const dispatchToProps = (dispatch) => ({


setForm:(data)=>{
    dispatch({
        type:SET_FORM,
        data
    })
},
  
});
  
  export default connect(null, dispatchToProps)(Configration);

