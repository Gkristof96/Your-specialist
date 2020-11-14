import React from "react";
import { Link } from "react-router-dom";

const SideMenu = ({drawerClick}) => {
  return (
    <>
      <nav className='sidedrawer' onClick={drawerClick}>
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

export default SideMenu;
