import React from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.scss";

function NavBar() {
    return (
        <div className="row navbar-wrapper">
            <div className="col s4">
                <NavLink to="/settings" activeClassName="activeLink">
                    <span className="mdi mdi-account-circle mdi-36px"></span>
                </NavLink>
            </div>
            <div className="col s4">
                <NavLink exact to="/" activeClassName="activeLink">
                    <span className="mdi mdi-heart mdi-36px"></span>
                </NavLink>
            </div>
            <div className="col s4 nav-item">
                <NavLink to="/matches" activeClassName="activeLink">
                    <span className="mdi mdi-chat-processing mdi-36px"></span>
                </NavLink>
            </div>
        </div>
    );
}

export default NavBar;
