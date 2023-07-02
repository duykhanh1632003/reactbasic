import React from 'react';
import logo from './logo.svg';
import './App.scss';
import MyComponents from './exam/MyComponents';
import CountComponents from './exam/CountComponents';
import TestComponents from './exam/TestComponents';
import ListTodo from './ToDo/ListTodo';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Nav from './navication/Nav';
import Homee from './exam/Homee';
import ListUser from './exam/Users/ListUser';
import DetaiUser from './exam/Users/DetailUser';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <code>Code này là của tôi</code>
          </p>
          <Switch>
            <Route path="/home" component={Homee} />
            <Route path="/todo" component={ListTodo} />
            <Route path="/about" component={MyComponents} />
            <Route path="/contact" component={CountComponents} />
            <Route path="/user" component={ListUser} exact />
            <Route path="/user/:id" component={DetaiUser} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default App;
