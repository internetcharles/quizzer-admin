/* eslint-disable import/no-named-as-default */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar/Sidebar';
import Form from './Components/Form/Form';
import { Home } from './Components/Home/Home';

function App() {
  return (
    <>
      <Header />
      <Router>
        <Sidebar />
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          />
          <Route
            path="/quizform"
            exact
            render={(routerProps) => <Form {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
