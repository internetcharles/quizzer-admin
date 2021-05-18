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
import Sidebar from './Components/Sidebar/Sidebar';
import Form from './Components/Form/Form';
import { Home } from './Components/Home/Home';
import { Quiz } from './Components/Quiz/Quiz';

function App() {
  return (
    <>
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
          <Route
            path="/quizzes/:id"
            exact
            render={(routerProps) => <Quiz {...routerProps} />}
          />
        </Switch>
      </Router>
    </>
  );
}

export default App;
