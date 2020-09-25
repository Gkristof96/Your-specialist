import React from "react";
import { Link } from "react-router-dom";

const SideDrawer = ({ drawerClick, open }) => {
  let drawerClass = "sidedrawer";

  if (open) {
    drawerClass = "sidedrawer open";
  }
  return (
    <>
      <nav className={drawerClass} onClick={drawerClick}>
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
          <li className="auth">
            <Link to="/login">Bejelentkezés</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default SideDrawer;
