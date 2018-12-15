import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserForm/UserOutput';
import UserInput from './UserForm/UserInput';


class App extends Component {

  state = {
    username: "Nivsha08"
  };

  changeUsername = () => {
    this.setState({
        username: "Niv08"
    });
  };

  render() {
    return (
      <div className="App">
          <UserOutput username={this.state.username} />
          <UserInput click={this.changeUsername} />
      </div>
    );
  }
}

export default App;
