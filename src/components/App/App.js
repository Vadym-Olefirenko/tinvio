import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Header from '../Header/Header';
import HomePage from '../pages/HomePage/HomePage';

import './App.scss';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <HomePage />
        <Switch>
          <Route path="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
