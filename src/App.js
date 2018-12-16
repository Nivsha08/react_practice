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
    showForm: true
  };

  toggleForm = () => {
      this.setState({
          showForm: !this.state.showForm
      });
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
    let userForm = null;
    if ( this.state.showForm ) {
        userForm = (
            <div>
                <UserOutput username={ this.state.username } />
                <UserInput change={ this.inputBind } click={ this.changeUsername } />
            </div>
        );
    }
    return (
      <div className="App">
          <button onClick={ this.toggleForm }>TOGGLE</button>
          { userForm }
      </div>
    );
  }
}

export default App;
