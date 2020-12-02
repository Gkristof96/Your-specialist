import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from '../../../contexts/authContext'
import ProfileButton from '../Navbar/ProfileButton'
import LoginButton from "../Navbar/LoginButton";

const SideMenu = ({drawerClick}) => {
  const {isLoggedIn, user} = useContext(AuthContext)
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
            <li>
              {isLoggedIn ? <ProfileButton username={user.name} /> : <LoginButton />}
            </li>
          </ul>
      </nav>
    </>
  );
};

export default SideMenu;
