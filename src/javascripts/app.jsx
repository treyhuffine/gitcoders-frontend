import $ from './vendor/jquery.min'
import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import Login from './components/Login';

class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <Login />
      </div>
    );
  }
}

$(document).ready( () => {
  ReactDOM.render(<App />, document.getElementById("root"));
})
