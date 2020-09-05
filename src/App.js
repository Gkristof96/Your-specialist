import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index/index";
import NotFound from "./pages/404/404";
import Header from "./components/Header/header";
import Footer from "./components/Footer/footer";
import "./css/style.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
