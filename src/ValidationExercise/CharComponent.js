import React from 'react';

const charComponent = ( props ) => {
    const style = {
        display: "inline-block",
        padding: "10px",
        margin: "1px",
        textAlign: "center",
        border: "1px solid #333",
        borderRadius: "4px",
        cursor: "pointer"
    };

    return (
        <div style={style} onClick={props.click}>
            {props.letter}
        </div>
    );
};

export default charComponent;