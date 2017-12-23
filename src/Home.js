import React, { Component } from 'react';
import './App.css';
import Logo from './Logo.png';
import New_logo from './New_logo.png'
import Logo_Image from './Logo_Image.png'
import firstview from './HomeImages/firstview.png'
import secondview from './HomeImages/secondview.jpg'
import thirdview from './HomeImages/thirdview.jpg'
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
            //             </Carousel.Caption>
            //         </CarouselItem>
            //     </Carousel> </div> */}
              <div className="App">
                <header>
                    <img src={Logo} className="App-logo" alt="logo" />
                    <h1 className="App-title"></h1>
                </header>
            </div> 
            <div className="container">
                <div className="container-element1">Branch Management</div>
                <div className="container-element2">Real Time Monitoring</div>
                <div className="container-element3">Customer Feedback</div>
            </div>
            <footer><p>Footer </p></footer>
            </div>   
            /* // <Grid>
            //     <Row className="show-grid">
            //         <Col xs={12} md={8}><code>&lt;Welcome to Qataar/&gt;</code></Col>
            //         <Col xs={6} md={4}><code>&lt;{'Col xs={6} md={4}'} /&gt;</code></Col>
            //     </Row>
            // </Grid> */
        )
    }
}