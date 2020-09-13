import React from 'react'
import './App.scss'
import Header from './screens/Header/header'
import Configration from './screens/Configration/configration'
import Wizard from './screens/Wizard/wizard'
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

const App = () => { 
  return (
    <Router>
      <Header/>
       <Switch>
        <Route  path="/" exact component={Configration} />
        <Route  path="/work-flow" exact component={Wizard} />

      </Switch>
    </Router>

  )
}

export default  App;
