import React from 'react'
import "./navigation.scss"
import { NavLink } from 'react-router-dom'

const navItems= () => {
    return (
        <div>
            <ul className="navigation-items">
                <li className="nav-link"><NavLink exact to="/">Build Your Burger</NavLink></li>
                <li className="nav-link"><NavLink exact to="/checkout">Checkout</NavLink></li>
            </ul>
        </div>
    );
};

export default navItems;