import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
// import './App.css';
import Signup from './Signup'
import {firebaseApp} from './firebase'

class Login extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

    onEmailChange(event){
        this.setState({
            email: event.target.value
        })
    }

    onPasswordChange(event){
        this.setState({
            password: event.target.value
        })
    }

    onLogin(){
        const dbRef = firebaseApp.database().ref("/");
        let user = {
            email : this.state.email,
            password : this.state.password,
        }
        firebaseApp.auth().signInWithEmailAndPassword(user.email , user.password)
        // .then((success) => {
        //     dbRef.child('user/' + success.uid).once('value')
            .then((success) => {
                this.props.history.push('/my-account')
            // })
        })
        .catch((error) => {
            let errorCode = error.code;
            if(this.state.email === '' || this.state.password === ''){
                alert('Please enter both email and password.')
            }
            else if (errorCode === 'auth/wrong-password'){
                alert('Wrong password')
            }
            else {
                console.log(errorCode , this.state.email , this.state.password)
                alert(errorCode , 'No user data of this credentials.')
            }
        })
    }

    // handleButton(e) {
    //     e.preventDefault();
    //     this.props.history.push('/my-account')
    // }

    handleLink(e) {
        e.preventDefault();
        this.props.history.push('/sign-up')
    }

    render(){
        return(
            <div id="modal">
            {/* we are not using <form> tag because it causes problem in authentication with firebase */}
            {/* <form className="log-in"> */}
            <div className="log-in" >
            <div className="temp" >
                <h1 >Log In!</h1>
                
                <input className="input_fields" type="email" placeholder="Email" value={this.state.email} onChange={this.onEmailChange} required/><br /><br />

                <input className="input_fields" type="password" placeholder="Password" value={this.state.password} onChange={this.onPasswordChange} required/><br /><br />

                <button className="btn_login" onClick={this.onLogin} >LOG IN!</button><br /> <br />
                {/* <button className="btn_login" type="button" >Cancel</button><br /><br /> */}

                <input type="checkbox" /> <label className="blackcolor">Remember me </label> <br/><br/>

                <label className="blackcolor">Don't have an account? </label>
                <a href={'#'} onClick = {this.handleLink}>Signup</a>
                 {/* dialogStyles={myBigGreenDialog} () => this.customDialog.show() */}
                
            </div>
            </div>
            {/* </form> */}
            {/* <div className="myBigGreenDialog">
                <SkyLight dialogStyles={box} hideOnOverlayClicked ref={ref => this.customDialog =ref} 
                title="Sign Up" transitionDuration={700}>
                </div> */}
            </div>
        )
    }
}
export default withRouter(Login);