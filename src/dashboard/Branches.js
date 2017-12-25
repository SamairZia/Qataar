import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar'

export default class Branches extends Component{
    render(){
        return(
            <div>
                <Sidebar />
                <h1 className="general">Branches page.</h1>                
            </div>
        )
    }
}