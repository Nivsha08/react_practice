import React from 'react'
import "./navigation.scss"

const navItems= () => {
    return (
        <div>
            <ul className="navigation-items">
                <li className="nav-link active"><a href="/">Build Your Burger</a></li>
                <li className="nav-link"><a href="/">Checkout</a></li>
            </ul>
        </div>
    );
};

export default navItems;