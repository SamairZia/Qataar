import React, { Component } from 'react';
import {Panel, Form, Button} from 'react-bootstrap';
import {firebaseApp} from '../../firebase'
import { firebase, database } from 'firebase';

export default class Services extends Component{

    constructor(props){
        super(props);
        this.state = {
            // serviceOne : '',
            // serviceTwo : '',
            // serviceThree : '',
            // serviceFour : '',
            // serviceFive : '',
        }
        // this.onServiceOneChange = this.onServiceOneChange.bind(this);
        // this.onServiceTwoChange = this.onServiceTwoChange.bind(this);
        // this.onServiceThreeChange = this.onServiceThreeChange.bind(this);
        // this.onServiceFourChange = this.onServiceFourChange.bind(this);
        // this.onServiceFiveChange = this.onServiceFiveChange.bind(this);
        // this.handleInformation = this.handleInformation.bind(this)
    }

    onServiceOneChange(event){
        this.setState({
            serviceOne : event.target.value
        })
    }

    onServiceTwoChange(event){
        this.setState({
            serviceTwo : event.target.value
        })
    }
    onServiceThreeChange(event){
        this.setState({
            serviceThree : event.target.value
        })
    }
    onServiceFourChange(event){
        this.setState({
            serviceFour : event.target.value
        })
    }
    onServiceFiveChange(event){
        this.setState({
            serviceFive : event.target.value
        })
    }

    handleInformation(event){
        alert(this.state.serviceOne)
        const dbRef = firebaseApp.database();
        const fire = dbRef.ref('/CompanyInformation/')
        fire.child('Company/').push().set({           
            serviceOne : this.state.serviceOne,
            serviceTwo : this.state.serviceTwo,
            serviceThree : this.state.serviceThree,
            serviceFour : this.state.serviceFour,
            serviceFive : this.state.serviceFive,
        });
        console.log(fire);
    }

    render(){
        return(
            <div className="div-container">
                <Panel header="Services" bsStyle="primary" >
                    {/* <Form> */}
                    <div className="form-group col-md-8">
                        <label>Serives Names:</label>{' '}
                        <input className="form-control" type="text" placeholder="1" value={this.state.serviceOne} onChange={this.onServiceOneChange} /><br />
                        <input className="form-control" type="text" placeholder="2" value={this.state.serviceTwo} onChange={this.onServiceTwoChange}/><br />
                        <input className="form-control" type="text" placeholder="3" value={this.state.serviceThree} onChange={this.onServiceThreeChange}/><br />
                        <input className="form-control" type="text" placeholder="4" value={this.state.serviceFour} onChange={this.onServiceFourChange}/><br />
                        <input className="form-control" type="text" placeholder="5" value={this.state.serviceFive} onChange={this.onServiceFiveChange}/><br />
                    </div>

                    <div className="form-group col-md-5" >
                        <Button bsStyle="primary" onClick={this.handleInformation} >Add</Button><span className="spanTemp" >{''}</span>
                        <Button bsStyle="danger">Cancel</Button>
                    </div>
                    {/* </Form> */}
                </Panel>              
            </div>
        )
    }
}