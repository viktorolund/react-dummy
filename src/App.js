import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as shoppableVideoActions from "./actions/shoppableVideoActions";

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { shoppablevideos } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {JSON.stringify(shoppablevideos)}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    shoppablevideos: state.shoppableVideoReducer.shoppablevideos
  };
}

export default connect(mapStateToProps)(App);
