import React from 'react';
import "./layout.scss"

const layout = ( props ) => {
    return (
        <div className="page-wrapper">
            { props.children }
        </div>
    );
};

export default layout;