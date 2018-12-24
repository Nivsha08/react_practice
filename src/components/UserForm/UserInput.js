import React from "react";

const userInput = ( props ) => {

    const inputStyle = {
        padding: "1rem .5rem",
        borderRadius: "5px",
        width: "20%",
        border: "1px solid #eee",
        boxShadow: "none"
    };

    const buttonStyle = {
        padding: ".5rem 1rem",
        color: "#fff",
        backgroundColor: "#229d3b",
        marginTop: "1rem",
        borderRadius: "5px",
        border: "none"
    };

    const wrapperStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "2rem"
    };

    return (
        <div className="input-wrapper" style={ wrapperStyle }>
            <input onChange={ props.change } type="text" placeholder="enter a new username..." style={ inputStyle } />
            <button onClick={ props.click } style={ buttonStyle }>Change!</button>
        </div>
    );
};

export default userInput;