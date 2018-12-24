import React from 'react';
import './Person.css';

const person = ( props ) => {
    return (
        <div className="person-wrapper">
            <button onClick={props.click}>DELETE</button>
            <h4>My name is {props.name} and I'm {props.age} years old</h4>
            <p>Status: {props.status}</p>
            <input onBlur={props.update} type="text" placeholder="change your status..."/>
        </div>
    );
}

export default person;