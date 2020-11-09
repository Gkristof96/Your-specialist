import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./components/Pages/Index/index";
import NotFound from "./components/Pages/404/404";
// import About from "./pages/About/about";
import Contact from "./components/Pages/Contact/contact";
import Providers from "./components/Pages/Providers/providers";
import Offer from "./components/Pages/Ajanlat/offer";
import Profile from "./components/Pages/Profile/profile";
import ProvidersList from "./components/Pages/ProvidersList/providerslist";
import Authentication from "./components/Pages/Authentication/authentication";
import Header from "./components/Header/header";
// import Footer from "./components/Footer/footer";

import "./css/style.css";
import axios from "axios";

function App() {
  const [loggedInStatus, setLoggedInStatus] = useState("NOT_LOGGED_IN");
  const [user, setUser] = useState({});

  const handleLogin = (data) => {
    setLoggedInStatus("LOGGD_IN");
    setUser(data.user);
  };
  const handleLogout = () => {
    setLoggedInStatus("NOT_LOGGED_IN");
    setUser({});
  };

  const checkLoginStatus = () => {
    axios
      .get("url", { withCredentials: true })
      .then((response) => {
        if (response.data.logged_in && loggedInStatus === "NOT_LOGGED_IN") {
          handleLogin();
        } else if (!response.data.logged_in && loggedInStatus === "LOGGED_IN") {
          handleLogout();
        }
      })
      .catch((error) => {
        console.log("check login error", error);
      });
  };

  useEffect(() => {
    checkLoginStatus();
    // eslint-disable-next-line
  }, []);
  return (
    <div className="App">
      
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Index} />
          {/*<Route path="/about" component={About} />*/}
          <Route path="/contact" component={Contact} />
          <Route path="/providers" component={Providers} />
          <Route path="/offer" component={Offer} />
          <Route
            path="/login"
            render={(props) => (
              <Authentication
                {...props}
                loggedInStatus={loggedInStatus}
                handleLogin={handleLogin}
              />
            )}
          />
          <Route
            path="/profile/:id"
            render={(props) => (
              <Profile
                {...props}
                loggedInStatus={loggedInStatus}
                handleLogout={handleLogout}
                user={user}
              />
            )}
          />
          <Route path="/providerslist" component={ProvidersList} />
          <Route component={NotFound} />
        </Switch>
        {/*<Footer />*/}
      </Router>
    </div>
  );
}

export default App;
