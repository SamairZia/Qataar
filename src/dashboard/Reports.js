import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar'

export default class Reports extends Component{
    render(){
        return(
            <div>
                <Sidebar />
                <h1 className="general">Report page.</h1>                
            </div>
        )
    }
}