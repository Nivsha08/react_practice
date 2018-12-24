import React, { Component } from 'react';
import './App.scss';
import "../components/ValidationExercise/validators.scss";
import ValidationComponent from '../components/ValidationExercise/ValidationComponent';
import CharComponent from '../components/ValidationExercise/CharComponent';
import StatusBar from '../components/ValidationExercise/StatusBar';

export const PageState = React.createContext();

class App extends Component {

  state = {
    message: "",
    length: 0,
    pageStatus: "Offline"
  };

  inputElement = React.createRef();
  classes = [];

  changeHandler = (event) => {
    this.setState({
       message: event.target.value,
       length: event.target.value.length,
    });
  };

  deleteCharHandler = (i) => {
    let newMessage = this.state.message.slice().split('');
    newMessage.splice(i, 1);
    this.setState({
        message: newMessage.join(''),
        length: this.state.length - 1
    })
  };

  pageStatusChangeHandler = () => {
      this.setState((prevState) => {
          return {
              pageStatus: (prevState.pageStatus === "Offline") ? "Online!" : "Offline"
          }
      })
  }

  componentDidMount() {
      this.inputElement.current.focus();    //  focus on the user input field on mount
  }

  render() {
    const textArray = this.state.message.slice().split('');
    this.classes = this.state.length > 5 ? ["valid"] : ["error"];
    return (
      <div className="App">
          <PageState.Provider value={this.state.pageStatus}>
              <StatusBar click={this.pageStatusChangeHandler}/>
          </PageState.Provider>
          <hr/>
          <input type="text" ref={this.inputElement} placeholder="enter your text..." onChange={this.changeHandler}/>
          <p className={this.classes.join(' ')}>{this.state.length}</p>
          <h4>Validator:</h4>
          <ValidationComponent length={this.state.length} />
          <hr/>
          <h4>Output Text:</h4>
          <div className="char-list-wrapper">
              {textArray.map((l, index) => {
                  return (
                      <CharComponent letter={l} key={index}
                                     click={() => this.deleteCharHandler(index)} />
                  );
              })}
          </div>
      </div>
    );
  }
}

export default App;
