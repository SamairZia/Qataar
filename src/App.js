import React, { Component } from 'react';
import {BrowserRouter as Router , Route, history, Link , } from 'react-router-dom'
import hashHistory from 'hash-history'
import Logo from './Logo.png';
import small_logo from './small_logo.png'
import './App.css';
import MainClass from './MainClass'
import Mainsidebar from './dashboard/Mainsidebar'
import Sidebar from './dashboard/Sidebar'
import CompanyInformation from './dashboard/aftersignup/CompanyInformation'
import Services from './dashboard/aftersignup/Services'

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
      // <Router>
      //   <CompanyInformation />
      //   </Router>
      // <div>
      // <Router>

      //   {/* /* /* <Route path="/" component={CompanyInformation} /> */ */ */}
      //   <CompanyInformation />
      //   {/* /* {
        //   (this.props.location.pathname === "/") ?
        //   <CompanyInformation /> : (this.props.location.pathname === "/services") ?
        //   <Services /> : <MainClass />
        // } */ */
      
      // </Router>
      /* // <Services /> */
      /* </div> */
      <Router>
        <Route path="/" component= {MainClass}/>
        {/* <Sidebar /> */}
        {/* <Route path="/" component= {Mainsidebar}/> */}
      </Router>
    );
  }
}

//prop stuff
App.defaultProps = {
  myprop: "i am my prop",
  you: "i am you"
}

export default App;
