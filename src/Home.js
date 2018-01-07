import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.png';
import New_logo from './New_logo.png'
import Logo_Image from './Logo_Image.png'   
import feedback from './HomeImages/feedback.png'
import { Grid, Row, Col, Carousel, CarouselItem } from 'react-bootstrap'

export default class Home extends Component{
    render(){
        return(
            <div>
            {/* // <div className="carouseltemp" >              
            //     <Carousel >
            //         <CarouselItem>
            //             <img width={900} height={500} alt="900x500" src={firstview} />
            //             <Carousel.Caption>
            //                 <h3>First slide label</h3>
            //                 <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            //             </Carousel.Caption>
            //         </CarouselItem>
            //         <CarouselItem>
            //             <img width={900} height={500} alt="900x500" src={secondview} />
            //             <Carousel.Caption>
            //                 <h3>Second slide label</h3>
            //                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            //             </Carousel.Caption>
            //         </CarouselItem>
            //         <CarouselItem>
            //             <img width={900} height={500} alt="900x500" src={thirdview} />
            //             <Carousel.Caption>
            //                 <h3>Third slide label</h3>
            //                 <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            //             </Carousel.Caption><span className="glyphicon glyphicon-eye-open" ></span><br/>
            //         </CarouselItem>
            //     </Carousel> </div> */}
              <div className="App">
                <header>
                    <img src={Logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"></h1>
                </header>
            </div> 
            <Grid className="backgroundColordiv" >
                <Row>
                    <Col lg={4} className="container-element1" >Real-Time Monitoring </Col>
                    <Col lg={4} className="container-element1"> Customer's Feedback</Col>
                    <Col lg={4} className="container-element1">Performance</Col>                    
                </Row>
            </Grid>
            <div>
                <p className="homeparagraph" >QATAAR is a queue management system that helps you to keep track of your user traffic and real-time monitoring, it allows instant customer feedback and also helps in making your performance better.</p>
            </div>
            <footer><p>Footer </p></footer>
            </div>   
            
        )
    }
}