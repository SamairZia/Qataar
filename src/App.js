import React, { Component } from 'react';
import {BrowserRouter as Router , Route, history } from 'react-router-dom'
import hashHistory from 'hash-history'
import logo from './logo.svg';
import Logo from './Logo.png';
import small_logo from './small_logo.png'
import './App.css';
import MainClass from './MainClass'

class App extends Component {

  //State stuff
   constructor(props){
     super(props);

    this.state = {
      my: "i am my",
      you: "i am you"
    }
  }
  render() {
    return (
      <Router>
        <Route path="/" component= {MainClass}/>
      </Router>
      // <div className="App">
      //   <div class="topnav" id="myTopnav">
      //     <a href="Signup.js" target="_blank">Sign Up</a>
      //     <a href="#login">Log In</a>
      //     <a href="#contact">Contact Us</a>
      //     <a href="#about">About Us</a>
      //     <a href="#home">Home</a>
      //   </div>
      //   <header className="App-header">
      //     <img src={Logo} className="App-logo" alt="logo" />
      //     <h1 className="App-title"></h1>
      //   </header> 
      //   {/* <p className="App-intro">
      //     To get started, edit <code>src/App.js</code> and save to reload.
      //   </p> */}
      //   <p><b>Hello from team Qataar!</b></p>
      //   {/* <p>{this.props.myprop}</p> */}
      //   <menu></menu>
      // </div>
     // <Signup />
    );
  }
}

//prop stuff
App.defaultProps = {
  myprop: "i am my prop",
  you: "i am you"
}

export default App;
