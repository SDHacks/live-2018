import React from "react";
import { slide as Menu } from "react-burger-menu";
import logo from './assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'

class SideBar extends React.Component {
    
    render() {
        return (
            <Menu className="container p-0" customCrossIcon={ <FontAwesomeIcon icon={faAngleLeft} /> }>
                <div className="row">
                    <img src={logo} alt="SDHacks Logo" className="sidebar__logo"></img>
                </div>
                <div className="sidebar__copy text-center text-white mt-3 mb-4">
                    <h3 className="sidebar__header">SD HACKS LIVE</h3>
                    <h4 className="sidebar__subheader">Your Hackathon Dashboard</h4>
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
                <NavLink className="sidebar__item" to="/schedule">
                    <h3>Full Schedule</h3>
                </NavLink>
                <NavLink className="sidebar__item" to="/contact">
                    <h3>Contact</h3>
                </NavLink>
            </Menu>
        );
    }
}


export default SideBar;