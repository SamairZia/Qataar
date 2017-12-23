import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'
import './App.css';
import SkyLight from 'react-skylight'
import bglogin from './bglogin.png'
import Terms from './Terms'
import {firebaseApp} from './firebase'

class Signup extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked: false,
            email :'',
            password : '',
            error: {
                message: ''
            }
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        e.preventDefault();
        this.props.history.push('/company')
    }

    signUp() {
        console.log('this.state' , this.state);
        const {email , password } = this.state;
        firebaseApp.auth().createUserWithEmailAndPassword(email,password)
        .catch(error => {
            this.setState({error});
        })
    }

    // patch(e) {
    //     this.handleChange(e);
    //     this.props.signUp();
    // }

    render(){
        return(
            <div className="log-in">
                <div>
                    <h3>Welcome</h3>
                </div><br />
                <div>
                
                <input className="input_fields" type="text" placeholder="Username" /><br /><br />

                <input className="input_fields" type="text" placeholder="Company Name" /><br /><br />

                <input className="input_fields" type="email" placeholder="Email"  
                onChange={event => this.setState({email: event.target.value})} required /><br/><br/>

                <input className="input_fields" type="password" placeholder="Password"  
                onChange={event => this.setState({password: event.target.value})} required /><br /><br />

                <input className="input_fields" type="password" placeholder="Confirm Password"  /><br /><br />

                <input className="input_fields" type="tel" placeholder="Contact Number" /><br /><br />

                {/* checked={this.state.checked} onChange = {this.handleChange} */}
                <input type="checkbox" required /><label className="fonts"> I Agree to the 
                    <a href={"/terms"} target="_blank">Terms and Conditions</a></label> <br/><br/>

                <button className="btn_sign_up" type="submit" onClick={this.handleChange} >SIGN UP</button>

                {/* content */}
                </div><br/>
                <div className="fonts">{this.state.error.message}</div>
           </div>
        )
    }
}

export default withRouter(Signup);