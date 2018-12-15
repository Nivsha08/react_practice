import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import UserOutput from './UserForm/UserOutput';
import UserInput from './UserForm/UserInput';


class App extends Component {

  state = {
    username: "Nivsha08",
    input: "",
  };

  changeUsername = () => {
    this.setState({
        username: this.state.input
    });
  };

  inputBind = ( event ) => {
      this.setState({
          input: event.target.value
      });
  };

  render() {
    return (
      <div className="App">
          <UserOutput username={ this.state.username } />
          <UserInput change={ this.inputBind } click={ this.changeUsername } />
      </div>
    );
  }
}

export default App;
