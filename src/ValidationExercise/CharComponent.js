import React from 'react';
import "./validators.scss";

const charComponent = ( props ) => {
    return (
        <div className="char-component" onClick={props.click}>
            {props.letter}
        </div>
    );
};

export default charComponent;