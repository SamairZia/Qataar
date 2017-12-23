import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './Sidebar.css';

export default class Sidebar extends Component {
    render() {
        return (
            <div id='cssmenu'>
                {/* <nav > */}
                <ul>
                    <li className='active'><Link to="/"><span>My Account</span></Link><br/></li>
                    <li><Link to="/reports"><span>Reports</span></Link></li>
                    <li><Link to="/information"><span>Information</span></Link></li>
                    <li><Link to="/branches"><span>Branches</span></Link></li>
                    <li><Link to="/users"><span>Users</span></Link></li>
                </ul>
            {/* </nav> */}
            </div>
        )
    }
}