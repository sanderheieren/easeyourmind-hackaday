import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Photo from './components/Photo';
import Quote from './components/Quote'
import NavBar from "./components/NavBar";
import Header from './components/Header'
import './App.css'

function App() {

  return (
    <Router>
      <Header />
      <NavBar />
      <Switch>
        <Route component={Home} path="/" exact />
        <Route component={Photo} path="/nasaphoto" />
        <Route component={Quote} path="/quote" />
      </Switch>
    </Router>
  );
}
export default App;





