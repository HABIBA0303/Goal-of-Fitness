import React from 'react';
import './header.css'
const Header = () => {
    return (
        <div>
            <nav className='header'>
                <div className='logo'>

                    <span>GoaL OF Fitness</span>

                </div>
                <div className='' >
                    <a href="/shop">Home </a>
                    <a href="/service">Service</a>
                    <a href="/about">About</a>
                    <a href="/contact">Contact Us</a>
                </div>
            </nav>
        </div>
    );
};

export default Header;