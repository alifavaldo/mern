import React, { Component } from 'react';
import Header from 'parts/Header';
import App from 'App';

export default class LandingPage extends Component {
  render() {
    return (
      <>
        <Header {...this.props}></Header>
      </>
    );
  }
}
