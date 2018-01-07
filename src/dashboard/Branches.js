import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar'
import {Button} from 'react-bootstrap';

export default class Branches extends Component{
    render(){
        return(
            <div className="maindivdash">
                {/* <Sidebar /> */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>                     */}
                </header>
                <h1 className="general">Branches page.</h1>                
            </div>
        )
    }
}