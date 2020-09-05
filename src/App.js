import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages/Index/index";
import NotFound from "./pages/404/404";
import About from "./pages/About/about";
import Contact from "./pages/Contact/contact";
import Providers from "./pages/Providers/providers";
import Ajanlat from "./pages/Ajanlat/ajanlat";
import Profile from "./pages/Profile/profile";
import ProvidersList from "./pages/ProvidersList/providerslist";
import Authentication from "./pages/Authentication/authentication";
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
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/providers" component={Providers} />
          <Route path="/ajanlat" component={Ajanlat} />
          <Route path="/login" component={Authentication} />
          <Route path="/profile/:id" component={Profile} />
          <Route path="/providerslist" component={ProvidersList} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
