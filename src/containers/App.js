import React, { Component } from 'react';
import './App.scss';
import Layout from "./Layout/Layout"
import BurgerBuilder from "./BurgerBuilder/BurgerBuilder"
import Checkout from "./Checkout/Checkout"
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
              <Layout>
                <Route path="/" exact component={BurgerBuilder} />
                <Route path="/checkout" exact component={Checkout} />
              </Layout>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
