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
            confirmpassword: '',
            city:'',
            number : '',
            error: ''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onCompanyChange = this.onCompanyChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onConfirmPasswordChange = this.onConfirmPasswordChange.bind(this);
        this.onCityChange = this.onCityChange.bind(this);
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

    onConfirmPasswordChange(event){
        this.setState({
            confirmpassword: event.target.value
        })
    }

    onCityChange(event){
        this.setState({
            city: event.target.value
        })
    }

    onNumberChange(event){
        this.setState({
            number: event.target.value
        })
    }

    onSignup(){
        const dbRef = firebaseApp.database().ref("/");
        let admin = {
            name : this.state.name,
            company : this.state.company,
            email :this.state.email,
            password : this.state.password,
            number : this.state.number,
        }

        if (this.state.password !== this.state.confirmpassword){
            alert('Please make sure password and confirm password matches.')
        }  
        else if(this.state.name === '' || this.state.company === '' || this.state.email === '' || this.state.password === '' || this.state.confirmpassword === '' || this.state.city === '' || this.state.number === ''){
            alert('Please Enter all fields.')
        }
         else if(/^[A-Za-z\s]+$/.test(this.state.name) != true){
            alert('Only Alphabets are allowed in Username field.')
        } 
        else if(/^[A-Za-z\s]+$/.test(this.state.company) != true){
            alert('Only Alphabets are allowed in Company field.')
        } 
        else if( /^[0-9]+$/.test(this.state.number) != true || (this.state.number).length < 11){
            alert('Please make sure number is greater then 11 characters and contains only numbers.')
        }
        else if (this.state.city !== 'Karachi'){
            alert('This service is for Karachi only. Make sure your current City is Karachi')
        }
        else {
        firebaseApp.auth().createUserWithEmailAndPassword(admin.email, admin.password)
        .then((res) => {
            //Umair's DB stuff
            var companyId = firebaseApp.auth().currentUser.uid;
            var rootRef =  firebaseApp.database().ref();
            var companiesRef = rootRef.child('Companies/');
            var companyRef = companiesRef.child(companyId);
            var companyNew = companyRef.update({'companyId': companyId});
            var company = companyRef.update({'AdminInfo': admin});

               alert('Account successfully created.')
            
            //Qataar's DB stuff
            // user.useruid = res.uid;
            // dbRef.child("user/" + res.uid).set(user)
            // .then((success) => {
            //     alert('Account successfully created.')
            // })
        }).then((success) => {
            this.props.history.push('/company')                    
         })
        // .then((success) => {
        //     firebaseApp.auth().signInWithEmailAndPassword(user.email, user.password)
        //     .then((success) => {
        //         dbRef.child('user/' + success.uid).once('value')
        //         .then((success) => {
        //             this.props.history.push('/company')                    
        //         })
        //     })
        // })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            if(this.state.name === '' || this.state.company === '' || this.state.email === '' || this.state.password === '' || this.state.confirmpassword === '' || this.state.city === '' || this.state.number === ''){
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
    }

    render(){
        return(
            <div className="log-in">
                <div>
                    <h3>Sign Up</h3>
                </div><br />
                <div>
                
                <input className="input_fields" type="text" placeholder="Username" value={this.state.name} onChange={this.onNameChange} /><br /><br />

                <input className="input_fields" type="text" placeholder="Company Name" value={this.state.company}
                onChange={this.onCompanyChange} /><br /><br />

                <input className="input_fields" type="email" placeholder="Email" value={this.state.email}
                onChange={this.onEmailChange} required /><br/><br/>

                <input className="input_fields" type="password" placeholder="Password" value={this.state.password}
                onChange={this.onPasswordChange} required /><br /><br />

                <input className="input_fields" type="password" placeholder="Confirm Password" value={this.state.confirmpassword}
                onChange={this.onConfirmPasswordChange} required /><br /><br />

                <input className="input_fields" type="text" placeholder="City" value={this.state.city}
                onChange={this.onCityChange} required /><br/><br/>

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