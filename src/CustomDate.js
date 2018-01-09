import React, { Component } from 'react';
// import '../App.css';

export default class CustomDate extends Component {

    constructor(props){
        super(props);
        this.state = {
            //Digital clock stuff 
            currentTime : new Date().toLocaleString()
        }
       this.updateTime();
    }

    updateTime(){
        setInterval(() => {
            this.setState({
            currentTime : new Date().toLocaleString()                
            })
        }, 1000)
    }
    render(){
        return(
            <h1 className="general">
                <p><strong> {this.state.currentTime}</strong></p>
                </h1>
        )
    }
}
