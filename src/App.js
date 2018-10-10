import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import socketIOClient from 'socket.io-client';

class App extends Component {

  constructor(){


    super();

    this.state = {
      response: false,
      endpoint: "http://127.0.0.1:4001/"
    };

  }

  componentDidMount(){

    const { endpoint } = this.state;
    const socket = socketIOClient(endpoint);
    socket.on("FromAP",data=>this.setState({response:data}));
    console.log(this.state.endpoint);
    console.log(this.state.response);



  }
  render() {
    const {response} = this.state;

    return (

      <div style={{ textAlign: "center" }}>
        {response
          ? <p>
              The temperature in Florence is: {response} °F
            </p>
          : <p>Loading...</p>
        }
      </div>
    );
  }
}

export default App;
