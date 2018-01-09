import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import { Button } from 'react-bootstrap';
import Sidebar from './Sidebar'
import './Reports.css'
import { firebaseApp } from '../firebase'
import { firebase, database } from 'firebase';

class Reports extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user1: 'Ali',
            user1Token: '33',
            user1Contact: '03111234567',
            user1Status: 'served',
            user2: '',
            user2Token: '',
            user2Contact: '',            
            user2Status: '',
            user3: '',
            user3Token: '',
            user3Contact: '',            
            user3Status: '',
            user4: '',
            user4Token: '',
            user4Contact: '',            
            user4Status: '',
            user5: '',
            user5Token: '',
            user5Contact: '',            
            user5Status: '',
            totalusers: '40',
            userserved: '30',
            usernoshow:'10',
        }
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

    handleLink(e) {
        e.preventDefault();
        this.props.history.push('/users');
    }

    handleBoth(e) {
        this.handleLink(e);
        // this.handleMe();
    }

    render() {
        return (
            <div className="maindivdash">
                {/* <Sidebar /> */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>                     */}
                </header>
                {/* <h1 className="general">
                <Button bsStyle="info" onClick={this.handleBoth.bind(this)}>Click me</Button>
                </h1><br/> */}
                <div>
                    <h2><strong>Detailed View</strong></h2>
                    <table>
                        <tr>
                            <th>User Name</th>
                            <th>Token #</th>
                            <th>User Contact #</th>                            
                            <th>Status</th>
                        </tr>
                        <tr>
                            <td>{this.state.user1}</td>
                            <td>{this.state.user1Token}</td>
                            <td>{this.state.user1Contact}</td>                            
                            <td>{this.state.user1Status}</td>
                        </tr>
                        <tr>
                            <td>User 2</td>
                            <td>2</td>
                            <td>2</td>
                            <td>Served</td>
                        </tr>
                        <tr>
                            <td>User 3</td>
                            <td>2</td>
                            <td>3</td>
                            <td>No Show</td>
                        </tr>
                        <tr>
                            <td>User 4</td>
                            <td>2</td>
                            <td>4</td>
                            <td>Waiting to be served.</td>
                        </tr>
                    </table>
                </div><br/>
                <div>
                <h2><strong> Total</strong> </h2>  
                <table>                 
                    <tr>
                        <td>Total Users in Queue</td>
                        <td>{this.state.totalusers}</td>
                    </tr>
                    <tr>
                        <td> Total served yet:</td> 
                        <td>{this.state.userserved} </td>
                    </tr>
                    <tr>
                        <td>No show:</td>
                        <td>{this.state.usernoshow} </td>
                    </tr>
                </table>
                </div><br/><br/>
            </div>
        )
    }
}
export default withRouter(Reports);