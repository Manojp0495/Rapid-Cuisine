import React from 'react';
import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Header = () => {
    const[btnNameReact,setBtnNameReact]=useState("Login");
    const onlineStatus=useOnlineStatus();
    return (
        <header className="header">
            <div className="logocontainer">
                <img 
                    className="logo" 
                    src={LOGO_URL} 
                    alt="Logo" 
                />
            </div>
            <div className="nav-items">
                <ul>
                    <li>{onlineStatus===true? "Online🟢" : "Offline🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li>
                    <Link to="/about">About Us</Link>
                        </li>
                        <li>
                            <Link to="/grocery">Grocery</Link>
                        </li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                        </li>
                    <li>Cart</li>
                    <button className='login' onClick={()=>{
                       btnNameReact==="Login"?
                       setBtnNameReact("Logout"):
                       setBtnNameReact("Login")
                    }}>{btnNameReact}</button>
                </ul>
            </div>
        </header>
    );
};

export default Header