import React from 'react';
import './validators.scss';

const validationComponent = ( props ) => {
    const validation = props.length < 5 ? "Text too short" : "Text long enough";
    return (
        <div className={props.length <= 5 ? "error-message" : "success-message"}>
            <p><strong>{validation}</strong></p>
        </div>
    );
};

export default validationComponent;