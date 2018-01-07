import React, { Component } from 'react';
import './App.css';
import {firebaseApp} from './firebase'
import { database } from 'firebase';

export default class Contact extends Component{
    constructor(props){
        super(props);
        this.state = {
            name : '',
            email : '',
            message : '' 
        }
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSubmit =  this.onSubmit.bind(this);
    }

    onNameChange(event){
        this.setState({
            name : event.target.value
        })
    }

    onEmailChange(event){
        this.setState({
            email : event.target.value
        })
    }
    onMessageChange(event){
        this.setState({
            message : event.target.value
        })
    }

    clear(){
        this.setState({
            name: '',
            email: '',
            message: ''
        })
    }

    onSubmit(){
        const refdb = firebaseApp.database();
        let contacts = {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }
        if(this.state.name === '' || this.state.email === ''){
            alert('Please fill the required fileds.')
        } else {
        const newRef = refdb.ref().child("Contact");
        newRef.push().set(contacts)
        .then((success) => {
            this.setState({
                name: '',
                email: '',
                message: ''
            })
        });
        alert('me');
    }}

    render(){
        return(
            <div className="backgroundColordiv" >
                <div className="contactform" >
                <h2>Get in Touch with us!</h2>
                    <label>Enter Name:</label>{' '}<small>(Required)</small> <br/>
                    <input className="input_fields_accounts" type="text" placeholder="Name here" value={this.state.name} onChange={this.onNameChange} required /><br/><br/>
                    
                    <label>Enter Email:</label>{' '}<small>(Required)</small><br/>
                    <input className="input_fields_accounts" type="email" placeholder="Email here" value={this.state.email} onChange={this.onEmailChange} required /><br/><br/>
                    
                    <label>Enter Message:</label><br/>
                    <textarea className="textarea" rows="5" cols="50" type="text" placeholder="Message us here" value={this.state.message} onChange={this.onMessageChange} /><br/><br/>
                    
                    <button className="btn_login" onClick={this.onSubmit} >Get in touch</button>
                </div>
            </div>
        )
    }
}