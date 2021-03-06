import React, {useContext } from "react";
import { Link } from "react-router-dom";
import DrawerToggleButton from "./Hamburger";
import ProfileButton from './ProfileButton'
import LoginButton from "./LoginButton";
import AuthContext from "../../../contexts/authContext";

const Navbar = ({ open, drawerClick }) => {
  const {isLoggedIn, user} = useContext(AuthContext)
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src="../images/logo.png" alt="logo" />
          <h1>Your specialist</h1>
        </Link>
        <div className="navbar__navigation">
          <ul>
            <li>
              <Link to="/providers">Szakemberek</Link>
            </li>
            <li>
              <Link to="/offer">Ajánlatkérés</Link>
            </li>
            {/*<li>
              <Link to="/about">Rólunk</Link>
            </li>*/}
            <li>
              <Link to="/contact">Kapcsolat</Link>
            </li>
            <li>|</li>
            <li>
              {isLoggedIn ? <ProfileButton username={user.name} /> : <LoginButton />}
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
