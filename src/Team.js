import React, { Component } from 'react';

export default class Team extends Component{
    render(){
        return(
            <li>
                <strong>{this.props.infos.name}</strong>  - {this.props.infos.title}
            </li>            
        )
    }
}