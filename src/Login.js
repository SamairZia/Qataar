import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import './App.css';
import small_logo from './small_logo.png'
import SkyLight from 'react-skylight'
import Signup from './Signup'
import bglogin from './bglogin.png'

class Login extends Component{
    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
    }

    handleButton(e) {
        e.preventDefault();
        this.props.history.push('/my-account')
    }
    render(){
        var box = {
            width : "35%",
            height : "450px"
        }
        return(
            <div id="modal">
            <form className="log-in">
                {/* <div className="imgcontainer">
                    <img src={small_logo} className="login-image" alt="login"/>
                </div> */}
            <div className="temp" >
                <h1 >Log In!</h1>
                
                <input className="input_fields" type="email" placeholder="Email" required/><br /><br />

                <input className="input_fields" type="password" placeholder="Password" required/><br /><br />

                <button className="btn_login" type="submit" onClick={this.handleButton} >LOG IN!</button><br /> <br />
                {/* <button className="btn_login" type="button" >Cancel</button><br /><br /> */}

                <input type="checkbox" /> <label className="blackcolor">Remember me </label> <br/><br/>

                <label className="blackcolor">Don't have an account? </label>
                <a href={'#'} onClick = {() => this.customDialog.show()}>Signup</a>
                 {/* dialogStyles={myBigGreenDialog}  */}
                
            </div>
            </form>
            <div className="myBigGreenDialog">
                <SkyLight dialogStyles={box} hideOnOverlayClicked ref={ref => this.customDialog =ref} 
                title="Sign Up" transitionDuration={700}>
                
                <div >
                    <Signup />
                </div>
                
                </SkyLight>
                </div>
            </div>
        )
    }
}
export default withRouter(Login);