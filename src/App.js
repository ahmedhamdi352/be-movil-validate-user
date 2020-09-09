import React from 'react'
import './App.scss'
import Header from './screens/Header/header'
import Configration from './screens/Configration/configration'
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";

const App = () => { 
  return (
    <Router>
      <Header/>
       <Switch>
        <Route  path="/" exact component={Configration} />
      </Switch>
    </Router>

  )
}

export default  App;
