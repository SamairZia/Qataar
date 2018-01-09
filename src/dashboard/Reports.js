import React, { Component } from 'react';
import {withRouter } from 'react-router-dom';
import '../App.css';
import {Button} from 'react-bootstrap';
import Sidebar from './Sidebar'
import {firebaseApp} from '../firebase'
import { firebase, database } from 'firebase';

class Reports extends Component{

    constructor(props){
        super(props);
    }

    // handleMe(){
    //     alert('me')
    //     const refdb = firebaseApp.database();
    //     const newRef = refdb.ref().child("Reports");
    //     newRef.push({
    //         name: 'admin',
    //         work: 'both operations',
    //         age: 45,
    //     });
    // }

    handleLink(e){
        e.preventDefault();
        this.props.history.push('/users');
    }

    handleBoth(e){
        this.handleLink(e);
        // this.handleMe();
    }

    render(){
        return(
            <div className="maindivdash">
                {/* <Sidebar /> */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>                     */}
                </header>
                <h1 className="general">Report page.
                <Button bsStyle="info" onClick={this.handleBoth.bind(this)}>Click me</Button> 
                </h1>
                            
            </div>
        )
    }
}
export default withRouter(Reports);