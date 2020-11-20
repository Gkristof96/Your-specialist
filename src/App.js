import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Header from './components/Header'
import Index from './pages/Index'
import Contact from './pages/Contact'
import Providers from './pages/Providers'
import Offer from './pages/Ajanlat'
import Profile from './pages/Profile'
import Authentication from './pages/Authentication'
import NotFound from './pages/404'
import ProvidersList from './pages/ProvidersList'

import "./css/style.css";
import { AuthProvider } from "./contexts/authContext";
import { InputProvider } from './contexts/inputContext'

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
