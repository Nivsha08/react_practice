import React, { Component } from 'react';
import './App.scss';
import TopBar from "../components/Navigation/Topbar"
import Layout from "../components/Layout/Layout"
import BurgerBuilder from "../components/BurgerBuilder/BurgerBuilder"

class App extends Component {

  render() {
    return (
      <div className="App">
          <TopBar />
          <Layout>
            <BurgerBuilder />
          </Layout>
      </div>
    );
  }
}

export default App;
