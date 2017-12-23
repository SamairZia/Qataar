import React, { Component } from 'react';
import {Link , withRouter } from 'react-router-dom';
import { Panel, PageHeader, Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import Services from './Services'

class CompanyInformation extends Component{

    constructor(props) {
        super(props);
        this.handleButton = this.handleButton.bind(this);
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
            <header className="right" ><Button bsStyle="primary" >Log Out</Button></header>
                <PageHeader >Company Information</PageHeader>

                <Panel header="Information" bsStyle="info">
                    <Form>
                        <div className="form-group col-md-5">
                        <label>Company Name:</label>{' '}
                        <input className="form-control" type="text" placeholder="Habib Bank" />
                        {/* <FormGroup>
                            <ControlLabel>Company Name:</ControlLabel> {' '}
                            <FormControl type="text" placeholder="Habib Bank" />
                        </FormGroup> */}
                        </div>
                        <div className="form-group col-md-5">
                        <label>Location:</label>{' '}
                        <input className="form-control" type="text" placeholder="Nazimabad" />
                        </div>

                        <div className="form-group col-md-10">
                        <label>Address:</label>{' '}
                        <input className="form-control" type="text" placeholder="block#1 abc street" />
                        </div>

                        <div className="form-group col-md-4">
                        <label>Contact Email:</label>{' '}
                        <input className="form-control" type="email" placeholder="abc@company.com" />
                        </div>

                        <div className="form-group col-md-4">
                        <label>Website:</label>{' '}
                        <input className="form-control" type="text" placeholder="company.com" />
                        </div>

                        <div className="form-group col-md-2">
                        <label>No. of branches:</label>{' '}
                        <input className="form-control" type="text" placeholder="3" />
                        </div>

                        <div className="form-group col-md-2"><br />{' '}
                        <Button bsStyle="info" type = "submit" onClick={this.handleButton} >Submit</Button>
                        </div>
                    </Form>
                </Panel>        
            </div>
        )
    }
}

export default withRouter(CompanyInformation);