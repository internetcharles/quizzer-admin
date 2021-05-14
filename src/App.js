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

function App() {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Sidebar {...routerProps} />}
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
