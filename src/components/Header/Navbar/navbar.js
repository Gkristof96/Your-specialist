import React from "react";
import DrawerToggleButton from "./hamburger";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const { open, drawerClick } = props;
  return (
    <>
      <nav className="navbar">
        <div className="navbar__logo">
          <img src="../images/logo.png" alt="logo" />
          <h1 className="title">Your specialist</h1>
        </div>
        <div className="navbar__navigation">
          <ul>
            <li>
              <Link to="/providers">Szakemberek</Link>
            </li>
            <li>
              <Link to="/ajanlat">Ajánlatkérés</Link>
            </li>
            <li>
              <Link to="/about">Rólunk</Link>
            </li>
            <li>
              <Link to="/contact">Kapcsolat</Link>
            </li>
            <li className="auth">
              <Link to="/login">Bejelentkezés</Link>
            </li>
          </ul>
        </div>
        <div className="navbar__hamburger">
          <DrawerToggleButton drawerClick={drawerClick} open={open} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
