import React, { useEffect,useState } from 'react'
import Nutural from './stepfour'
import { useSelector } from 'react-redux';
import * as WizardActions from '../../../../store/actions/wizard'
import { useDispatch } from 'react-redux';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {steps} from '../../steps/stepSetting'
import {isEmpty} from 'lodash'

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
  const fileOneData = useSelector(state => state.wizard.fileone);
  const fileTwoData = useSelector(state => state.wizard.filetwo);

  const [avalible,setAvilable]=useState(true)
  if( fileTwoData.name !== undefined){
    console.log("tetetet")
  }
  
  useEffect(() => {
    
    const fetch= async ()=>{
      
      if( fileOneData.name !== undefined && fileTwoData.name !== undefined){
        setAvilable(false)
        console.log(avalible)
      }
      else {
        setAvilable(true)
        console.log(avalible)
      }

}


fetch();
   
 }, [fileOneData,fileTwoData]);

  const classes = useStyles();
 
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
                disabled={false}
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
