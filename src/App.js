import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
      </Switch>
    </div>
  );
}

export default App;
