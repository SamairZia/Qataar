import React, { Component } from 'react';
import {Link , withRouter} from 'react-router-dom'
import {Button} from 'react-bootstrap'
import {firebaseApp} from '../firebase'
import './Sidebar.css';
import './Temp.css'

class Sidebar extends Component {
    
    constructor(props){
        super(props);
        this.onSignout = this.onSignout.bind(this)
    }

    onSignout(){
        firebaseApp.auth().signOut()
        .then((success) => {
            this.props.history.push('/')
        })
        .catch((error) => {
            console.log(error)
        })
    }

    render() {
        return (
            // <div id='cssmenu'>
            <nav className="sidenav" >
                <Link to="/my-account"><span>My Account</span></Link>
                <Link to="/reports"><span>Reports</span></Link>
                <Link to="/information"><span>Information</span></Link>
                <Link to="/branches"><span>Branches</span></Link>
                <Link to="/users"><span>Users</span></Link>
                <br /><br /><br />
                <Button bsStyle="danger" onClick={this.onSignout} >Logout</Button>  
            </nav> 
            // </div>
        )
    }
}
export default withRouter(Sidebar);