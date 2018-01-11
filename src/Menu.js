import {Link} from 'react-router-dom'
import React,{Component} from 'react';
import HomeIcon from 'react-icons/lib/fa/home'
// import AddDayIcon from 'react-icons/lib/fa/calendar-plus-o'
// import ListDaysIcon from 'react-icons/lib/fa/table'

export default class Menu extends Component{
    render(){
        return(
            <header className="topnav">
                <div className="menulogo">
                    {/* Logo */}
                </div>
                <nav >
                    {/* <Link to="/partners">Partners</Link> */}
                    {/* <Link to="/pricing">Pricing</Link> */}
                    {/* <Link to="/products">Products</Link> */}
                    {/* <Link to="/my-account">My Account</Link> */}
                    {/* <Link to="/contact-us">Contact Us</Link> */}
                    <Link to="/about-us">About Us</Link>
                    <Link to="/features">Features</Link>
                    <Link to="/sign-up" className="second">Sign up</Link>
                    <Link to="/log-in" className="third">Log In</Link>
                    <Link to="/" className="first"><HomeIcon /></Link>
                </nav>
            </header>
        )
    }
}