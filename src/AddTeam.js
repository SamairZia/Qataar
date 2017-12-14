import React, { Component } from 'react';

export default class AddTeam extends Component{

    constructor(){
        super();
        this.state ={
            newMember : {}
        }
    }

    static defaultProps = {
        titles : ['Group Leader' , 'Group Member', 'Internal' , 'Contributor']
    }

    hancleSubmit(e){
        if(this.refs.name.value === ''){
            alert('Title is empty.');
        }
        else{
            this.setState({newMember:{
                name: this.refs.name.value,
                title: this.refs.title.value
        }}, function(){
            console.log(this.state)
        })
        }
        e.preventDefault();
    }

    render(){

        let titleOptions = this.props.titles.map(title => {
            return <option key={title} value="title">{title}</option>
        })
        return(
        <div>
            <h3>Add Member</h3>
            <form onSubmit={this.hancleSubmit.bind(this)}>
                <div>
                    <label>Name</label><br />
                    <input type="text" ref="name" />
                </div>
                <div>
                    <label>Title</label><br />
                    <select ref="title">
                        {titleOptions}
                    </select>
                </div>
                <input type="submit" value="submit" />
            </form>
        </div>            
        )
    }
}