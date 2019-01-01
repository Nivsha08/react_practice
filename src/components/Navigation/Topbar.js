import React from 'react'
import Logo from './Logo'
import NavItems from './NavItems'
import ToggleButton from './Sidebar/ToggleButton'
import "./navigation.scss"

const topBar = ( props ) => {
    const view = document.getElementsByTagName("body")[0].clientWidth;
    console.log(view);
    return (
        <div id="topbar" className="container-fluid">
            { view <= 767 ? <ToggleButton visible={props.visible}
                                          open={props.open}
                                          close={props.close} /> : null }
            <Logo/>
            <NavItems/>
        </div>
    );
};

export default topBar;