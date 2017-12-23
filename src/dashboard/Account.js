import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar'

export default class Account extends Component{
    render(){
        return(
            <div className="general">
            <Sidebar />
                <h1 >Your account.</h1>                
            </div>
        )
    }
}