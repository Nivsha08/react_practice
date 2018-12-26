import React from 'react'
import Logo from './Logo'
import NavItems from './NavItems'

const topBar = () => {
    return (
        <div id="topbar" className="container-fluid">
            <Logo/>
            <NavItems/>
        </div>
    );
};

export default topBar;