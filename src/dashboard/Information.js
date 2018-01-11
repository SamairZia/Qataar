import React, { Component } from 'react';
import '../App.css';
import '../frontWeb/Features.css'
import Sidebar from './Sidebar'
import { Grid, Row, Col, Button } from 'react-bootstrap';
import firebase from 'firebase';

export default class Information extends Component{

    constructor(){
        super();{
            this.state = {
                numbernext : 1,
                numbercurrent: 0,
                numberTotal: 0,
                // totaltickets: 0,
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

    changeNext(numbernext){
        if(this.state.numberTotal > this.state.numbernext){
            this.setState({numbernext: this.state.numbernext +1});
        }
      
    }

    changeCurrent(numbercurrent){
        if(this.state.numberTotal >= this.state.numbernext){
        this.setState({numbercurrent: this.state.numbercurrent +1});
        var companyId = firebase.auth().currentUser.uid;
        var rootRef =  firebase.database().ref();
        var companiesRef = rootRef.child('Companies/');
        var companyRef = companiesRef.child(companyId);
        var company = companyRef.update({'companyId': companyId});
        var currentToken = companyRef.update({'currentToken': this.state.numbercurrent + 1});
        }
        else{
            
            alert("All Served!");
        }
    }
    done(){
        this.setState({numbercurrent: 0});
        // this.setState({numberTotal: 0});
        this.setState({numbernext: 1});
        var rootRef =  firebase.database().ref();
        var tokenRef = rootRef.child('Tokens/');
        // var totalTokenRef = tokenRef.child('Total');
        var total = tokenRef.update({'Total': 0});
        
        var companyId = firebase.auth().currentUser.uid;
        var companiesRef = rootRef.child('Companies/');
        var companyRef = companiesRef.child(companyId);
        var currentToken = companyRef.update({'currentToken': 0});
    }

    changeTotal(numberTotal){
        this.setState({numberprevious: this.state.numberTotal +1});
    }

    changeAll(e){
        this.changeNext(this.numbernext)
        this.changeCurrent(this.numbercurrent)
        // this.changeTotal(this.numberTotal)
    }

    componentWillMount() {
    var companyId = 'rLkjptEBZsSaD8VCXlh4Ksyxi4z1/';        
    var rootRef =  firebase.database().ref();
    var companiesRef = rootRef.child('Companies/');
    var companyRef = companiesRef.child(companyId);
    var currentTokenRef = companyRef.child('currentToken/');
    currentTokenRef.on('value',(snapshot)=>{
        this.setState({numbercurrent: snapshot.val()});
        this.setState({numbernext: snapshot.val()+1});
        
    });

    var tokenRef = firebase.database().ref('Tokens/');
    tokenRef.on('value',(snapshot) => {
        this.setState({numberTotal: snapshot.val().Total});
    });
    }

    render(){  
        return(
            <div  className="maindivdash">
                {/* <Sidebar /> */}
                {/* header class in Dashboard.css */}
                <header className="buttondiv" >
                    {/* <Button bsStyle="danger">Logout</Button>                     */}
                </header>
                <div >
                    <Grid className="whitebackground">
                    <Row>
                        {/* <Col lg={8}><h3>{'\t'}Total Tickets: {this.state.totaltickets}</h3></Col> */}
                        <Col lg={8}><h3></h3></Col>                        
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
                        <h3 className="roundshapeheadingprevious"><strong>Total</strong></h3>
                        <p className="roundshape">{this.state.numberTotal}</p>
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
                        <button className="roundbuttondone" onClick={this.done.bind(this)}><span className="glyphicon glyphicon-ok" ></span></button><br />
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