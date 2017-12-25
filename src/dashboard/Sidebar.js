import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css';
import './Temp.css'

export default class Sidebar extends Component {
    render() {
        return (
            // <div id='cssmenu'>
            <nav className="sidenav" >
                <Link to="/my-account"><span>My Account</span></Link>
                <Link to="/reports"><span>Reports</span></Link>
                <Link to="/information"><span>Information</span></Link>
                <Link to="/branches"><span>Branches</span></Link>
                <Link to="/users"><span>Users</span></Link>
            </nav> 
            // </div>
        )
    }
}