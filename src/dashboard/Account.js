import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Mainsidebar from './Mainsidebar'
import './Dashboard.css'
import { Button, Panel, Form } from 'react-bootstrap';

export default class Account extends Component{
    render(){
        return(
            <div className="maindivdash">
             <Sidebar />
                <header className="buttondiv" >
                    <Button bsStyle="danger">Logout</Button>                    
                </header>
                <div className="panel" >
                
                <label>Your Name:</label><br/>
                <input className="input_fields_accounts" /><br /><br />
                
                <label>Company Name:</label><br/>
                <input className="input_fields_accounts" /><br /><br />
                
                <label>Contact Email:</label><br/>
                <input className="input_fields_accounts" /><br /><br />
                
                <label>Contact Number:</label><br/>
                <input className="input_fields_accounts" /><br /><br />

                <label>Designation:</label><br/>
                <input className="input_fields_accounts" /><br /><br />

                <label>Old Password:</label><br/>
                <input className="input_fields_accounts" /><br /><br />
                
                <label>New Password:</label><br/>
                <input className="input_fields_accounts" /><br /><br />

                <label>Confirm Password:</label><br/>
                <input className="input_fields_accounts" /><br /><br />

                <Button bsStyle="primary">Save Changes</Button>{' '}
                <Button bsStyle="warning">Cancel</Button>
                </div>
            </div>
        )
    }
}