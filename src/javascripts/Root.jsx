import $ from './vendor/jquery.min'
import React from 'react';

import { Router, Route, Link} from 'react-router';
import { history } from 'react-router/lib/HashHistory';

import App from './App.jsx'
import Landing from './components/Landing';
import ProfilePage from './components/ProfilePage'

export default class Root extends React.Component {
  render() {
    return (
      <Router history={history}>
        <Route name="landing" path="/" component={App}>
          <Route name="profile" path="/git/:login" component={ProfilePage} />
        </Route>
      </Router>
    );
  }
}
