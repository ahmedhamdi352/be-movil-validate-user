import React, { useEffect } from 'react'
import Nutural from './stepfour'
import { useSelector } from 'react-redux';
import * as WizardActions from '../../../../store/actions/wizard'
import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {steps} from '../../steps/stepSetting'


const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      
    },
    button: {
      marginRight: theme.spacing(1),
      
    },
    instructions: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
  }));
const Step4 = ({userType,activeStep,handleNext,handleBack}) => {

  const classes = useStyles();
  const dispatch=useDispatch();
 
 

          return(
            <>
            {/* <Popup/> */}
            <Nutural/> 

            <div style={{marginTop:'12%'}}>
            <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:'12%'}}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                type='submit'
                onClick={handleNext}
                className={classes.button}
                size='medium'
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>

           
            </>
          )
      

}



export default Step4
