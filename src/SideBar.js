import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from './assets/logo.svg';
import { NavLink } from 'react-router-dom'

class SideBar extends React.Component {
    
    render() {
        return (
            <Menu className="container p-0">
                    <div className="row">
                        <img src={logo} className="sidebar__logo"></img>
                    </div>
                    <div className="sidebar__copy text-center text-white mt-3 mb-4">
                        <h3>SD HACKS LIVE</h3>
                        <h4>Your Hackathon Dashboard</h4>
                    </div>
                    <NavLink className="sidebar__item" to="/">
                        <h3>Home</h3>
                    </NavLink>
            
                    <NavLink className="sidebar__item" to="/countdown">
                        <h3>Countdown</h3>
                    </NavLink>
                    <NavLink className="sidebar__item" to="/announcements">
                        <h3>Announcements</h3>
                    </NavLink>                
                    <NavLink className="sidebar__item" to="/links">
                        <h3>Helpful Links</h3>
                    </NavLink>
                    <NavLink className="sidebar__item" to="/whats">
                        <h3>What's Going On?</h3>
                    </NavLink>
                    <a className="sidebar__item" href="/burgers">
                        <h3>Full Schedule</h3>
                    </a>
                    <a className="sidebar__item" href="/burgers">
                        <h3>Contact</h3>
                    </a>
            </Menu>
        );
    }
}


export default SideBar;