import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './App.css';
import SkyLight from 'react-skylight'
import Terms from './Terms'
import {firebaseApp} from './firebase'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
            name : '',
            company : '',
            email :'',
            password : '',
            number : '',
            error: ''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onNumberChange = this.onNumberChange.bind(this);
        this.onSignup = this.onSignup.bind(this);
    }

    // Input fields onChange listeners
    onNameChange(event){
        this.setState({
            name: event.target.value
        })
    }

    onCompanyChange(event){
        this.setState({
            company: event.target.value
        })
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

    onNumberChange(event){
        this.setState({
            number: event.target.value
        })
    }

    onSignup(){
        const dbRef = firebaseApp.database().ref("/");
        let user = {
            name : this.state.name,
            company : this.state.company,
            email :this.state.email,
            password : this.state.password,
            number : this.state.number,
        }

        firebaseApp.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then((res) => {
            user.useruid = res.uid;
            dbRef.child("user/" + res.uid).set(user)
            .then((success) => {
                alert('Account successfully created.')
            })
        })
        .then((success) => {
            firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
            .then((success) => {
                dbRef.child('user/' + success.uid).once('value')
                .then((success) => {
                    this.props.history.push('/company')                    
                })
            })
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if(this.state.name === '' || this.state.company === '' || this.state.email === '' || this.state.password === '' || this.state.number === ''){
                alert('Please Enter all fields.')
            } 
            else if (errorCode === 'auth/weak-password'){
                alert('Password is too weak.')
            }
            else if (errorCode === 'auth/invalid-email'){
                alert('Please enter valid Email.')
            }
            else {
                alert(errorMessage)
            }
        })
    }

    render(){
        return(
            <div className="log-in">
                <div>
                    <h3>Welcome</h3>
                </div><br />
                <div>
                
                <input className="input_fields" type="text" placeholder="Username" value={this.state.name}
                onChange={this.onNameChange} /><br /><br />

                <input className="input_fields" type="text" placeholder="Company Name" value={this.state.company}
                onChange={this.onCompanyChange} /><br /><br />

                <input className="input_fields" type="email" placeholder="Email" value={this.state.email}
                onChange={this.onEmailChange} required /><br/><br/>

                <input className="input_fields" type="password" placeholder="Password" value={this.state.password}
                onChange={this.onPasswordChange} required /><br /><br />

                <input className="input_fields" type="password" placeholder="Confirm Password" /><br /><br />

                <input className="input_fields" type="tel" placeholder="Contact Number" value={this.state.number}
                onChange={this.onNumberChange} /><br /><br />

                {/* checked={this.state.checked} onChange = {this.handleChange} */}
                <input type="checkbox" required /><label className="fonts"> I Agree to the 
                    <a href={"/terms"} target="_blank">Terms and Conditions</a></label> <br/><br/>

                <button className="btn_sign_up" type="submit" onClick={this.onSignup} >SIGN UP</button>

                {/* content */}
                </div><br/>
                <div className="fonts">{this.state.error}</div>
           </div>
        )
    }
}

export default withRouter(Signup);