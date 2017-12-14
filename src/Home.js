import React, { Component } from 'react';
import './App.css';
import logo from './logo.svg';
import Logo from './Logo.png';
import New_logo from './New_logo.png'
import small_logo from './small_logo.png'
import Logo_Image from './Logo_Image.png'

export default class Home extends Component{
    render(){
        return(
            <div>
            <div className="App">
                <header className="App-header">
                    <img src={Logo_Image} className="App-logo" alt="logo" />
                    <h1 className="App-title"></h1>
                </header>
            </div>
            <div className="container">
                <div className="container-element1">Branch Management</div>
                <div className="container-element2">Real Time Monitoring</div>
                <div className="container-element3">Customer Feedback</div>
            </div>
            <footer><p>Footer </p></footer>
            </div>
        )
    }
}