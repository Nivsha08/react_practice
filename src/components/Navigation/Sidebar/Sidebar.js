import React from "react";
import NavItems from "../NavItems"
import Backdrop from "../../Backdrop/Backdrop"
import "./sidebar.scss"

const sidebar = ( props ) => {
    const sidebarClasses = props.show ? ["sidebar", "open"] : ["sidebar", "close"];
    return (
        <div>
            <Backdrop show={props.show} clickMethod={props.close}/>
            <div className={sidebarClasses.join(" ")}>
                <NavItems />
            </div>
        </div>
    )
};

export default sidebar;