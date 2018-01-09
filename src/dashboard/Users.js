import React, { Component } from 'react';
import '../App.css';
import CustomDate from '../CustomDate'
import Sidebar from './Sidebar'
import {Button} from 'react-bootstrap';

export default class Users extends Component{

    constructor(props){
        super(props);{
            this.state ={
                mydate: '',
            }
            this.onDateChange = this.onDateChange.bind(this);
        }
    }
    onDateChange(event){
        this.setState({
            mydate: event.target.value
        })
    }

    render(){
        return(
            <div className="maindivdash">
                {/* <Sidebar /> */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>*/}
                </header>
                <h1 className="general">Users page.</h1>
                <p><input type="date" value={this.state.mydate} onChange={this.onDateChange} /> </p>                
                {/* <CustomDate /> */}
                <h2>{this.state.mydate}</h2>
                <h4>Total Users in Queue:</h4>
                <h4>Total served yet:</h4>
                <h4>No show:</h4>
            </div>
        )
    }
}