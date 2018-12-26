import React from 'react';
import Logo from './Logo'
import NavItems from './NavItems'

const sidebar = () => {
    return (
        <div className="sidebar">
            <Logo />
            <NavItems />
        </div>
    )
};

export default sidebar;