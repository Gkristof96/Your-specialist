import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index/index";
import Header from "./components/Header/header";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={Index} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
