import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import Product from './Components/Product/Product'
import { HashRouter, Switch, Route } from 'react-router-dom';
import router from './router.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <div>
            <Header />
            {router}
          </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
