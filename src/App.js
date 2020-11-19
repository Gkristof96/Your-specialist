import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Pages/Index/index";
import NotFound from "./components/Pages/404/404";
import Contact from "./components/Pages/Contact/contact";
import Providers from "./components/Pages/Providers/providers";
import Offer from "./components/Pages/Ajanlat/offer";
import Profile from "./components/Pages/Profile/profile";
import ProvidersList from "./components/Pages/ProvidersList/providerslist";
import Authentication from "./components/Pages/Authentication/authentication";
import Header from "./components/Header/header";

import "./css/style.css";
import { AuthProvider } from "./contexts/authContext";
import { InputProvider } from './contexts/inputContext'

function App() {
  return (
    <div className="App">
      
      <Router>
        <AuthProvider>
          <Header />
          <InputProvider>
          <Switch>
            <Route 
              exact 
              path="/" 
              component={Index} 
            />
            <Route 
              path="/contact" 
              component={Contact} 
            />
            <Route 
              path="/providers" 
              component={Providers} 
            />
            <Route 
              path="/offer" 
              component={Offer} 
            />
            <Route
              path="/login"
              component={Authentication}
            />
            <Route
              path="/profile/:id"
              component={Profile}
            />
            <Route 
              path="/providerslist" 
              component={ProvidersList} 
            />
            <Route component={NotFound} />
          </Switch>
          </InputProvider>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
