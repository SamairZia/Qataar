import React, { Component } from 'react';
import '../App.css';
import CustomDate from '../CustomDate'
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
                <h1 className="general">Branches page.
                <CustomDate />
                </h1>                
            </div>
        )
    }
}