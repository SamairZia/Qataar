import React, { Component } from 'react';
import {BrowserRouter as Router , Route, history, Link , Redirect } from 'react-router-dom'
import hashHistory from 'hash-history'
import Logo from './Logo.png';
import small_logo from './small_logo.png'
import './App.css';
import MainClass from './MainClass'
import Mainsidebar from './dashboard/Mainsidebar'
import Sidebar from './dashboard/Sidebar'
import CompanyInformation from './dashboard/aftersignup/CompanyInformation'
import Services from './dashboard/aftersignup/Services'
import Account from './dashboard/Account'


function AuthenticatedRoute({component : Component , authenticated, ...rest}){
  return(
    <Route 
    {...rest}
    render={(props) => authenticated === true 
    ? <Component {...props} {...rest} /> 
  : <Redirect to ="/log-in" /> }
    />
  )
}

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
        <div>
        <Route path="/" component= {MainClass}/>
        {/* <AuthenticatedRoute exact path="/my-account"
        authenticated={this.state.authenticated} component={Account} /> */}
        </div>
      </Router>

      //   {/* /* {
        //   (this.props.location.pathname === "/") ?
        //   <CompanyInformation /> : (this.props.location.pathname === "/services") ?
        //   <Services /> : <MainClass />
        // } */ */     
    );
  }
}

//prop stuff
App.defaultProps = {
  myprop: "i am my prop",
  you: "i am you"
}

export default App;
