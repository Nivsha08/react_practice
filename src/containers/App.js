import React, { Component } from 'react';
import './App.scss';
import TopBar from "../components/Navigation/Topbar"

class App extends Component {

  render() {
    return (
      <div className="App">
          <TopBar/>
      </div>
    );
  }
}

export default App;
