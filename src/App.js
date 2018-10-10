import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { subscribeToTimer } from './api';

class App extends Component {

  constructor(props){


    super(props);

    subscribeToTimer((err,timestamp) => this.setState({
      timestamp
    }));
    this.state = {
      timestamp: 'no timestamp' 
    }    ;

  }
  render() {
    return (
      <div className="App">
        <p className="App-intro">
        this is the timer value: {this.state.timestamp}
        </p>
      </div>
    );
  }
}

export default App;
