import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import "@babel/polyfill";
import { maintainSession } from './Components/utils/common'



maintainSession()
ReactDOM.render(<App />, document.getElementById('app'));