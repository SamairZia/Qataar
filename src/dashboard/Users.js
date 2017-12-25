import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar'

export default class Users extends Component{
    render(){
        return(
            <div>
                <Sidebar />
                <h1 className="general">Users page.</h1>                
            </div>
        )
    }
}