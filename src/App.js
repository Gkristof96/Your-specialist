import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <h1>Hello there</h1>
      </Router>
    </div>
  );
}

export default App;
