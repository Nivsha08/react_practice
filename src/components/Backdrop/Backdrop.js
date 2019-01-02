import React from 'react';
import "./Backdrop.scss";

const backdrop = (props) => {
    const backdropClasses = props.show ? ["backdrop", "show"] : ["backdrop", "hide"];
    return <div className={backdropClasses.join(" ")} onClick={props.clickMethod}/>
};

export default backdrop;