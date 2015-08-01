import React from 'react';
import API from '../API';
var Router = require('react-router');
// console.log(Router);

export default class AuthSession extends React.Component {
  // let userToken = this.props.params.auth_token;
  // static willTransitionTo(transition) {
  //   console.log("LOLOL");
  //   console.log(this.props.params.auth_token);
  //   // transition.
  //   // requestData(this.props);
  // }
  // componentWillMount() {
  //   console.log(this.props.params.auth_token);
  //   Router.Navigation.transitionTo('http://localhost:8080');
  // }
  render() {
    // const { user, params } = this.props;
    // const login = parseLogin(params);
    console.log("IN AUTH");
    return (
      <div className="login-container">
        <h1>Auth page</h1>
      </div>
    );
  }
}
