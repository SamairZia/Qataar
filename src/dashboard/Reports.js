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
            user1: '',user1Token: '',user1Contact: '',user1Status: 'Served',
            user2: '',user2Token: '',user2Contact: '',user2Status: 'Served',
            user3: '',user3Token: '',user3Contact: '',user3Status: 'Served',
            user4: '',user4Token: '',user4Contact: '',user4Status: 'Served',
            user5: '',user5Token: '',user5Contact: '',user5Status: 'No show',
            user6: '',user6Token: '',user6Contact: '',user6Status: 'To be served',
            user7: '',user7Token: '',user7Contact: '',user7Status: 'No show',
            user8: '',user8Token: '',user8Contact: '',user8Status: 'No show',
            totalusers: '40',
            userserved: '30',
            usernoshow:'10',
        }
    }

    componentWillMount(){
        var user1id = 'Q2IoMfjRUpU901GqsWOFrPacXhi1'
        var user2id = 'yKUYQjKbhnTnnB0CdpdNOD0hG4o1'
        var user3id = '182lPSS9I5h2GbTx9YXNdjvRR8l1'
        var user4id = 'ZpMht7QtAAaWBI2Jllbc5NOpi3h1'
        var user5id = 'lEKR2WLrRJfdheIyX4m2FHlZXLp2'
        var user6id = 'D1pYRtpmQSMXRFluh1Oz2AtLs592'
        var user7id = 'svh9D5uBwjgI1v2J27qoWkcwhik1'
        var user8id = 'VgLVsRdcAxbiwtfUQFY2Wen5ko52'
        
        const db = firebaseApp.database();
        const rootRef = db.ref().child('Users/')
        const user1Ref = rootRef.child(user1id + '/userInfo')
        const user2Ref = rootRef.child(user2id + '/userInfo')
        const user3Ref = rootRef.child(user3id + '/userInfo')
        const user4Ref = rootRef.child(user4id + '/userInfo')
        const user5Ref = rootRef.child(user5id + '/userInfo')
        const user6Ref = rootRef.child(user6id + '/userInfo')
        const user1nameRef = user1Ref.child('userName');
        user1nameRef.on('value' , snap => {
            this.setState({
                user1: snap.val()
            })
        })
        const user1numberRef = user1Ref.child('userMobile');
        user1numberRef.on('value' , snap => {
            this.setState({
                user1Contact: snap.val()
            })
        })
        const user1tokenRef = rootRef.child(user1id + '/userToken')
        user1tokenRef.on('value' , snap => {
            this.setState({
                user1Token: snap.val()
            })
        })
        //User 2 stuff
        const user2nameRef = user2Ref.child('userName');
        user2nameRef.on('value' , snap => {
            this.setState({
                user2: snap.val()
            })
        })
        const user2numberRef = user2Ref.child('userMobile');
        user2numberRef.on('value' , snap => {
            this.setState({
                user2Contact: snap.val()
            })
        })
        const user2tokenRef = rootRef.child(user2id + '/userToken')
        user2tokenRef.on('value' , snap => {
            this.setState({
                user2Token: snap.val()
            })
        })
        //User 3 stuff
        const user3nameRef = user3Ref.child('userName');
        user3nameRef.on('value' , snap => {
            this.setState({
                user3: snap.val()
            })
        })
        const user3numberRef = user3Ref.child('userMobile');
        user3numberRef.on('value' , snap => {
            this.setState({
                user3Contact: snap.val()
            })
        })
        const user3tokenRef = rootRef.child(user3id + '/userToken')
        user2tokenRef.on('value' , snap => {
            this.setState({
                user3Token: snap.val()
            })
        })//User 4 stuff
        const user4nameRef = user4Ref.child('userName');
        user4nameRef.on('value' , snap => {
            this.setState({
                user4: snap.val()
            })
        })
        const user4numberRef = user4Ref.child('userMobile');
        user4numberRef.on('value' , snap => {
            this.setState({
                user4Contact: snap.val()
            })
        })
        const user4tokenRef = rootRef.child(user4id + '/userToken')
        user4tokenRef.on('value' , snap => {
            this.setState({
                user4Token: snap.val()
            })
        })
        //User 5 stuff
        const user5nameRef = user5Ref.child('userName');
        user5nameRef.on('value' , snap => {
            this.setState({
                user5: snap.val()
            })
        })
        const user5numberRef = user5Ref.child('userMobile');
        user5numberRef.on('value' , snap => {
            this.setState({
                user5Contact: snap.val()
            })
        })
        const user5tokenRef = rootRef.child(user5id + '/userToken')
        user5tokenRef.on('value' , snap => {
            this.setState({
                user5Token: snap.val()
            })
        })//User 6 stuff
        const user6nameRef = user6Ref.child('userName');
        user6nameRef.on('value' , snap => {
            this.setState({
                user6: snap.val()
            })
        })
        const user6numberRef = user6Ref.child('userMobile');
        user6numberRef.on('value' , snap => {
            this.setState({
                user6Contact: snap.val()
            })
        })
        const user6tokenRef = rootRef.child(user6id + '/userToken')
        user6tokenRef.on('value' , snap => {
            this.setState({
                user6Token: snap.val()
            })
        })
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
                            <td>{this.state.user2}</td>
                            <td>{this.state.user2Token}</td>
                            <td>{this.state.user2Contact}</td>                            
                            <td>{this.state.user2Status}</td>
                        </tr>
                        <tr>
                            <td>{this.state.user3}</td>
                            <td>{this.state.user3Token}</td>
                            <td>{this.state.user3Contact}</td>                            
                            <td>{this.state.user3Status}</td>
                        </tr>
                        <tr>
                            <td>{this.state.user4}</td>
                            <td>{this.state.user4Token}</td>
                            <td>{this.state.user4Contact}</td>                            
                            <td>{this.state.user4Status}</td>
                        </tr>
                        <tr>
                            <td>{this.state.user5}</td>
                            <td>{this.state.user5Token}</td>
                            <td>{this.state.user5Contact}</td>                            
                            <td>{this.state.user5Status}</td>
                        </tr>
                        <tr>
                            <td>{this.state.user6}</td>
                            <td>{this.state.user6Token}</td>
                            <td>{this.state.user6Contact}</td>                            
                            <td>{this.state.user6Status}</td>
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