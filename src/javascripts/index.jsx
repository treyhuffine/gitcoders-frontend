import $ from './vendor/jquery.min'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './components/App';
import Login from './components/Login';

$(document).ready( () => {
  ReactDOM.render(
    <div>
      <App />
      <Login />
    </div>
    , document.getElementById("root"));
})
