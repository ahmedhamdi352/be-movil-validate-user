import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import logger from "redux-logger";
import ActionReducer from './store/reducers/actionTypes'
import FormsReducer from './store/reducers/forms'
import {  createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const rootReducer = combineReducers({

  action:ActionReducer,
  form:FormsReducer

});
const middlewares = [logger, ReduxThunk];
const store = createStore(rootReducer, applyMiddleware(...middlewares));

const THEME = createMuiTheme({
  typography: {

   "fontFamily": `"Poppins"`,
   "fontSize": 14,
   "fontWeightLight": 300,
   "fontWeightRegular": 400,
   "fontWeightMedium": 500
  }
});
ReactDOM.render(
  <MuiThemeProvider theme={THEME}>
  <Provider store={store}>
      <App />
    </Provider>
    </MuiThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
