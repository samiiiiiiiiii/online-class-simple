import React from 'react';
import logo from '../../images/Illustration.png';
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav className="link">
                <a href="/course">Course</a>
                <a href="program">Porgram</a>
                <a href="Contatact us">Contact Us </a>
            </nav>
        </div>
    );
};

export default Header;