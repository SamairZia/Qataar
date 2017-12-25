import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import '../App.css';
import Sidebar from './Sidebar'
import Account from './Account'
import Branches from './Branches'
import Information from './Information'
import Reports from './Reports'
import Users from './Users'
import Terms from '../Terms'

export default class Mainsidebar extends Component{
    render(){
        return(
            <div>               
                <Sidebar />
                {(this.props.location.pathname === "/my-account") ?
                <Account /> : (this.props.location.pathname === "/users") ?
                <Users /> : (this.props.location.pathname === "/reports") ?
                <Reports /> : (this.props.location.pathname === "/information") ?
                <Information /> : (this.props.location.pathname === "/branches") ?
                <Branches /> : <Terms />
                }              
            </div>
        )
    }
}