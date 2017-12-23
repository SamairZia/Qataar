import React, { Component } from 'react';
import '.././App.css';
import './Features.css'
import feature1 from './feature1.png'
import feature2 from './feature2.png'
import feature3 from './feature3.png'
import feature4 from './feature4.png'
import { Grid, Row, Col } from 'react-bootstrap';

export default class Features extends Component{
    render(){
        return(
            <div className="maindiv" >
                <Grid className="whitebackground" >
                    <Row className="show-grid">
                        <Col lg={7}>
                        <h1 className="heading" >Eliminating Physical Presence</h1><hr />
                        <p className="tagline" ><strong>"Why you need to present physically when you're there virtually!"</strong></p>
                        <p className="paragraph" >The concept of physical Long lines will be eliminated and in this era of technology their is a concept of joining the line smartly and virtually where you don't have to be physically present in the queue waiting for your turn.</p> 
                        </Col>
                        <Col lg={5}><img className="image" src={feature1} alt="vector" /></Col>
                    </Row>

                    <div className="maindiv"></div>
                    <Row className="show-grid">
                    <Col lg={5}><img className="image" src={feature2} alt="vector" /></Col>
                        <Col lg={7}>
                        <h1 className="heading" >Get Waiting Time Update</h1><hr />
                        <p className="tagline" ><strong>"It's Time! Or Is It?"</strong></p>
                        <p className="paragraph" >This feature will notify the user about their estimated waiting time in the virtual queue. The user will get notifications time to time so that the user will always up to date about their estimated waiting time.</p> 
                        </Col>                        
                    </Row>

                    <div className="maindiv"></div>
                    <Row className="show-grid">
                        <Col lg={7}>
                        <h1 className="heading" >Twinkling/Instant Feedback</h1><hr />
                        <p className="tagline" ><strong>"Wanna share your Experience with QATAAR?"</strong></p>
                        <p className="paragraph" >The ability to monitor feedback from customers as it comes in allows you to respond immediately. Instant feedback shows your commitment towards user satisfaction.</p> 
                        </Col>
                        <Col lg={5}><img className="image" src={feature3} alt="vector" /></Col>
                    </Row>

                    <div className="maindiv"></div>
                    <Row className="show-grid">
                    <Col lg={5}><img className="image" src={feature4} alt="vector" /></Col>
                        <Col lg={7}>
                        <h1 className="heading" >A Revolutionary Solution</h1><hr />
                        <p className="tagline" ><strong>"That's something New!"</strong></p>
                        <p className="paragraph" >This idea is one of a kind and QATAAR is proudly presenting this service in Pakistan for the very first time. This will serve every common man who's fedup in waiting long n tiring queues.</p> 
                        </Col>                        
                    </Row>

                    <div className="maindiv"></div>
                </Grid>
            </div>
        )
    }
}