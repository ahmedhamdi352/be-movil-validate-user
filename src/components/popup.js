import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import logo1 from '../assest/images/Group5216.png'
import logo2 from '../assest/images/Group5032.png'
import ReportProblemIcon from '@material-ui/icons/ReportProblem';
import * as wizardActions from '../store/actions/wizard'
import { useDispatch } from 'react-redux';

import './style.scss'
const  AlertDialog =({reset})=> {
  const dispatch =useDispatch()
const [open, setOpen] = React.useState(false);

    React.useEffect(() => {
     setOpen(true);
         
       }, []);

    

  const handleClose = () => {
    dispatch(wizardActions.setError(false))
    if(reset){

      reset({})
    }
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent className='popup'>
        <div className='containerimg'>
           <img className='img1' src={logo1} alt='logo1'/>
           <img className='img2' src={logo2} alt='logo2'/>
        </div>
        <ReportProblemIcon style={{ fontSize: 70, color:"red" }}/>
        <p className='popuptitle'>recuerda tener escaneados Rut y Camara de comercio para finalizar el proceso de manera exitosa.</p>
        </DialogContent>
        <DialogActions style={{justifyContent:'center'}}>
        
          <Button onClick={handleClose} color="primary" autoFocus>
          Continue
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  AlertDialog;
