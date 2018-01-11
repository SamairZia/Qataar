import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'

class ConfirmEmail extends Component{
    constructor(props){
        super(props);
        this.state = {
            code: '',
        }
        this.onCodeChange = this.onCodeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onCodeChange(event){
        this.setState({
            code: event.target.value
        })
    }

    onSubmit(){
            
        alert('Email sent!')
    }

    render(){
        return(
            <div>
                <div className="log-in" >
            <div className="temp" >
                <h2 >Confirm your Email</h2>
                
                <input className="input_field_confirmemail" type="text" placeholder="Type code here" value={this.state.code} onChange={this.onCodeChange} required/><br /><br />

                <button className="btn_login" onClick={this.onSubmit} >Submit</button><br /> <br />
                {/* <button className="btn_login" type="button" >Cancel</button><br /><br /> */}

            </div>
            </div>
            </div>
        )
    }
}
export default withRouter(ConfirmEmail);
