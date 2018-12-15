import React, { Component } from 'react';
import './Person.css';

class Person extends Component {
    state = {
        age: 25
    };

    birthday = () => this.setState({
        age: this.state.age + 1
    });

    render() {
        return (
            <div className="person-wrapper">
                <h1>My name is Niv and I'm {this.state.age} years old</h1>
                <button onClick={this.birthday}>Birthday!</button>
            </div>
        );
    }
}

export default Person;