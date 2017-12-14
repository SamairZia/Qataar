import React, { Component } from 'react';
import './App.css';
import Signup from './Signup'
import Team from './Team'
import AddTeam from './AddTeam'

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
            <div className="general">
                <h1 className="general">Hello from Team Qataar!</h1>
                <AddTeam />
                {infoList}
            </div>
        )
    }
}