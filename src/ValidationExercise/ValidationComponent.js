import React from 'react';

const validationComponent = ( props ) => {
    const validation = props.length > 5 ? "Text long enough" : "Text too short";
    return (
        <div>
            <p>{validation}</p>
        </div>
    );
};

export default validationComponent;