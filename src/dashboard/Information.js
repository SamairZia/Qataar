import React, { Component } from 'react';
import '../App.css';
import '../frontWeb/Features.css'
import Sidebar from './Sidebar'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {firebaseApp} from '../firebase'
import { database } from 'firebase';

export default class Information extends Component{

    constructor(){
        super();{
            this.state = {
                numbernext : 2,
                numbercurrent: 1,
                numberprevious: 0,
                totaltickets: 0
            }
        }
    }
    changeNext(){
        this.setState({
            numbernext: this.state.numbernext +1,
            numbercurrent: this.state.numbercurrent +1,
            numberprevious: this.state.numberprevious +1
        });
    }

    componentWillMount(){
        const db = firebaseApp.database();
        const rootRef = db.ref().child('Information');
        const totalRef = rootRef.child('totaltickets');
        totalRef.on('value' , snap => {
            this.setState({
                totaltickets: snap.val()
            })
        })
    }

    render(){
        return(
            <div  className="maindivdash">
                {/* <Sidebar /> */}
                {/* header class in Dashboard.css */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>                */}
                </header>
                <div >
                    <Grid className="whitebackground">
                    <Row>
                        <h3>{'\t'}Total Tickets: {this.state.totaltickets}</h3>
                    </Row>
                    <Row className="show-grid" >
                        <Col lg={4}>
                        <h3 className="roundshapeheadingnext"><strong>Next</strong></h3>
                        <p className="roundshape">{this.state.numbernext}</p>
                        </Col>
                        <Col lg={4}>
                        <h3 className="roundshapeheadingcenter"><strong>Current</strong> </h3>
                        <p className="roundshapecenter">{this.state.numbercurrent}</p>
                        </Col>
                        <Col lg={4}>
                        <h3 className="roundshapeheadingprevious"><strong>Previous</strong></h3>
                        <p className="roundshape">{this.state.numberprevious}</p>
                        </Col>
                    </Row>
                    <div className="maindiv" ></div>
                    <Row className="show-grid">
                        <Col lg={6}>
                        <div className="lefticon" >
                        <button className="roundbuttonnoshow" ><span className="glyphicon glyphicon-chevron-down" ></span></button><br/>
                        <label>No Show</label>
                        </div>
                        </Col>
                        <Col lg={6}>
                        <div className="righticon">                        
                        <button className="roundbuttonnext" onClick={this.changeNext.bind(this)} ><span className="glyphicon glyphicon-chevron-right"></span></button><br/>
                        <label>Call Next</label>
                        </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col lg={11}>
                        <div className="doneicon">
                        <button className="roundbuttondone" ><span className="glyphicon glyphicon-ok" ></span></button><br />
                        <label>Done</label>
                        </div>
                        </Col>
                    </Row>
                    </Grid>
                </div>               
            </div>
        )
    }
}