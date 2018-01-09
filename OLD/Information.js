import React, { Component } from 'react';
import '../App.css';
import '../frontWeb/Features.css'
import Sidebar from './Sidebar'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import {firebaseApp} from '../firebase'
import { database } from 'firebase';
import index from 'hash-history';

export default class Information extends Component{

    constructor(){
        super();{
            this.state = {
                numbernext : 2,
                numbercurrent: 1,
                // numberprevious: 0,
                numberTotal: 0,
                totaltickets: 0,
                mydate: '',
                currentTime : new Date().toLocaleDateString()
            }
            this.onDateChange = this.onDateChange.bind(this);
        }
    }

    onDateChange(event){
        this.setState({
            mydate: event.target.value
        })
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
                {/* header class in Dashboard.css */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>*/}
                </header>
                <div >
                    <Grid className="whitebackground">
                    <Row>
                        <Col lg={8}><h3>{'\t'}Total Tickets: {this.state.totaltickets}</h3></Col>
                        <Col lg={3}><h4>Today's Date:{'\t'}{this.state.currentTime}</h4></Col>
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