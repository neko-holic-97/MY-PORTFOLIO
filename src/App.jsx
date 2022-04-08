import React from "react";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css";
import Body from "./components/body/Body";
import { BrowserRouter as Router } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="app__container">
          <Sidebar />
          <Body />
        </div>
      </div>
    </Router>
  );
};

export default App;
