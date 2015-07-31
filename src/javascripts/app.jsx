import $ from './vendor/jquery.min'
import React from 'react';

// import Landing from './components/Landing';

export default class App extends React.Component {
  render() {
    return (
      <div className="app-wrapper">
        <h1>Gitcoders</h1>
        {this.props.children}
      </div>
    );
  }
}
