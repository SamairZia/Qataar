import React, { Component } from 'react';
import Sidebar from './Sidebar'
import Mainsidebar from './Mainsidebar'
import './Dashboard.css'
import {firebaseApp} from '../firebase'
import { Button, Panel, Form } from 'react-bootstrap';

export default class Account extends Component{

    constructor(props){
        super(props);
        this.state = {
            email:'' , password:'' ,
            authenticated: false , Heliz:'',
        }
    }

    componentWillMount(){
    firebaseApp.auth().onAuthStateChanged(user =>{
        if (user){
            console.log('user has signed in or up.', user.email , user.name );
            this.setState({
                email: user.email,
                password: user.password,
            })
            console.log(this.state.authenticated);

            // const db = firebaseApp.database();
            // const rootRef = db.ref().child('CompanyInformation/Company');
            // const totalRef = rootRef.child('Heliz');
            // totalRef.on('value', snap => {
            //     this.setState({
            //         Heliz: snap.val()
            //     })
        // })
    }
         else {
            console.log('user has signed out or still needs to sign in.')
        }
    })
    }

    render(){
        // var user = firebaseApp.auth().currentUser;
        // var name , email ;
        // if(user != null) {
        //     name = user.displayName;
        //     email = user.email
        //     console.log('signed in ' , name , email)
            
        // }
        // else{
        //     console.log('nothing')
        // }
        return(
            <div className="maindivdash">
             {/* <Sidebar /> */}
                <header className="buttondiv" >
                <p>{this.state.user}</p>   
                {/* <h2>{this.state.useruid}</h2>              */}
                    {/* <Button bsStyle="danger">Logout</Button>*/}
                </header>
                <div className="paneldivaccount" >
                <p>{this.state.Heliz}</p>
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