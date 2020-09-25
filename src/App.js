import React from 'react'
import './App.scss'
import Header from './screens/Header/header'
import Configration from './screens/Configration/configration'
import Wizard from './screens/Wizard/wizard'
import Info from './screens/confirmation/info'
import ValidateNumber from './screens/confirmation/validateNumber'
import ValidateID from './screens/confirmation/confirmId'
import FinalConfirm from './screens/confirmation/finalConfirm'
import Share from './screens/confirmation/share'
import ConfirmPhoto from './screens/confirmation/confirmPhoto'


import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

const App = () => { 
  return (
    <Router>
      <Header/>
       <Switch>
        <Route  path="/" exact component={Configration} />
        <Route  path="/work-flow" exact component={Wizard} />
        <Route  path="/info" exact component={Info} />
        <Route  path="/valide-sms" exact component={ValidateNumber} />
        <Route  path="/take-id" exact component={ValidateID} />
        <Route  path="/final" exact component={FinalConfirm} />
        <Route  path="/share" exact component={Share} />
        <Route  path="/take-photo" exact component={ConfirmPhoto} />






      </Switch>
    </Router>

  )
}

export default  App;
