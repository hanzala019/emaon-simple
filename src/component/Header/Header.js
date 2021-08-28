import React from 'react';
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            
            <img src={logo} alt="" />
            <nav>
            <a href="/shop">Shop</a>
            <a href="/review">Order Review</a>
            <a href="/inventory">Manage Inventory</a>
            </nav>

            <div className='search-bar'>
            <input type='text' placeholder='Search products...'></input>
            <button className="btn">Search</button>
            </div>
           
        </div>
    );
};

export default Header;