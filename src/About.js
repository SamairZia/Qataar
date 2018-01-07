import React, { Component } from 'react';
import './App.css';
import './frontWeb/Features.css'
import samair from './samair.png'
import Signup from './Signup'
import Team from './Team'
import AddTeam from './AddTeam'
import Contact from './Contact'
import { Grid, Row, Col , Image} from 'react-bootstrap';

export default class About extends Component{
    render(){
        let infoList;
        if(this.props.info){
            infoList = this.props.info.map(infos => {
                return(
                    <Team key={infos.name} infos={infos} />
                )
            });
        }

        return(
            <div>
                {/* <div className="maindiv"></div> */}
                {/* <AddTeam />
                {infoList} */}
                <div className="aboutdiv" >
                    <h2 className="aboutheading"><strong>What is QATAAR?</strong></h2>
                    <p className="aboutparagraph">Have you ever been in the place where you have some urgent work to do but you find yoursellf standing in the queue for attaining certain service which shouldn't take much of your time?</p><br/>
                    
                    <p className="aboutparagraph">If YES, then now is the time to join <strong>QATAAR</strong>. This is complete solution of your problem. </p><br/>
                    
                    <p className="aboutparagraph"><strong>QATAAR</strong> provides you to join queue from anywhere virtually that means you dont have to be physically present and wait there insted you can utilize your time anywhere or just stay at home watching Netflix.</p><br/>
                    
                    <p className="aboutparagraph">We want you to get the most out of your day, saving you time by eradicating irritating and unnecessary waiting. At the same time we also want to help businesses and service providers to improve overall customer experience.</p><br/>
                    
                    <p className="aboutparagraph">The main goal of this solution is to save the most precious thing in anyone's life i.e. 'The Time'.</p><br/>

                    <p className="aboutparagraph">We hope that Qataar will make serious contributions to your life and helps you save your valuable time so that you can proudly say <strong>Ab Line Kyun?</strong></p>
                </div><br/><hr />
                <Contact />
            </div>
        )
    }
}