import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {steps} from './steps/stepSetting'
import './style.scss'
import Step1 from './steps/stepOne'
import Step2 from './steps/stepTwo'
import Step3 from './steps/step3'
import Step4 from './steps/step4/index'
import { useSelector } from 'react-redux';
import * as WizardActions from '../../store/actions/wizard'
import { useDispatch } from 'react-redux';
// import Step1 from './steps/step1';
const useQontoStepIconStyles = makeStyles({
  root: {
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    

  },
  active: {
    color: '#784af4',
  },
  circle: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    backgroundColor: 'currentColor',
  },
  completed: {
    color: '#784af4',
    zIndex: 1,
    fontSize: 18,
  },
  
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? <Check className={classes.completed} /> : <div className={classes.circle} />}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

const ColorlibConnector = withStyles({
    
  alternativeLabel: {
    top: 22,
  },
  active: {
    '& $line': {
        backgroundColor:'#eb062a',
    },
  },
  completed: {
    '& $line': {
        backgroundColor:'#2cd19e',
    },
  },
  line: {
    height: 3,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
  },
})(StepConnector);

const useColorlibStepIconStyles = makeStyles({
  root: {
    backgroundColor: '#fff',
    zIndex: 1,
    color: '#8b8b8b',
    width: 40,
    height: 40,
    display: 'flex',
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  active: {
    backgroundColor:'#eb062a',
    color:'#fff',
    // boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
  },
  completed: {
    color:'#fff',
    backgroundColor:'#2cd19e',
  },
});

function ColorlibStepIcon(props) {
  const classes = useColorlibStepIconStyles();
  const { active, completed } = props;
  


  const icons = {
    1: <>1</>,
    2: <>2</>,
    3: <>3</>,
    4:<>4</>,
    5:<>5</>
  };

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
        [classes.completed]: completed,
      })}
    >
      {icons[String(props.icon)]}
    </div>
  );
}

ColorlibStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
  /**
   * The label displayed in the step icon.
   */
  icon: PropTypes.node,
};

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



function getStepContent(userType,step ,handleBack,handleNext) {
  switch (step) {
    case 0:
      return <Step1  userType={userType} handleBack={handleBack} handleNext={handleNext} activeStep={step}/> ;
    case 1:
      return <Step2  userType={userType} handleBack={handleBack} handleNext={handleNext} activeStep={step}/>;
    case 2:
      return <Step3  userType={userType} handleBack={handleBack} handleNext={handleNext} activeStep={step}/>;
      case 3:
        return <Step4 userType={userType} handleBack={handleBack} handleNext={handleNext} activeStep={step}/>;
    default:
      return 'Unknown step';
  }
}

export default function CustomizedSteppers({history}) {
  const dispatch=useDispatch();
  const  activeStep= useSelector(state=> state.wizard.activeStep)

  const classes = useStyles();
  // const [activeStep, setActiveStep] = React.useState(0);
  const actionType = localStorage.getItem('action')
  const userType =  localStorage.getItem('userType');

  const handleNext = () => {
    if(activeStep==3){
      history.push('/info')

    }
    else{

      dispatch(WizardActions.setActiveStep(activeStep + 1))
    }
    // setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    dispatch(WizardActions.setActiveStep(activeStep - 1))
  };


  return (
    <div className={classes.root} style={{marginTop:'6px'}}>
        <div className='titleAction'> 
          <p className= 'textAction'> {`${userType} > ${actionType}`}</p> 
        </div>

        
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}
      style={{boxShadow:'0 3px 6px 0 rgba(0, 0, 0, 0.16)'}}
      >
        {steps.map((label) => (
          <Step key={label} style={{paddingLeft:0,paddingRight:0}}>
            <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
  
      <div>

          <div>
            <Typography className={classes.instructions}>{getStepContent(userType,activeStep, handleBack, handleNext,)}</Typography>
            {/* <div style={{display:"flex",justifyContent:'center',alignItems:'center',marginTop:'6%'}}>
              <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                Back
              </Button>
              <Button
                variant="contained"
                color="secondary"
                onClick={handleNext}
                className={classes.button}
                size='medium'
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div> */}
          </div>
     
      </div>
    </div>
  );
}
