import React from "react";
import {NavLink } from "react-router-dom";

export const Header =(props) => {
    return (
        <nav className="navbar navbar-default"> 
            <div className="container">
                <div className="navbar-header">
                    <ul className="nav navbar-nav">
                        <li><NavLink  to="/home" activeStyle={{color:"red"}}>Home</NavLink></li>
                        <li><NavLink  to="/user">User</NavLink></li>
                    </ul>
                </div>    
            </div>
        </nav>
    );
};
