import React, { Component } from 'react';
import '../App.css';
import '../frontWeb/Features.css'
import Sidebar from './Sidebar'
import { Grid, Row, Col, Button } from 'react-bootstrap';

export default class Information extends Component{

    constructor(){
        super();{
            this.state = {
                numbernext : 2,
                numbercurrent: 1,
                numberprevious: 0
            }
        }
    }
    changeNext(numbernext){
        this.setState({numbernext: this.state.numbernext +1});
    }
    changeCurrent(numbercurrent){
        this.setState({numbercurrent: this.state.numbercurrent +1});
    }
    changePrevious(numberprevious){
        this.setState({numberprevious: this.state.numberprevious +1});
    }

    changeAll(e){
        this.changeNext(this.numbernext)
        this.changeCurrent(this.numbercurrent)
        this.changePrevious(this.numberprevious)
    }

    render(){
        return(
            <div  className="maindivdash">
                <Sidebar />
                <header className="buttondiv" >
                    <Button bsStyle="danger">Logout</Button>                    
                </header>
                <div >
                    <Grid className="whitebackground">
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
                        <button className="roundbuttonnext" onClick={this.changeAll.bind(this)} ><span className="glyphicon glyphicon-chevron-right"></span></button><br/>
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