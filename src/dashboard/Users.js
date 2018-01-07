import React, { Component } from 'react';
import '../App.css';
import Sidebar from './Sidebar'
import {Button} from 'react-bootstrap';

export default class Users extends Component{
    constructor(props){
        super(props);
        this.state = {
            //Digital clock stuff 
            currentTime : new Date().toLocaleString()
        }
       this.updateTime();
    }

    updateTime(){
        setInterval(() => {
            this.setState({
            currentTime : new Date().toLocaleString()                
            })
        }, 1000)
    }

    render(){
        return(
            <div className="maindivdash">
                {/* <Sidebar /> */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>                     */}
                </header>
                <h1 className="general">Users page.
                <p><strong> {this.state.currentTime}</strong></p>
                </h1>                
            </div>
        )
    }
}