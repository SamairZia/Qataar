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
            company:'' , name: '', number: '',
            companylocation: '', companyaddress:'',companywebsite:'',contactemail:'',
            service1:'',service2:'',
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
            const xyz =  firebaseApp.auth().currentUser.uid;
            console.log(this.state.authenticated);
            console.log(xyz);

            const db = firebaseApp.database();
            const rootRef = db.ref().child('Companies/' + xyz + '/AdminInfo');
            const cominfoRef = db.ref().child('Companies/' + xyz + '/companyInfo');            
            const serviceRef = db.ref().child('Companies/' + xyz + '/servicesInfo');            
            const companyRef = rootRef.child('company');
            companyRef.on('value' , snap => {
                this.setState({
                    company: snap.val()
                })
            })
            const nameRef = rootRef.child('name');
            nameRef.on('value' , snap => {
                this.setState({
                    name: snap.val()
                })
            })
            const numberRef = rootRef.child('number');
            numberRef.on('value' , snap => {
                this.setState({
                    number: snap.val()
                })
            })
            const locationRef = cominfoRef.child('companylocation');
            locationRef.on('value' , snap => {
                this.setState({
                    companylocation: snap.val()
                })
            })
            const addRef = cominfoRef.child('companyaddress');
            addRef.on('value' , snap => {
                this.setState({
                    companyaddress: snap.val()
                })
            })
            const siteRef = cominfoRef.child('companywebsite');
            siteRef.on('value' , snap => {
                this.setState({
                    companywebsite: snap.val()
                })
            })
            const contactRef = cominfoRef.child('contactemail');
            contactRef.on('value' , snap => {
                this.setState({
                    contactemail: snap.val()
                })
            })
            const service1Ref = serviceRef.child('serviceOne');
            service1Ref.on('value' , snap => {
                this.setState({
                    service1: snap.val()
                })
            })
            const service2Ref = serviceRef.child('serviceTwo');
            service2Ref.on('value' , snap => {
                this.setState({
                    service2: snap.val()
                })
            })
            // totalRef.on('value' , this.getData.bind(this))
        //     totalRef.on('value', snap => {
        //         this.setState({
        //             Heliz: snap.val()
        //         })
        // })
            
        }
         else {
            console.log('user has signed out or still needs to sign in.')
        }
    })
    }
    getData(data){
        // console.log(data.val())
        // var temp = data.val();
        // var keys = Object.keys(temp);
        // var valueing = Object.values(temp)
        // console.log(keys)
        // console.log(valueing) 
        // this.setState({
        //         Heliz: valueing
        //     })

        // for(var i = 0 ; i<keys.length; i++ ){
        //     var k = keys[i];
        //     var companyaddress = temp[k].companyaddress;
        //     var companyname = temp[k].companyname;
        //     console.log(companyaddress , companyname)
        // }

        // this.setState({
        //     Heliz: data.val()
        // })
    }

    render(){
        
        return(
            <div className="maindivdash">
             {/* <Sidebar /> */}
                <header className="buttondiv" >
                {/* <p>{this.state.email}</p>    */}
                {/* <p>{this.state.company}</p> */}
                {/* <p>{this.state.Heliz}</p>                 */}
                {/* <h2>{this.state.useruid}</h2>              */}
                    {/* <Button bsStyle="danger">Logout</Button>*/}
                </header>
                <div className="paneldivaccount" >
                <p>{this.state.Heliz}</p>
                <h2>Admin Information</h2>
                <h4>Your Name: {this.state.name}</h4>
                {/* <input className="input_fields_accounts" value={this.state.name} /><br /><br /> */}
                
                <h4>Company Name: {this.state.company}</h4>
                {/* <input className="input_fields_accounts" value={this.state.company} /><br /><br /> */}
                
                <h4>Contact Number: {this.state.number}</h4>
                
                <h2>Company Information</h2>
                <h4>Company Address: {this.state.companyaddress}</h4>
                <h4>Company Location: {this.state.companylocation}</h4> 
                <h4>Company Website: {this.state.companywebsite}</h4> 
                <h4>Content Email: {this.state.contactemail}</h4> 

                <h2>Services</h2>
                <h4>1. {this.state.service1}</h4>
                <h4>2. {this.state.service2}</h4> 
                
                {/* <input className="input_fields_accounts" value={this.state.number} /><br /><br /> */}

                {/* <label>Designation:</label><br/> */}
                {/* <input className="input_fields_accounts" /><br /><br /> */}

                {/* <label>Old Password:</label><br/> */}
                {/* <input className="input_fields_accounts" /><br /><br /> */}
                
                {/* <label>New Password:</label><br/> */}
                {/* <input className="input_fields_accounts" /><br /><br /> */}

                {/* <label>Confirm Password:</label><br/> */}
                {/* <input className="input_fields_accounts" /><br /><br /> */}
               

                {/* <Button bsStyle="primary">Save Changes</Button>{' '}
                <Button bsStyle="warning">Cancel</Button> */}
                </div>
            </div>
        )
    }
}