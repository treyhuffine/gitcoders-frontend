import React from 'react';
import API from '../API';


export default class AuthSession extends React.Component {
  componentWillMount() {
    console.log(this.props.params.auth_token);
    // requestData(this.props);
  }
  render() {
    // const { user, params } = this.props;
    // const login = parseLogin(params);
    return (
      <div className="login-container">
        <h1>Auth page</h1>
      </div>
    );
  }
}
