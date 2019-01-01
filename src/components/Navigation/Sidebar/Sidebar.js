import React from "react";
import NavItems from "../NavItems"
import Backdrop from "../../Backdrop/Backdrop"
import "./sidebar.scss"

const sidebar = ( props ) => {
    const classes = props.show ? ["sidebar", "open"] : ["sidebar", "close"];
    return (
        <div>
            <Backdrop show={props.show} clickMethod={props.close}/>
            { props.show ?
                <div className={classes.join(" ")}>
                    <NavItems />
                </div>
            : null }
        </div>
    )
};

export default sidebar;