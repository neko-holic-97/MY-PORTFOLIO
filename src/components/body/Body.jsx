import React from "react";
import Navbar from "./Navbar";
import "./body.css";
import About from "./About";
import Resume from "./Resume";
import Projects from "./Projects";
import { Route, Redirect, Switch } from "react-router-dom";

const body = () => {
  return (
    <div className="body">
      <div className="navbar_container">
        <Navbar />
      </div>
      <div className="body__container">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default body;
