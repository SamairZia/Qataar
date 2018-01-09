import React, { Component } from 'react';
import {Link , withRouter } from 'react-router-dom';
import { Panel, PageHeader, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Services from './Services'
import {firebaseApp} from '../../firebase'
import { firebase, database } from 'firebase';

class CompanyInformation extends Component{

    constructor(props) {
        super(props);{
            this.state = {
                companyname: '',
                companylocation: '',
                companyaddress: '',
                contactemail: '',
                companywebsite: '',
                companybranches: '',
                serviceOne : '',
                serviceTwo : '',
                serviceThree : '',
                serviceFour : '',
                serviceFive : '',
            }
            this.onCompanyNameChange = this.onCompanyNameChange.bind(this);
            this.onCompanyLocationChange = this.onCompanyLocationChange.bind(this);
            this.onCompanyAddressChange = this.onCompanyAddressChange.bind(this);
            this.onContactEmailChange = this.onContactEmailChange.bind(this);
            this.onCompanyWebsiteChange = this.onCompanyWebsiteChange.bind(this);
            this.onCompanyBranchesChange = this.onCompanyBranchesChange.bind(this);
            this.handleCompanyInformation = this.handleCompanyInformation.bind(this);
            this.onServiceOneChange = this.onServiceOneChange.bind(this);
            this.onServiceTwoChange = this.onServiceTwoChange.bind(this);
            this.onServiceThreeChange = this.onServiceThreeChange.bind(this);
            this.onServiceFourChange = this.onServiceFourChange.bind(this);
            this.onServiceFiveChange = this.onServiceFiveChange.bind(this);
        }
    }
    //Input fields onChange listeners for Company Information
    onCompanyNameChange(event){
        this.setState({
            companyname : event.target.value
        })
    }
    

    onCompanyLocationChange(event){
        this.setState({
            companylocation : event.target.value
        })
    }

    onCompanyAddressChange(event){
        this.setState({
            companyaddress : event.target.value
        })
    }

    onContactEmailChange(event){
        this.setState({
            contactemail : event.target.value
        })
    }

    onCompanyWebsiteChange(event){
        this.setState({
            companywebsite : event.target.value
        })
    }

    onCompanyBranchesChange(event){
        this.setState({
            companybranches : event.target.value
        })
    }

    // Input fields onChange listeners fro Services
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

    //function for saving company Information and services both
    handleCompanyInformation(event){
        const dbRef = firebaseApp.database();
        let companyInfo = {
            companyname: this.state.companyname,
            companylocation: this.state.companylocation,
            companyaddress: this.state.companyaddress,
            contactemail: this.state.contactemail,
            companywebsite: this.state.companywebsite,
            companybranches: this.state.companybranches,
        }
        let servicesInfo = {
            serviceOne : this.state.serviceOne,
            serviceTwo : this.state.serviceTwo,
            serviceThree : this.state.serviceThree,
            serviceFour : this.state.serviceFour,
            serviceFive : this.state.serviceFive,
        }
        const forID = firebaseApp.auth().currentUser.uid;
        if(this.state.companyname === '' ||this.state.companylocation === '' || this.state.companyaddress === '' ||this.state.contactemail === '' ||this.state.companywebsite === '' ||this.state.companybranches === '' || this.state.serviceOne === '') {
            alert('Please Fill all the fields and add atleast one Service.')
        }else {
        const fire = dbRef.ref('/Companies')
                fire.child(forID).update({ companyInfo , servicesInfo })
                    .then((success) => {
                        alert('Information added succesfully')
                    })
            .then((success) => {
                this.props.history.push('/my-account')
            })
        }
    }

    handleButton(e) {
        e.preventDefault();
        // alert("hello");
        /**
         * this line of code will actually change the route
         */
        this.props.history.push('/services')
    }

    render(){
        return(
            <div className="div-container">
            <header className="right" ><Button bsStyle="danger" >Log Out</Button></header>
                <PageHeader >Company Information</PageHeader>

                <Panel header="Information" bsStyle="info">
                    {/* <Form> */}
                        <div className="form-group col-md-5">
                        <label>Company Name:</label>{' '}
                        <input className="form-control" type="text" placeholder="Habib Bank" value={this.state.companyname} onChange={this.onCompanyNameChange} />
                       
                        </div>
                        <div className="form-group col-md-5">
                        <label>Location:</label>{' '}
                        <input className="form-control" type="text" placeholder="Nazimabad" value={this.state.companylocation} onChange={this.onCompanyLocationChange} />
                        </div>

                        <div className="form-group col-md-10">
                        <label>Address:</label>{' '}
                        <input className="form-control" type="text" placeholder="block#1 abc street" value={this.state.companyaddress} onChange={this.onCompanyAddressChange} />
                        </div>

                        <div className="form-group col-md-4">
                        <label>Contact Email:</label>{' '}
                        <input className="form-control" type="email" placeholder="abc@company.com" value={this.state.contactemail} onChange={this.onContactEmailChange} />
                        </div>

                        <div className="form-group col-md-4">
                        <label>Website:</label>{' '}
                        <input className="form-control" type="text" placeholder="company.com" value={this.state.companywebsite} onChange={this.onCompanyWebsiteChange} />
                        </div>

                        <div className="form-group col-md-2">
                        <label>No. of branches:</label>{' '}
                        <input className="form-control" type="text" placeholder="3" value={this.state.companybranches} onChange={this.onCompanyBranchesChange} />
                        </div>

                        <div className="form-group col-md-2"><br />{' '}
                        {/* <Button bsStyle="info" onClick={this.handleCompanyInformation} >Submit</Button> */}
                        </div>
                    {/* </Form> */}
                </Panel>        
                <br/><br/>
                <Panel header="Services" bsStyle="info" >
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
                        <Button bsStyle="primary" onClick={this.handleCompanyInformation} >Add</Button><span className="spanTemp" >{''}</span>
                        <Button bsStyle="danger">Cancel</Button>
                    </div>
                    {/* </Form> */}
                </Panel>
            </div>
        )
    }
}

export default withRouter(CompanyInformation);