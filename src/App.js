import React, { Component } from 'react';
import logo from './logo.svg';
import styled from 'styled-components';
import './App.css';
import Button from './components/Button';



class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React, Timothy.</h1>
        </header>
        <p className="App-intro">
          Hello world. <Button color='blue'> Save (the world) </Button> <Button> Don't save (the world) </Button>
        </p>
      </div>
    );
  }
}

export default App;
