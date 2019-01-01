import React from 'react';

const toggleButton = ( props ) => {
    return (
        <button onClick={props.visible ? props.close : props.open} className="btn btn-md btn-link">
            <span className="fas fa-bars" />
        </button>
    );
};

export default toggleButton;