import React, { Component } from 'react';
import {Panel, Form, Button} from 'react-bootstrap';

export default class Services extends Component{
    render(){
        return(
            <div className="div-container">
                <Panel header="Services" bsStyle="primary" >
                    <Form>
                    <div className="form-group col-md-8">
                        <label>Serives Names:</label>{' '}
                        <input className="form-control" type="text" placeholder="1" /><br />
                        <input className="form-control" type="text" placeholder="2" /><br />
                        <input className="form-control" type="text" placeholder="3" /><br />
                        <input className="form-control" type="text" placeholder="4" /><br />
                        <input className="form-control" type="text" placeholder="5" /><br />
                    </div>

                    <div className="form-group col-md-5" >
                        <Button bsStyle="primary" >Add</Button><span className="spanTemp" >{''}</span>
                        <Button bsStyle="danger">Cancel</Button>
                    </div>
                    </Form>
                </Panel>              
            </div>
        )
    }
}