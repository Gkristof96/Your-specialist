import React from "react";
import { Link } from "react-router-dom";

const SideDrawer = (props) => {
  const { open, drawerClick } = props;
  let drawerClass = "sidedrawer";
  if (open) {
    drawerClass = "siderdrawer open";
  }
  return (
    <>
      <nav className={drawerClass} onClick={drawerClick}>
        <ul>
          <li>
            <Link to="/provider">Szakemberek</Link>
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
      </nav>
    </>
  );
};

export default SideDrawer;
