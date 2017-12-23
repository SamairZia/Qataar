import React, { Component } from 'react';
import './App.css';
import Menu from './Menu'
import Signup from './Signup'
import Home from './Home'
import Login from './Login'
import About from './About'
import Contact from './Contact'
import Account from './dashboard/Account'
import Terms from './Terms'
import AddTeam from './AddTeam'
import Whoops404 from './Whoops404'
import Products from './frontWeb/Products'
import Pricing from './frontWeb/Pricing'
import Features from './frontWeb/Features'
import Partners from './frontWeb/Partners'
import Services from './dashboard/aftersignup/Services'
import CompanyInformation from './dashboard/aftersignup/CompanyInformation'
import Users from './dashboard/Users'
import Branches from './dashboard/Branches'
import Information from './dashboard/Information'
import Reports from './dashboard/Reports'

export default class MainClass extends Component{
    constructor(){
        super(  );
        this.state = {
            info : []
        }
    }

    componentWillMount(){
        this.setState({info : [
            {
                name: 'Shayan Ahmed',
                title: 'Group Leader'
            },
            {
                name: 'Samair Zia',
                title: 'Group Member',
            },
            {
                name: 'Badiuzzaman',
                title: 'Group Member'
            },
            {
                name: 'Muhammad Umair',
                title: 'Group Member'
            }
        ]})
    }

    render(){
        return(
            <div>
            <Menu />
            {(this.props.location.pathname === "/") ?
            <Home /> : (this.props.location.pathname === "/sign-up") ?
            <Signup /> : (this.props.location.pathname === "/log-in") ?
            <Login /> : (this.props.location.pathname === "/about-us") ? 
            <About info={this.state.info} /> : (this.props.location.pathname === "/contact-us") ?
            <Contact /> : (this.props.location.pathname === "/products") ?
            <Products /> : (this.props.location.pathname === "/pricing") ?
            <Pricing /> : (this.props.location.pathname === "/features") ?
            <Features /> : (this.props.location.pathname === "/partners") ?
            <Partners /> : (this.props.location.pathname === "/my-account") ?
            <Account /> : (this.props.location.pathname === "/company") ?
            <CompanyInformation/> : (this.props.location.pathname === "/services") ?
            <Services /> : (this.props.location.pathname === "/users") ?
            <Users /> : (this.props.location.pathname === "/reports") ?
            <Reports /> : (this.props.location.pathname === "/information") ?
            <Information /> : (this.props.location.pathname === "/branches") ?
            <Branches /> : (this.props.location.pathname === "/terms") ?
            <Terms /> : <Whoops404 />
        }
            </div>
        )
    }
}