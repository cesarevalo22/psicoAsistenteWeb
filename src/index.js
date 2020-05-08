import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';

import App from './App';


const container = document.getElementById("app");
ReactDOM.render(
<React.StrictMode>
<App />
</React.StrictMode>, container);